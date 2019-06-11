export const createProject = project => {
  console.log('projectActions project', project);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firesore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid; 

    firesore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorID: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: "CREATE_PROJECT", payload: project });
    }).catch((err) => {
        dispatch({type: 'CREATE_PROJECT_ERROR', err});
    })
  }
}