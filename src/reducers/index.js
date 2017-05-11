import { combineReducers } from 'redux';
import navbar from './navbar';
import webviews from './webviews';
import tabbar from './tabbar';

export default combineReducers({
  navbar,
  webviews,
  tabbar,
});
