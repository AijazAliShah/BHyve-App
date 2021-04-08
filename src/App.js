import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Screen/Login";
import SignUp from "./Screen/Signup";
import AddProfile from "./Screen/AddProfile";
import Skills from "./Screen/Skills";
import Profile from "./Screen/Profile";
import userActions from './Store/actions/userActions';
import { connect } from 'react-redux';
import PrivateRoute from "./services/PrivateRoute";


class App extends Component {

  handleLogout() {
    this.props.userLogin("")
    window.location.href = "/sign-in"
  }

  render() {
    console.log("user1", this.props.user);

    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand">BHyve App </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                {!this.props.user ? (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" onClick={() => this.handleLogout()}>Logout</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <PrivateRoute
                  authEd={this.props.user}
                  exact
                  path="/add-profile"
                  component={AddProfile}
                />
                <PrivateRoute
                  authEd={this.props.user}
                  exact
                  path="/skills"
                  component={Skills}
                />
                <PrivateRoute
                  authEd={this.props.user}
                  exact
                  path="/profile"
                  component={Profile}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router >
    );
  }
}



const mapStateToProps = (state) => ({
  user: state.createUser.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (dt) => dispatch(userActions.userLogin(dt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
