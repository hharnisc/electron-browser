import React from 'react';
import PropTypes from 'prop-types';
import WebView from './WebView';

const WebViews = ({
  webviews,
  selectedId,
  onStartLoading,
  onStopLoading,
  onPageNavigate,
}) =>
  <div
    style={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {
      webviews.map(webview =>
        <div
          key={webview.id}
          style={{
            flexGrow: 1,
            display: selectedId === webview.id ? 'flex' : 'none',
            flexDirection: 'column',
          }}
        >
          <WebView
            url={webview.url}
            reload={webview.reload}
            onStartLoading={() => onStartLoading({ id: webview.id })}
            onStopLoading={() => onStopLoading({ id: webview.id })}
            onPageNavigate={({ url, redirect }) =>
              onPageNavigate({ id: webview.id, url, redirect })}
          />
        </div>,
      )
    }
  </div>;

WebViews.propTypes = {
  webviews: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      reload: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onStartLoading: PropTypes.func.isRequired,
  onStopLoading: PropTypes.func.isRequired,
  onPageNavigate: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
};

export default WebViews;
