import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({
  url,
  canGoBack,
  canGoForward,
  loading,
  onForwardClick,
  onBackClick,
  onReloadClick,
  onChange,
  onSubmit,
}) =>
  <div
    style={{
      display: 'flex',
    }}
  >
    <button
      disabled={!canGoBack}
      onClick={onBackClick}
    >
      Back
    </button>
    <button
      disabled={!canGoForward}
      onClick={onForwardClick}
    >
      Forward
    </button>
    <button
      disabled={loading}
      onClick={onReloadClick}
    >
      Reload
    </button>
    <input
      style={{
        flexGrow: 1,
      }}
      value={url}
      onChange={e => onChange({ url: e.target.value })}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          onSubmit({ url });
        }
      }}
    />
  </div>;

NavBar.propTypes = {
  url: PropTypes.string.isRequired,
  canGoBack: PropTypes.bool.isRequired,
  canGoForward: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onForwardClick: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onReloadClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NavBar;
