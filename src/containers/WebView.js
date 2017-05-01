import { connect } from 'react-redux';
import { actions } from '../actions';
import WebView from '../components/WebView';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onStartLoading: () => dispatch(actions.webViewStartLoading()),
  onStopLoading: ({ url }) => dispatch(actions.webviewStopLoading({ url })),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WebView);
