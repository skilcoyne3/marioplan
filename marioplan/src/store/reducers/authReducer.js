const initialState = {
  authError: null
};

const authReducer = (state = initialState, { type, err, payload }) => {
  switch (type) {

  case 'LOGIN_SUCESS':
    console.log('login success');
    return {
      ...state,
      authError: ''
    };

  case 'LOGIN_ERROR':
    console.log('login error',err);
    return {
      ...state,
      authError: 'login failed'
    };

  case 'SIGNOUT_SUCCESS':
    console.log('signout success');
    return state;

  case 'SIGUP_SUCCESS':
    console.log('signup success');
    return {
      ...state,
      authError: null
    };

  case 'SIGNUP_ERROR':
    console.log('signup error',err);
    return {
      ...state,
      authError: err.message
    };

  default:
    return state;

  }
};

export default authReducer;
