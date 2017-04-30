import React from 'react';
import PropTypes from 'prop-types';

const WebView = ({ src }) =>
  <webview
    style={{
      height: '100%',
    }}
    src={src}
  />;

WebView.propTypes = {
  src: PropTypes.string.isRequired,
};

export default WebView;
