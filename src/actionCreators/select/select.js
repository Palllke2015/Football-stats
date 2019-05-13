

export const SELECT = (value) => {
  return (dispatch) => {
    dispatch(SelectValue(value))
  }
};

const SelectValue = value => ({
  type: 'SELECT_ITEM',
  value
});
