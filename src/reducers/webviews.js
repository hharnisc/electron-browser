import { actionTypes as navbarActionTypes } from './navbar';
import webviewReducer, { actionTypes as webviewActionTypes } from './webview';
import { actionTypes as tabbarActionTypes } from './tabbar';

const initialState = {
  selectedId: 0,
  webviews: [{
    pastUrls: [],
    url: 'https://electron.atom.io/',
    futureUrls: [],
    loading: false,
    reload: false,
  },
  {
    pastUrls: [],
    url: 'https://www.google.com/',
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
    case webviewActionTypes.WEBVIEW_PAGE_NAVIGATE:
      return {
        ...state,
        webviews: applyWebviewReducer({
          id: action.id,
          webviews: state.webviews,
          action,
        }),
      };
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
    case tabbarActionTypes.TABBAR_SELECT_TAB:
      return {
        ...state,
        selectedId: action.id,
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
  webviewStopLoading: ({ id }) => ({
    type: webviewActionTypes.WEBVIEW_STOP_LOADING,
    id,
  }),
  webviewPageNavigate: ({ url, id, redirect }) => ({
    type: webviewActionTypes.WEBVIEW_PAGE_NAVIGATE,
    url,
    id,
    redirect,
  }),
};


export default reducer;
