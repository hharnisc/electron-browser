export const actionTypes = {
  WEBVIEW_START_LOADING: 'WEBVIEW_START_LOADING',
  WEBVIEW_STOP_LOADING: 'WEBVIEW_STOP_LOADING',
};

export const actions = {
  webViewStartLoading: () => ({
    type: actionTypes.WEBVIEW_START_LOADING,
  }),
  webviewStopLoading: ({ url }) => ({
    type: actionTypes.WEBVIEW_STOP_LOADING,
    url,
  }),
};
