export const actionTypes = {
  TABBAR_SELECT_TAB: 'TABBAR_SELECT_TAB',
  TABBAR_CLOSE_TAB: 'TABBAR_CLOSE_TAB',
  TABBAR_NEW_TAB: 'TABBAR_NEW_TAB',
};

export const actions = {
  selectTab: ({ id, url }) => ({
    type: actionTypes.TABBAR_SELECT_TAB,
    id,
    url,
  }),
  closeTab: ({ id }) => ({
    type: actionTypes.TABBAR_CLOSE_TAB,
    id,
  }),
  newTab: () => ({
    type: actionTypes.TABBAR_NEW_TAB,
  }),
};
