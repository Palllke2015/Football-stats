import firebase, { database } from '../../firebase-service'

export const REGISTER = (email, password) => {
  return (dispatch) => {
    dispatch(registerUserStart());
    return (
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=> {
          dispatch(registerUserSuccess(email));
          database.collection("users").add({
            email,
            footballApi: false,
            XAuthToken: ''
          })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
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
