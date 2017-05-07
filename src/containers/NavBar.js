import { connect } from 'react-redux';
import { actions } from '../reducers/navbar';
import { actions as webviewActions } from '../reducers/webview';
import NavBar from '../components/NavBar';

const mapStateToProps = state => ({
  url: state.navbar.url,
  canGoBack: state.webview.pastUrls.length > 0,
  canGoForward: state.webview.futureUrls.length > 0,
  loading: state.webview.loading,
});
const mapDispatchToProps = dispatch => ({
  onBackClick: () => dispatch(webviewActions.webviewBack()),
  onForwardClick: () => dispatch(webviewActions.webviewForward()),
  onReloadClick: () => dispatch(actions.navbarReload()),
  onChange: ({ url }) => dispatch(actions.navbarUrlChange({ url })),
  onSubmit: ({ url }) => dispatch(actions.navbarUrlSubmit({ url })),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
