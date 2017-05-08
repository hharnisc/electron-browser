import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

// const tabs = [
//   {
//     url: 'http://google.com',
//   },
//   {
//     url: 'http://apple.com',
//   },
// ];

const TabBar = ({
  tabs,
}) =>
  <div>
    <ul
      style={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
      }}
    >
      {tabs.map((tab, i) => <Tab url={tab.url} key={i} />)}
      <li><button>Add</button></li>
    </ul>
  </div>;

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default TabBar;
