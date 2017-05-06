import { connect } from 'react-redux';
import { actions } from '../reducers/navbar';
import NavBar from '../components/NavBar';

const mapStateToProps = state => state.navbar;
const mapDispatchToProps = dispatch => ({
  onChange: ({ url }) => dispatch(actions.navbarUrlChange({ url })),
  onSubmit: ({ url }) => dispatch(actions.navbarUrlSubmit({ url })),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
