const initialState = {
  matchListShow: {
    isLoading: true,
    list: null
  },
  currentLeague: null,
  matchId: null,
  teamInfo: null,
  teamInfoHome: null,
  teamInfoHomeId: null,
  teamInfoAway: null,
  teamInfoAwayId: null,
  showLastsMatches: false,
  tournamentTable: null
};


const league = (state = initialState, action) => {

  switch (action.type) {

    case 'SHOW_LAST_MATCHES':
        return {...state,
          showLastsMatches: !state.showLastsMatches};

    case 'FETCH':

      switch (action.meta.type) {

        case 'FETCH_TEAM_INFO':
          return {...state,
            teamInfo: action.payload};

        case 'FETCH_TEAM_INFO_HOME':
          return {...state,
            teamInfoHome: action.payload,
            teamInfoHomeId: action.id};

        case 'FETCH_TEAM_INFO_AWAY':
          return {...state,
            teamInfoAway: action.payload,
            teamInfoAwayId: action.id};
        case 'SHOW_MATCH_LIST':
          return {...state,
            matchListShow: {
              list: action.payload,
              isLoading: !state.matchListShow.isLoading
          }};
        case 'FETCH_TOURNAMENT_TABLE':
          return {...state,
            tournamentTable: action.payload};

        default:
          return state;
      }


      default:
        return state;
  }
};

export default league
