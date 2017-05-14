import { connect } from 'react-redux';
import { actions } from '../reducers/tabbar';
import TabBar from '../components/TabBar';

const mapStateToProps = state => state.webviews;

const mapDispatchToProps = dispatch => ({
  onTabClick: ({
    id,
    url,
  }) => dispatch(actions.selectTab({
    id,
    url,
  })),
  onCloseClick: ({
    id,
  }) => dispatch(actions.closeTab({
    id,
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabBar);
