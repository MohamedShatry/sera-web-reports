import React, { useState } from 'react';
import { Card, Input, Button, Alert } from 'antd';
import { Redirect } from 'react-router-dom';

export default function UAInput(props) {
  const [fetchId, setFetchId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [redirectURI, setRedirectURI] = useState(null);

  const callFetchId = (e) => {
    let value = e.target.value;
    setFetchId(value);
  };

  const retrieveAndRedirect = async () => {
    setLoading(true);

    const url = `https://us-central1-sera-web-reports.cloudfunctions.net/api/uadata/${fetchId}`;
    const data = await fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        setLoading(false);
        setError(err);
        return;
      });

    if (error) {
      setLoading(false);
      return;
    }

    console.log(data);
    const { surveyId, responseId } = data;
    const redirectURI = `/ua-report/${surveyId}/${responseId}/${fetchId}`;
    setRedirectURI(redirectURI);
    setLoading(false);
  };

  return (
    <>
      {redirectURI ? (
        <Redirect to={redirectURI} />
      ) : (
        <div style={{ width: '600px', margin: '30px auto' }}>
          <Card title='Fetch data by ID' style={{ width: '100%' }}>
            {error && (
              <Alert
                message='There was a problem with your input. Please try again'
                type='error'
                showIcon
              />
            )}
            <p style={{ margin: '10px 10px' }}>
              {' '}
              Enter your ID to retrieve your report.{' '}
            </p>
            <Input
              style={{ width: '300px', margin: '10px 10px' }}
              placeholder='Please enter ID'
              required
              onChange={(e) => callFetchId(e)}
            ></Input>
            <br></br>
            <Button
              style={{ margin: '10px 10px' }}
              type='primary'
              loading={loading}
              onClick={() => retrieveAndRedirect(fetchId)}
            >
              {' '}
              {loading ? 'Loading' : 'View Report'}
            </Button>
          </Card>
        </div>
      )}
    </>
  );
}
