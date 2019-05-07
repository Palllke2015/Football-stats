const initStore = {
  error: false,
  errorMessage: '',
  successMessage: '',
  loading: false
};

const registration = (state = initStore, action) => {
  switch (action.type) {

    case 'REGISTER_USER_START':
      console.log( action.type);
      return {...state,
        loading: true,
        error: false,
        errorMessage: ''
      };
    case 'REGISTER_USER_SUCCESS':
      console.log( action.type);
      return {...state,
        loading: false,
        error: false,
        errorMessage: '',
        successMessage: `You can now log in using your email: ${action.email}`
      };
    case 'REGISTER_USER_FAILED':
      console.log( action.type);
      return {...state,
        error: true,
        loading: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default registration;
