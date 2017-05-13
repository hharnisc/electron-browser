import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabBar = ({
  webviews,
  onTabClick,
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
      {webviews.map((tab, i) =>
        <Tab
          url={tab.url}
          key={i}
          onTabClick={() => onTabClick({
            id: i,
            url: tab.url,
          })}
        />)
      }
      <li><button>Add</button></li>
    </ul>
  </div>;

TabBar.propTypes = {
  webviews: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabBar;
