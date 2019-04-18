import firebase from '../../firebaseService'

export const REGISTER = (email, password) => {
  return (dispatch) => {
    dispatch(registerUserStart());
    return (
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=> {
          dispatch(registerUserSuccess(email))
        })
        .catch((error) =>{
          dispatch(registerUserFailed(error.message))
        })
    )
  }
};

const registerUserStart = userObj => ({
  type: 'REGISTER_USER_START',
  payload: userObj
});

const registerUserSuccess = (email) => ({
  type: 'REGISTER_USER_SUCCESS',
  email
});

const registerUserFailed = errorMessage => ({
  type: 'REGISTER_USER_FAILED',
  payload: errorMessage
});
