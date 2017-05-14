import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  url,
  onTabClick,
  onCloseClick,
}) =>
  <li>
    <button
      onClick={onTabClick}
    >
      {url}
    </button>
    <button
      onClick={onCloseClick}
    >
      Close
    </button>
  </li>;

Tab.propTypes = {
  url: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default Tab;
