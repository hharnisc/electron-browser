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
      webviews.map((webview, id) =>
        <div
          key={id}
          style={{
            flexGrow: 1,
            display: selectedId === id ? 'flex' : 'none',
            flexDirection: 'column',
          }}
        >
          <WebView
            url={webview.url}
            reload={webview.reload}
            onStartLoading={() => onStartLoading({ id })}
            onStopLoading={() => onStopLoading({ id })}
            onPageNavigate={({ url, redirect }) =>
              onPageNavigate({ id, url, redirect })}
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
  selectedId: PropTypes.number.isRequired,
};

export default WebViews;
