const initStore = {
  logined: false,
  isLogin: false,
  data: {
    email: false
  },
  error: false,
  errorMessage: '',
  loading: false,
  signOutError: '',
  XAuthToken:''
};

const auth = (state = initStore, action) => {
  switch (action.type) {
    case "LOGINED":
      return {...state,
        logined: true,
        isLogin: true,
        data:{
          email: action.email
        }
      };
    case "LOGIN_USER_START":
      console.log( action.type);
      return {...state,
        loading: true,
        isLogin: false,
        error: false,
        errorMessage: ''
      };
    case "LOGIN_USER_SUCCESS":
      console.log( action.type);
      return {...state,
        data: action.payload,
        isLogin: true,
        loading: false
      };
    case "LOGIN_USER_FAILED":
      console.log('Неправельный заход', action.type);
      console.log( action.payload);
      return {...state,
        error: true,
        loading: false,
        errorMessage: action.payload
      };
    case "USER_API_VERIFIED":
      console.log( action.type);
      return {...state,
        APIVerified: true,
        XAuthToken: action.XAuthToken
      };
    case "USER_SIGN_OUT":
      return {...state,
        data: {
          email: false
        },
        isLogin: false
      };
    case "USER_SIGN_OUT_FAILED":
      return {...state,
        signOutError: action.error};

    default:
      return state
  }
};

export default auth;
