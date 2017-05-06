import { actionTypes as navbarActionTypes } from './navbar';

export const actionTypes = {
  WEBVIEW_START_LOADING: 'WEBVIEW_START_LOADING',
  WEBVIEW_STOP_LOADING: 'WEBVIEW_STOP_LOADING',
};

const initialState = {
  url: 'https://electron.atom.io/',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WEBVIEW_STOP_LOADING:
      return { ...state, url: action.url };
    case navbarActionTypes.NAVBAR_URL_SUBMIT:
      return { ...state, url: action.url };
    default:
      return state;
  }
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


export default reducer;
