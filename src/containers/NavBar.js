import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
)(NavBar);
