import React from "react";
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


const Navbar = props => {
  const { auth, profile } = props;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        { auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks /> }
      </div>
    </nav>
  )
}
const mapStateToProps = state => {
  const { auth, profile } = state.firebase;
  // console.log(state);
  return {
    auth: auth,
    profile: profile
  };
}

export default connect(mapStateToProps)(Navbar);