import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, reduxFirebase, ReactReduxFirebaseProvider, reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';


// V2
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsBlacklist: ['@@reduxFirestore', '@@reduxFirebase', '@@reactReduxFirebase']
    }) : compose;

const store = createStore(rootReducer,   
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { 
      useFirestoreForProfile: true, 
      userProfile: 'users',
      attachAuthIsReady: true 
    })
  )
);

// V3
// // firebase.initializeApp(fbConfig);
// const rrfConfig = { userProfile: 'users' } // react-redux-firebase config

// const store = createStore(rootReducer, 
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig, { 
//       useFirestoreForProfile: true,
//       userProfile: 'users', 
//       enableLogging: false,
//       attachAuthIsReady: true  
//     })
//   )
// );

// const store = createReduxStore();


// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

// V2
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
  );
});


// v3
// ReactDOM.render(
//   <Provider store={store}>
//      <ReactReduxFirebaseProvider {...rrfProps}>
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>, 
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
