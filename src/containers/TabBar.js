import { connect } from 'react-redux';
import { actions } from '../reducers/tabbar';
import TabBar from '../components/TabBar';

const calcNextTabToSelect = ({ webviews, closeTabId }) => {
  const closeTabIndex = webviews.findIndex(webview =>
    webview.id === closeTabId);
  // if last tab, select previous tab
  if (closeTabIndex === webviews.length - 1) {
    return webviews[closeTabIndex - 1];
  }
  // otherwise select next tab
  return webviews[closeTabIndex + 1];
};

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
    webviews,
  }) => {
    const nextTab = calcNextTabToSelect({
      webviews,
      closeTabId: id,
    });
    dispatch(actions.selectTab({
      id: nextTab.id,
      url: nextTab.url,
    }));
    dispatch(actions.closeTab({
      id,
    }));
  },
  onNewTabClick: () => dispatch(actions.newTab()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabBar);
