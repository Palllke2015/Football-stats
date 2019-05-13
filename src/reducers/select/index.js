const initState = {
  value: 'PL',
  label: 'Premier League',
  error: false
};


const select = (state = initState, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return {
        ...state,
        value: action.value,
        label: action.label
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
