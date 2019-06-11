const initialState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'help me find yoshi', content: 'blah blah blah'},
    {id: '3', title: 'help me find toad', content: 'blah blah blah'}
  ]
};

const projectReducer = (state = initialState, {type,payload,err}) => {
  switch (type) {

  case 'CREATE_PROJECT':
    // console.log('created project',payload);
    console.log(state);
    return state;

  case 'CREATE_PROJECT_ERROR':
    // console.log('created project error',err);
    return state;

  default:
    return state
  }
};

export default projectReducer;
