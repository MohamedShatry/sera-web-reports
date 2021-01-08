'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize firebase admin account.
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  // @ts-ignore
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sera-web-reports.firebaseio.com',
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = admin.firestore();

// Get Data for a certain responseId.
app.get('/data/:responseId', async (req, res) => {
  const responseId = req.params.responseId;
  const doc = await db.collection('reports').doc(responseId).get();

  if (!doc.exists) {
    functions.logger.error(
      'Document does not exist. Error trying to fetch document in data for :',
      responseId
    );
    return res.status(500).send('Document does not exist');
  } else {
    functions.logger.log('Successfully fetched data for: ', responseId);
  }

  const data = doc.data();
  res.status(200).send(data);
});

// Post data to the databse.
app.post('/data', async (req, res) => {
  const surveyId = req.body.surveyId;
  const responseId = req.body.responseId;

  const fetchURL = `https://yalesurvey.qualtrics.com/API/v3/surveys/${surveyId}/responses/${responseId}`;
  const header = {
    'Content-Type': 'application/json',
    'X-API-TOKEN': functions.config().qualtrics.key,
  };

  // Get data associated with requestId.
  const response = await axios
    // @ts-ignore
    .get(fetchURL, { headers: header })
    .then((res) => {
      functions.logger.log(
        `Successfully fetched data for /${surveyId}/${responseId} from Qualitrics`
      );
      return res.data;
    })
    .catch((err) => {
      functions.logger.log(
        'Failed to fetch data from Qualtrics. Attempt terminated with error :',
        err
      );
      return res.status(500).send('Error encountered in fetching data');
    });

  const { PS, ES, RE, DI, SO, EX, AV, RU, endDate } = response.result.values;

  const toBeStored = {
    AV: AV,
    DI: DI,
    ES: ES,
    EX: EX,
    PS: PS,
    RE: RE,
    RU: RU,
    SO: SO,
    date: endDate,
    surveyId: surveyId,
  };

  const doc = await db.collection('reports').doc(responseId).get();

  if (!doc.exists) {
    const result = await db
      .collection('reports')
      .doc(responseId)
      .create(toBeStored)
      .then((res) => {
        functions.logger.log(
          'Successfully created new object with responseId: ',
          responseId
        );
        return res;
      })
      .catch((err) => {
        functions.logger.error(
          'Failed to create new firebase document, terminated with error: ',
          err
        );
        return res
          .status(500)
          .send('Error encountered in creating new document');
      });
  } else {
    functions.logger.log(
      'Document already exists with responseId: ',
      responseId
    );
  }

  res.status(201).send(toBeStored);
});

// Get data for Urban Assembly
app.get('/uadata/:studentId', async (req, res) => {
  const studentId = req.params.studentId;
  const doc = await db.collection('ua-reports').doc(studentId).get();

  if (!doc.exists) {
    functions.logger.error(
      'Document does not exist. Error trying to fetch document in data for :',
      studentId
    );
    return res.status(500).send('Document does not exist');
  } else {
    functions.logger.log('Successfully fetched data for: ', studentId);
  }

  const data = doc.data();
  res.status(200).send(data);
});

// Post data for Urban Assembly
app.post('/uadata', async (req, res) => {
  const surveyId = req.body.surveyId;
  const responseId = req.body.responseId;
  const studentId = req.body.studentId;

  const fetchURL = `https://yalesurvey.qualtrics.com/API/v3/surveys/${surveyId}/responses/${responseId}`;
  const header = {
    'Content-Type': 'application/json',
    'X-API-TOKEN': functions.config().qualtrics.key,
  };

  // Get data associated with requestId.
  const response = await axios
    // @ts-ignore
    .get(fetchURL, { headers: header })
    .then((res) => {
      functions.logger.log(
        `Successfully fetched data for /${surveyId}/${responseId} from Qualitrics`
      );
      return res.data;
    })
    .catch((err) => {
      functions.logger.log(
        'Failed to fetch data from Qualtrics. Attempt terminated with error :',
        err
      );
      return res.status(500).send('Error encountered in fetching data');
    });

  const { PS, ES, RE, DI, SO, EX, AV, RU, endDate } = response.result.values;

  const toBeStored = {
    AV: AV,
    DI: DI,
    ES: ES,
    EX: EX,
    PS: PS,
    RE: RE,
    RU: RU,
    SO: SO,
    date: endDate,
    responseId: responseId,
    surveyId: surveyId,
  };

  const doc = await db.collection('ua-reports').doc(studentId).get();

  if (!doc.exists) {
    // @ts-ignore
    const result = await db
      .collection('ua-reports')
      .doc(studentId)
      .create(toBeStored)
      .then((res) => {
        functions.logger.log(
          'Successfully created new object with studentId: ',
          studentId
        );
        return res;
      })
      .catch((err) => {
        functions.logger.error(
          'Failed to create new firebase document, terminated with error: ',
          err
        );
        return res
          .status(500)
          .send('Error encountered in creating new document');
      });
  } else {
    functions.logger.log('Document already exists with studentId: ', studentId);
  }

  res.status(201).send(toBeStored);
});

// Delete emails from qualtrics.
app.post('/delete', async (req, res) => {
  const surveyId = req.body.surveyId;
  const responseId = req.body.responseId;

  const fetchURL = `https://yalesurvey.qualtrics.com/API/v3/surveys/${surveyId}/responses/${responseId}`;
  const header = {
    'Content-Type': 'application/json',
    'X-API-TOKEN': functions.config().qualtrics.key,
  };

  // @ts-ignore
  let error = false;
  const response = await axios
    // @ts-ignore
    .delete(fetchURL, { headers: header })
    .then((res) => {
      functions.logger.log(
        `Successfully deleted data for /${surveyId}/${responseId} from Qualtrics`
      );
      return res.data;
    })
    .catch((err) => {
      functions.logger.error(
        `Error deleting data for /${surveyId}/${responseId}. Terminated with error: ${err}`
      );
      return res.status(500).send('Error deleting data');
    });

  res.status(200).send(response);
});

// Export functions to api route.
exports.api = functions.https.onRequest(app);
