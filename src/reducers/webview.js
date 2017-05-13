import { actionTypes as navbarActionTypes } from './navbar';

export const actionTypes = {
  WEBVIEW_START_LOADING: 'WEBVIEW_START_LOADING',
  WEBVIEW_STOP_LOADING: 'WEBVIEW_STOP_LOADING',
  WEBVIEW_BACK: 'WEBVIEW_BACK',
  WEBVIEW_FORWARD: 'WEBVIEW_FORWARD',
  WEBVIEW_PAGE_NAVIGATE: 'WEBVIEW_PAGE_NAVIGATE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.WEBVIEW_PAGE_NAVIGATE:
      if (action.url === state.url) {
        return state;
      } else if (action.redirect) {
        return {
          ...state,
          url: action.url,
        };
      }
      return {
        ...state,
        pastUrls: [...state.pastUrls, state.url],
        url: action.url,
        futureUrls: [],
      };
    case actionTypes.WEBVIEW_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.WEBVIEW_STOP_LOADING:
      return {
        ...state,
        loading: false,
        reload: false,
      };
    case navbarActionTypes.NAVBAR_RELOAD:
      return {
        ...state,
        reload: true,
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
    case navbarActionTypes.NAVBAR_BACK: {
      const previous = state.pastUrls[state.pastUrls.length - 1];
      const newPastUrls = state.pastUrls.slice(0, state.pastUrls.length - 1);
      return {
        ...state,
        pastUrls: newPastUrls,
        url: previous,
        futureUrls: [state.url, ...state.futureUrls],
      };
    }
    case navbarActionTypes.NAVBAR_FORWARD: {
      const nextUrl = state.futureUrls[0];
      const newFutureUrl = state.futureUrls.slice(1);
      return {
        ...state,
        pastUrls: [...state.pastUrls, state.url],
        url: nextUrl,
        futureUrls: newFutureUrl,
      };
    }
    default:
      return state;
  }
};

export default reducer;
