import React from 'react';
import { Result, Button } from 'antd';
export default function Error(props) {
  return (
    <div>
      <Result
        status='warning'
        title={props.message}
        subTitle={props.subtitle}
        extra={
          <Button type='primary' key='console' onClick={props.refreshData}>
            Click to try again
          </Button>
        }
      />
    </div>
  );
}
