import { connect } from 'react-redux';
import { actions } from '../reducers/navbar';
import NavBar from '../components/NavBar';

const mapStateToProps = (state) => {
  const selectedWebview = state.webviews.webviews.find(
    webview => state.webviews.selectedId === webview.id,
  );
  return {
    url: state.navbar.url,
    canGoBack: selectedWebview.pastUrls.length > 0,
    canGoForward: selectedWebview.futureUrls.length > 0,
    loading: selectedWebview.loading,
  };
};
const mapDispatchToProps = dispatch => ({
  onBackClick: () => dispatch(actions.navbarBack()),
  onForwardClick: () => dispatch(actions.navbarForward()),
  onReloadClick: () => dispatch(actions.navbarReload()),
  onChange: ({ url }) => dispatch(actions.navbarUrlChange({ url })),
  onSubmit: ({ url }) => dispatch(actions.navbarUrlSubmit({ url })),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
