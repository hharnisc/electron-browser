import uuid from 'uuid';
import { actionTypes as navbarActionTypes } from './navbar';
import webviewReducer, { actionTypes as webviewActionTypes } from './webview';
import { actionTypes as tabbarActionTypes } from './tabbar';

const generateNewWebview = ({ url }) => ({
  id: uuid(),
  pastUrls: [],
  url,
  futureUrls: [],
  loading: false,
  reload: false,
});

const generateInitialState = () => {
  const webviews = [
    generateNewWebview({
      url: 'https://electron.atom.io/',
    }),
    generateNewWebview({
      url: 'https://www.google.com/',
    }),
  ];
  return {
    selectedId: webviews[0].id,
    webviews,
  };
};

const applyWebviewReducer = ({ id, webviews, action }) =>
  webviews.map((webview) => {
    if (webview.id === id) {
      return webviewReducer(webview, action);
    }
    return webview;
  });

const reducer = (state = generateInitialState(), action) => {
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
    case tabbarActionTypes.TABBAR_CLOSE_TAB:
      return {
        ...state,
        webviews: state.webviews.filter(webview =>
              webview.id !== action.id),
      };
    case tabbarActionTypes.TABBAR_NEW_TAB: {
      const newView = generateNewWebview({ url: 'https://www.google.com/' });
      return {
        ...state,
        selectedId: newView.id,
        webviews: [
          ...state.webviews,
          newView,
        ],
      };
    }
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
