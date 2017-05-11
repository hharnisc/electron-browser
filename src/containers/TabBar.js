import { connect } from 'react-redux';
import TabBar from '../components/TabBar';

const mapStateToProps = state => state.webviews;

export default connect(
  mapStateToProps,
)(TabBar);
