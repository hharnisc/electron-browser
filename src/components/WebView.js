import React from 'react';
import PropTypes from 'prop-types';

const webViewInit = ({
  webview,
  onStartLoading,
  onStopLoading,
}) => {
  webview.addEventListener('did-start-loading',
    () => onStartLoading({ url: webview.getURL() }));
  webview.addEventListener('did-stop-loading',
    () => onStopLoading({ url: webview.getURL() }));
};

const WebView = ({
  url,
  onStartLoading,
  onStopLoading,
}) =>
  <webview
    style={{
      height: '100%',
    }}
    src={url}
    ref={webview => webViewInit({
      webview,
      onStartLoading,
      onStopLoading,
    })}
  />;

WebView.propTypes = {
  url: PropTypes.string.isRequired,
  onStartLoading: PropTypes.func.isRequired,
  onStopLoading: PropTypes.func.isRequired,
};

export default WebView;
