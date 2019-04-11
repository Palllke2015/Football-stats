const initStore = {
  loading: true,
  data: null,
  error: false,
  show: false
};

const matchList = (state = initStore, action) => {
  switch (action.type) {
    case "FETCH_MATCH_LIST_START":

      return {...state,
        loading: true};

    case "FETCH_MATCH_LIST_SUCCESS":

      return {...state,
        data: action.payload,
        loading: false};

    case "MATCH_LIST_SHOW":

      return {...state,
        show: !state.show};

    default:
      return state
  }
};

export default matchList;
