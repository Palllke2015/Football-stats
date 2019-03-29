const initialState = {
    matchListShow: false,
    matchId: null,
    teamInfo: null
};


const league = (state = initialState, action) => {

  switch (action.type) {
    case 'SHOW_MATCH_LIST':
        return {...state,
                matchListShow: !state.matchListShow};

    case 'SHOW_MATCH_INFO':
        console.log(action.payload);
        return {...state,
              matchId: action.payload.id};
    case 'DISPATCH_ACTION':
        return {...state,
          teamInfo: action.payload};

      default:
        return state;
  }
};

export default league
