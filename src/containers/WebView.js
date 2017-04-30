import { connect } from 'react-redux';
import WebView from '../components/WebView';

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
)(WebView);
