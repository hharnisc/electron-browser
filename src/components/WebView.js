import React from 'react';
import PropTypes from 'prop-types';

const webViewInit = ({
  webview,
  onStartLoading,
  onStopLoading,
}) => {
  webview.addEventListener('did-start-loading', onStartLoading);
  webview.addEventListener('did-stop-loading', onStopLoading);
};

const WebView = ({
  src,
  onStartLoading,
  onStopLoading,
}) =>
  <webview
    style={{
      height: '100%',
    }}
    src={src}
    ref={webview => webViewInit({
      webview,
      onStartLoading,
      onStopLoading,
    })}
  />;

WebView.propTypes = {
  src: PropTypes.string.isRequired,
  onStartLoading: PropTypes.func.isRequired,
  onStopLoading: PropTypes.func.isRequired,
};

export default WebView;
