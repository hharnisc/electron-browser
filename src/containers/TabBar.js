import { connect } from 'react-redux';
import TabBar from '../components/TabBar';

const mapStateToProps = state => state.tabbar;

export default connect(
  mapStateToProps,
)(TabBar);
