import { actionTypes as navbarActionTypes } from './navbar';
import webviewReducer, { actionTypes as webviewActionTypes } from './webview';

const initialState = {
  selectedId: 0,
  webviews: [{
    pastUrls: [],
    url: 'https://electron.atom.io/',
    futureUrls: [],
    loading: false,
    reload: false,
  }],
};

const arrayCopy = array => array.slice();
const applyWebviewReducer = ({ id, webviews, action }) => {
  const newWebviews = arrayCopy(webviews);
  newWebviews[id] = webviewReducer(newWebviews[id], action);
  return newWebviews;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case webviewActionTypes.WEBVIEW_START_LOADING:
      return {
        ...state,
        webviews: applyWebviewReducer({
          id: action.id,
          webviews: state.webviews,
          action,
        }),
      };
    case webviewActionTypes.WEBVIEW_STOP_LOADING:
      return {
        ...state,
        webviews: applyWebviewReducer({
          id: action.id,
          webviews: state.webviews,
          action,
        }),
      };
    case navbarActionTypes.NAVBAR_RELOAD:
      return {
        ...state,
        webviews: applyWebviewReducer({
          id: state.selectedId,
          webviews: state.webviews,
          action,
        }),
      };
    case navbarActionTypes.NAVBAR_URL_SUBMIT:
      return {
        ...state,
        webviews: applyWebviewReducer({
          id: state.selectedId,
          webviews: state.webviews,
          action,
        }),
      };
    case navbarActionTypes.NAVBAR_BACK:
      return {
        ...state,
        webviews: applyWebviewReducer({
          id: state.selectedId,
          webviews: state.webviews,
          action,
        }),
      };
    case navbarActionTypes.NAVBAR_FORWARD:
      return {
        ...state,
        webviews: applyWebviewReducer({
          id: state.selectedId,
          webviews: state.webviews,
          action,
        }),
      };
    default:
      return state;
  }
};

export const actions = {
  webViewStartLoading: ({ id }) => ({
    type: webviewActionTypes.WEBVIEW_START_LOADING,
    id,
  }),
  webviewStopLoading: ({ url, id }) => ({
    type: webviewActionTypes.WEBVIEW_STOP_LOADING,
    url,
    id,
  }),
};


export default reducer;
