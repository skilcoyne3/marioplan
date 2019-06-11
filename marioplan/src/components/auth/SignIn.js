import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth} = this.props;
    if(auth.uid) {
      return <Redirect to='/'></Redirect>
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null} 
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: cred => {
      // console.log('MapDispatchToProps', cred);
      dispatch(signIn(cred)); 
    }
  }
}

const mapStateToProps = state => {
  const {projects} = state.firestore.ordered;
  return {
    authError: state.auth.authError,
    projects: projects ? projects : null,
    auth: state.firebase.auth
  }
}

// export default connect(mapStateToProps,mapDispatchToProps)(SignIn);

export default compose( 
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([{ collection : 'projects' }])
)(SignIn);
