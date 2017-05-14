import { actionTypes as tabbarActionTypes } from '../reducers/tabbar';

const windowMiddleware = store => next => (action) => {
  switch (action.type) {
    case tabbarActionTypes.TABBAR_CLOSE_TAB:
      if (store.getState().webviews.webviews.length === 1) {
        window.close();
      }
      break;
    default:
      break;
  }
  return next(action);
};

export default windowMiddleware;
