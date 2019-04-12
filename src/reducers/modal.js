const itinState = {
  loading: true,
  error: false,
  show: false,
  data: {
    homeTeam: null,
    homeTeamName: null,
    homeTeamLoading: true,
    awayTeam: null,
    awayTeamName: null,
    awayTeamLoading: true
  }
};

const modal = (state = itinState, action) => {
  switch (action.type) {
    case "FETCH_MODAL_START":
      return {...state,
        loading: true,
        show: true
      };
    case "CLOSE_MODAL":
      return {...state,
        loading: true,
        show: false,
        data: {
          homeTeam: null,
          homeTeamName: null,
          homeTeamLoading: true,
          awayTeam: null,
          awayTeamName: null,
          awayTeamLoading: true
        }
      };
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
              homeTeam: action.payload,
              homeTeamLoading: false
            }
          };
        case "FETCH_MODAL_AWAY_SUCCESS":
          return {...state,
            data: {
              ...state.data,
              awayTeam: action.payload,
              awayTeamLoading: false
            }};
        default:
          return state;
      }

    case "FETCH_MODAL_SUCCESS":
      console.log("SUCCESS");
      return {
        ...state,
        loading: false
      };
    default:
      return state
  }
};

export default modal
