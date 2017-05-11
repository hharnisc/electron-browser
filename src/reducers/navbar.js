import { actionTypes as webviewActionTypes } from './webview';

export const actionTypes = {
  NAVBAR_URL_CHANGE: 'NAVBAR_URL_CHANGE',
  NAVBAR_URL_SUBMIT: 'NAVBAR_URL_SUBMIT',
  NAVBAR_RELOAD: 'NAVBAR_RELOAD',
  NAVBAR_BACK: 'NAVBAR_BACK',
  NAVBAR_FORWARD: 'NAVBAR_FORWARD',
};

const initialState = {
  url: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case webviewActionTypes.WEBVIEW_STOP_LOADING:
      return { ...state, url: action.url };
    case actionTypes.NAVBAR_URL_CHANGE:
      return { ...state, url: action.url };
    default:
      return state;
  }
};

export const actions = {
  navbarUrlChange: ({ url }) => ({
    type: actionTypes.NAVBAR_URL_CHANGE,
    url,
  }),
  navbarUrlSubmit: ({ url }) => ({
    type: actionTypes.NAVBAR_URL_SUBMIT,
    url,
  }),
  navbarReload: () => ({
    type: actionTypes.NAVBAR_RELOAD,
  }),
  navbarBack: () => ({
    type: actionTypes.NAVBAR_BACK,
  }),
  navbarForward: () => ({
    type: actionTypes.NAVBAR_FORWARD,
  }),
};

export default reducer;
