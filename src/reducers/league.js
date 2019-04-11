const initialState = {
  loading: true,
  error: false,
  currentLeague: null,
  matchId: null,
  teamInfo: null,
  teamInfoHome: null,
  teamInfoHomeName: null,
  teamInfoAway: null,
  teamInfoAwayName: null,
  showLastsMatches: false
};


const league = (state = initialState, action) => {

  switch (action.type) {

    case 'SHOW_LAST_MATCHES':
        return {...state,
          showLastsMatches: !state.showLastsMatches};

    case "FETCH_BEGIN":

      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case "FETCH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case 'FETCH':
      switch (action.meta.type) {

        case 'FETCH_TEAM_INFO':
          return {...state,
            teamInfo: action.payload};

        case 'FETCH_TEAM_INFO_HOME':
          return {...state,
            teamInfoHome: action.payload,
            teamInfoHomeName: action.name};

        case 'FETCH_TEAM_INFO_AWAY':
          return {...state,
            teamInfoAway: action.payload,
            teamInfoAwayName: action.name};

        default:
          return state;
      }

      default:
        return state;
  }
};

export default league
