import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  url,
  onTabClick,
}) =>
  <li>
    <button
      onClick={onTabClick}
    >
      {url}
    </button>
    <button>Close</button>
  </li>;

Tab.propTypes = {
  url: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tab;
