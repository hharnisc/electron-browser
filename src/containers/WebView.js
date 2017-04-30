import { connect } from 'react-redux';
import WebView from '../components/WebView';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onStartLoading: ({ url }) => console.log('url', url),
  onStopLoading: ({ url }) => console.log('url', url),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WebView);
