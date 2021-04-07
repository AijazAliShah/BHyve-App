import React, { Component } from "react";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 1
        };
      }

      
    handleSignup(){
        window.location.href = "/add-profile"
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleSignup()}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </div>
        );
    }
}
