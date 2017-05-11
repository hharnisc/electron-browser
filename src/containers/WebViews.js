import { connect } from 'react-redux';
import { actions } from '../reducers/webviews';
import WebViews from '../components/WebViews';

const mapStateToProps = state => state.webviews;
const mapDispatchToProps = dispatch => ({
  onStartLoading: ({ id }) => dispatch(actions.webViewStartLoading({ id })),
  onStopLoading: ({ url, id }) =>
    dispatch(actions.webviewStopLoading({ url, id })),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WebViews);
