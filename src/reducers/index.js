import { combineReducers } from 'redux';
import navbar from './navbar';
import webview from './webview';

export default combineReducers({
  navbar,
  webview,
});
