

export const SELECT = (value,label) => {
  return (dispatch) => {
    dispatch(SelectValue(value, label))
  }
};

const SelectValue = (value, label) => ({
  type: 'SELECT_ITEM',
  value,
  label
});
