const initialState = {
  tabs: [
    {
      url: 'http://google.com',
    },
    {
      url: 'http://apple.com',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
