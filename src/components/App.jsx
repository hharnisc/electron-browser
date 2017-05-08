import React from 'react';
import WebView from '../containers/WebView';
import NavBar from '../containers/NavBar';
import TabBar from '../containers/TabBar';

const App = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    <NavBar />
    <TabBar />
    <WebView />
  </div>;

export default App;
