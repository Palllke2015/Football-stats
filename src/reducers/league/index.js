const initialState = {
  loading: true,
  error: false,
  errorMessage: '',
  showLastsMatches: false,
  data: {
    competition: {
      id: ''
    }
  }
};


const index = (state = initialState, action) => {

  switch (action.type) {

    case 'FETCH_LEAGUE_START':
        return {...state,
         loading: true,
         error: false
        };

    case 'FETCH_MATCH_LIST_SUCCESS':
      return {...state,
        loading: false,
        error: false,
        data: action.payload
      };
    case 'FETCH_MATCH_LIST_ERROR':
      return {...state,
        loading: false,
        error: true,
        errorMessage: action.error
      };
    case 'MATCH_LIST_SHOW':
      console.log( action.type);
      return {...state,
        showLastsMatches: !state.showLastsMatches
      };
    case 'USER_SIGN_OUT':
      return {
        loading: true,
        error: false,
        errorMessage: '',
        showLastsMatches: false,
        data: {
          competition: {
            id: ''
          }
        }
      };

      default:
        return state;
  }
};

export default index
