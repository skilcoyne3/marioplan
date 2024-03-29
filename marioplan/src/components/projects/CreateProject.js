import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';


class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    console.log("create the project");
    this.props.createProject(this.state);
    // redirect to home page
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if(!auth.uid) {
      return <Redirect to='/signin'></Redirect>
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea 
              id="content" 
              className="materialize-textarea"
              onChange={this.handleChange}
            >
            </textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => {
      console.log('MapDispatchToProps', project);
      dispatch(createProject(project)) 
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
