const itinState = {
  loading: true,
  error: false,
  show: false,
  data: {
    homeTeam: null,
    homeTeamName: null,
    awayTeam: null,
    awayTeamName: null
  }
};

const modal = (state = itinState, action) => {
  switch (action.type) {
    case "FETCH_MODAL_START":
      return {...state,
        loading: true};
    case "FETCH_MODAL_HOME_NAME":
      return {...state,
        data: {
        ...state.data,
        homeTeamName: action.payload
      }};
    case "FETCH_MODAL_AWAY_NAME":
      return {...state,
        data: {
          ...state.data,
          awayTeamName: action.payload
        }};

    case "FETCH_MODAL_INFO":
      switch (action.team) {

        case "FETCH_MODAL_HOME_SUCCESS":
          return {...state,
            data: {
              ...state.data,
              homeTeam: action.payload
            }
          };
        case "FETCH_MODAL_AWAY_SUCCESS":
          return {...state,
            data: {
              ...state.data,
              awayTeam: action.payload
            }};
        default:
          return state;
      }

    case "FETCH_MODAL_SUCCESS":
      return {
        ...state,
        loading: false
      };
    default:
      return state
  }
};

export default modal
