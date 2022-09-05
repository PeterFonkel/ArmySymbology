import { firebase } from "./firebase";

export const environment = {
  production: false,

  title: `Army Icons`,
  /*urlAPI: `http://localhost:8080/api`,
  urlBack: `http://localhost:8080`,*/
  urlAPI: `https://army-simbology.herokuapp.com/api`,
  urlBack: `https://army-simbology.herokuapp.com`,

  
  // firebase
  apiKey: firebase.apiKey,
  authDomain: firebase.authDomain,
  projectId: firebase.projectId,
  storageBucket: firebase.storageBucket,
  messagingSenderId: firebase.messagingSenderId,
  appId: firebase.appId,
  databaseURL: firebase.databaseURL,

};