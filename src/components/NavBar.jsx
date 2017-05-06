import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({
  url,
  onChange,
  onSubmit,
}) =>
  <input
    value={url}
    onChange={e => onChange({ url: e.target.value })}
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        onSubmit({ url });
      }
    }}
  />;

NavBar.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NavBar;
