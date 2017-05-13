import { connect } from 'react-redux';
import { actions } from '../reducers/webviews';
import WebViews from '../components/WebViews';

const mapStateToProps = state => state.webviews;
const mapDispatchToProps = dispatch => ({
  onStartLoading: ({ id }) => dispatch(actions.webViewStartLoading({ id })),
  onStopLoading: ({ id }) =>
    dispatch(actions.webviewStopLoading({ id })),
  onPageNavigate: ({ url, id, redirect }) =>
    dispatch(actions.webviewPageNavigate({ url, id, redirect })),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WebViews);
