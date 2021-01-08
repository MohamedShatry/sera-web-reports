import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import UAReport from './components/UAReport';
import ToPrintWrapper from './components/ToPrintWrapper';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import UAInput from './components/UAInput';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'coli=umn',
      }}
    >
      <Header>header</Header>
      <Content style={{ flex: '1', backgroundColor: 'white' }}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/ua-report/:surveyId/:responseId/:studentId'
              component={UAReport}
            />
            <Route
              exact
              path='/report/:surveyId/:responseId'
              component={ToPrintWrapper}
            />
            <Route exact path='/ua-report' component={UAInput} />
            <Route
              exact
              path='/report/:responseId'
              render={(props) => {
                const responseId = props.match.params.responseId;
                return (
                  <Redirect to={`/report/SV_6sXhIteMVcs48a9/${responseId}`} />
                );
              }}
            />
          </Switch>
        </BrowserRouter>
      </Content>
      <Footer
        style={{
          borderTop: '1px solid #e8e8e8',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {' '}
        Yale Center for Emotional Intelligence © 2020{' '}
      </Footer>
    </Layout>
  );
}

export default App;
