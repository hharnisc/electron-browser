import { actionTypes } from './actions';

const initialState = {
  url: 'https://electron.atom.io/',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WEBVIEW_STOP_LOADING:
      return { ...state, url: action.url };
    default:
      return state;
  }
};

export default reducer;
