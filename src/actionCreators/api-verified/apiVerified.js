import {database} from "../../firebaseService";

export const APIVERIFIED = (email) => {
  return (dispatch) => {
    dispatch(apiVerifiedStart());
    database.collection("users").where("email", "==", email)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          if (doc.data().footballApi) {
            dispatch(apiVerifiedSuccess(doc.data().XAuthToken))
          } else {
            console.log('Я так понят что нету поля');
            dispatch(apiVerifiedStartError())
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(apiVerifiedStartFailed(error.message));
      })
  }
};

const apiVerifiedSuccess = (XAuthToken) => ({
  type: 'USER_API_VERIFIED_SUCCESS',
  XAuthToken
});

const apiVerifiedStart = () => ({type:'USER_API_VERIFIED_START'});

const apiVerifiedStartFailed = () => ({type:'USER_API_VERIFIED_FAILED'});

const apiVerifiedStartError = () => ({type:'USER_API_VERIFIED_ERROR'});



