import { actionTypes as navbarActionTypes } from './navbar';

export const actionTypes = {
  WEBVIEW_START_LOADING: 'WEBVIEW_START_LOADING',
  WEBVIEW_STOP_LOADING: 'WEBVIEW_STOP_LOADING',
  WEBVIEW_BACK: 'WEBVIEW_BACK',
  WEBVIEW_FORWARD: 'WEBVIEW_FORWARD',
};

const initialState = {
  pastUrls: [],
  url: 'https://electron.atom.io/',
  futureUrls: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WEBVIEW_STOP_LOADING:
      if (action.url === state.url) {
        return state;
      }
      return {
        ...state,
        pastUrls: [...state.pastUrls, state.url],
        url: action.url,
        futureUrls: [],
      };
    case navbarActionTypes.NAVBAR_URL_SUBMIT:
      if (action.url === state.url) {
        return state;
      }
      return {
        ...state,
        pastUrls: [...state.pastUrls, state.url],
        url: action.url,
        futureUrls: [],
      };
    case actionTypes.WEBVIEW_BACK: {
      const previous = state.pastUrls[state.pastUrls.length - 1];
      const newPastUrls = state.pastUrls.slice(0, state.pastUrls.length - 1);
      return {
        pastUrls: newPastUrls,
        url: previous,
        futureUrls: [state.url, ...state.futureUrls],
      };
    }
    case actionTypes.WEBVIEW_FORWARD: {
      const nextUrl = state.futureUrls[0];
      const newFutureUrl = state.futureUrls.slice(1);
      return {
        pastUrls: [...state.pastUrls, state.url],
        url: nextUrl,
        futureUrls: newFutureUrl,
      };
    }
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
  webviewBack: () => ({
    type: actionTypes.WEBVIEW_BACK,
  }),
  webviewForward: () => ({
    type: actionTypes.WEBVIEW_FORWARD,
  }),
};


export default reducer;
