const initState = {
  value: 'PL',
  error: false
};


const select = (state = initState, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return {
        ...state,
        value: action.value
      };
    case 'SELECT_ITEM_ERROR':
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default select;
