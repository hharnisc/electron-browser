import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabBar = ({
  webviews,
  onTabClick,
  onCloseClick,
  onNewTabClick,
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
      {webviews.map(tab =>
        <Tab
          url={tab.url}
          key={tab.id}
          onTabClick={() => onTabClick({
            id: tab.id,
            url: tab.url,
          })}
          onCloseClick={() => onCloseClick({
            id: tab.id,
            webviews,
          })}
        />)
      }
      <li>
        <button
          onClick={onNewTabClick}
        >
          New
        </button>
      </li>
    </ul>
  </div>;

TabBar.propTypes = {
  webviews: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  onTabClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  onNewTabClick: PropTypes.func.isRequired,
};

export default TabBar;
