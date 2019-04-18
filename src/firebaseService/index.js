import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCduSYzqxVtGU4nTqMiDB-bQGgQMNZ6NlY",
  authDomain: "football-b08dd.firebaseapp.com",
  databaseURL: "https://football-b08dd.firebaseio.com",
  projectId: "football-b08dd",
  storageBucket: "",
  messagingSenderId: "219721671950"
};

firebase.initializeApp(config);

export default firebase;
