import firebase from '../../firebase-service'
import { API_VERIFIED } from '../api-verified/api-verified'

export const LOGIN = (email, password) => {
  return (dispatch) => {
    dispatch(loginUserStart());
    return (
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          const user = firebase.auth().currentUser;
          if (user) {
            console.log('logined');
            dispatch(loginUserSuccess(user));
            localStorage.setItem("email", user.email);
            dispatch(API_VERIFIED(email));
          } else {
            console.log('not logined');
          }
          user.getIdToken()
            .then((idToken) => {
              localStorage.setItem("token", idToken);
            })
            .catch((error) => {
              // Error occurred.
            });
        })
        .catch((error) => {
          dispatch(loginUserFailed(error.message));
          console.log(error.message);
        })
    )
  }
};

const loginUserStart = userObj => ({
  type: 'LOGIN_USER_START',
  payload: userObj
});

const loginUserSuccess = userObj => ({
  type: 'LOGIN_USER_SUCCESS',
  payload: userObj
});

const loginUserFailed = errorMessage => ({
  type: 'LOGIN_USER_FAILED',
  payload: errorMessage
});

export const LOGINED = (email) => ({
  type: "LOGINED",
  email
});


export const signOut = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(function() {
        dispatch(SIGNOUT());
      }).catch(function(error) {
        dispatch(SIGNOUTFAILED(error));
    });
  }
};

const SIGNOUT = () => ({
  type: 'USER_SIGN_OUT'
});
const SIGNOUTFAILED = (error) => ({
  type: 'USER_SIGN_OUT_FAILED',
  error
});

