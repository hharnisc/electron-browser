import { connect } from 'react-redux';
import { actions } from '../reducers/navbar';
import NavBar from '../components/NavBar';

const mapStateToProps = state => ({
  url: state.navbar.url,
  canGoBack: state.webviews.webviews[state.webviews.selectedId].pastUrls.length > 0,
  canGoForward: state.webviews.webviews[state.webviews.selectedId].futureUrls.length > 0,
  loading: state.webviews.webviews[state.webviews.selectedId].loading,
});
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
