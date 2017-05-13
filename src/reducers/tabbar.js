export const actionTypes = {
  TABBAR_SELECT_TAB: 'TABBAR_SELECT_TAB',
};

export const actions = {
  selectTab: ({ id, url }) => ({
    type: actionTypes.TABBAR_SELECT_TAB,
    id,
    url,
  }),
};
