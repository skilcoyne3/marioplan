import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

// NOTE: V2
const rootReducer = combineReducers({ 
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

// V3
// const rootReducer = combineReducers({ 
//   auth: authReducer,
//   project: projectReducer,
//   firebase: firebaseReducer,
//   firestore: firestoreReducer
// });

export default rootReducer;
