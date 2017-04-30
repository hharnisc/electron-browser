import { connect } from 'react-redux';
import WebView from '../components/WebView';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onStartLoading: () => console.log('started loading page'),
  onStopLoading: () => console.log('stopped loading page'),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WebView);
