const itinState = {
  loading: false,
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

const index = (state = itinState, action) => {
  switch (action.type) {
    case 'FETCH_MODAL_START':
      return {...state,
        loading: true,
        show: true
      };

    case 'CLOSE_MODAL':
      return {...state,
        loading: false,
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

    case 'FETCH_MODAL_SUCCESS':
      switch (action.team) {
        case 'HOME':

          return {...state,
            data: {
              ...state.data,
              homeTeam: action.payload,
              homeTeamLoading: false,
              homeTeamName: action.teamName
            }
          };
        case 'AWAY':
          return {...state,
            data: {
              ...state.data,
              awayTeam: action.payload,
              awayTeamLoading: false,
              awayTeamName: action.teamName,
            }};
        default:
          return state;
      }

    default:
      return state;
  }
};

export default index
