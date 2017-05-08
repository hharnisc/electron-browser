import { combineReducers } from 'redux';
import navbar from './navbar';
import webview from './webview';
import tabbar from './tabbar';

export default combineReducers({
  navbar,
  webview,
  tabbar,
});
