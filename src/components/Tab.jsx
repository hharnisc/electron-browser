import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  url,
}) =>
  <li>
    {url}
    <button>Close</button>
  </li>;

Tab.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Tab;
