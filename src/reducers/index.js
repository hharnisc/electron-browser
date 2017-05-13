import { combineReducers } from 'redux';
import navbar from './navbar';
import webviews from './webviews';

export default combineReducers({
  navbar,
  webviews,
});
