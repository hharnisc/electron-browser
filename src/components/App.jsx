import React from 'react';
import WebViews from '../containers/WebViews';
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
    <WebViews />
  </div>;

export default App;
