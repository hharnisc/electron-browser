import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({
  url,
}) =>
  <div>{url}</div>;

NavBar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default NavBar;
