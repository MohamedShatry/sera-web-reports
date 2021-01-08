import React, { useRef, useState, useEffect } from 'react';
import { Button, Spin } from 'antd';
import ReactToPrint from 'react-to-print';
import Report from './Report';
import Error from './Error';

const ToPrintWrapper = (props) => {
  const componentRef = useRef();
  const surveyId = props.match.params.surveyId; //'SV_6sXhIteMVcs48a9';
  const responseId = props.match.params.responseId;
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    let localError = false;
    const url = `https://us-central1-sera-web-reports.cloudfunctions.net/api/data/${responseId}`;
    let localData = await fetch(url)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        setError(true);
        localError = true;
      });

    if (localError === true) {
      let res = await refreshData();
      localData = await res.json();
    }

    setData(localData);
  };

  const refreshData = async () => {
    setError(false);
    const url =
      'https://us-central1-sera-web-reports.cloudfunctions.net/api/data';

    const data = {
      responseId: responseId,
      surveyId: surveyId,
    };

    const sendResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => setError(true));

    return sendResponse;
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {clicked ? (
        <div>
          <ReactToPrint
            trigger={() => (
              <div style={{ width: 800, margin: '10px auto', padding: 10 }}>
                <Button type='primary'> Print Report</Button>
              </div>
            )}
            content={() => componentRef.current}
          />
          <Report ref={componentRef} data={data} />
        </div>
      ) : (
        <>
          {data ? (
            <div style={{ width: '300px', margin: '150px auto' }}>
              <Button type='primary' onClick={() => setClicked(true)}>
                Click to view Report
              </Button>
            </div>
          ) : (
            <div style={{ width: '100px', margin: '150px auto' }}>
              <Spin size='large' tip='Loading...' />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ToPrintWrapper;
