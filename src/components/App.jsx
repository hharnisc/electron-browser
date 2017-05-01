import React from 'react';
import WebView from '../containers/WebView';
import NavBar from '../containers/NavBar';

const App = () =>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    <NavBar />
    <WebView />
  </div>;

export default App;
