import React, { Component } from "react";
import api from '../services/api'

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMsg: "",
            successMsg: "",
            loading: false
        };
    }


    async handleSignup() {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        this.setState({ loading: true, errorMsg: "", successMsg: "" });
        try {
            await api.signup(data)
            this.setState({ successMsg: "You have successfully signed up, Please Sign In.", loading: false })

        } catch (e) {
            if (e.response.data.statusCode === 400) {
                this.setState({ errorMsg: e.response.data.message[0], loading: false })
            } else if (e.response.data.statusCode === 409) {
                this.setState({ errorMsg: e.response.data.message, loading: false })
            }
        }

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="username" onChange={e => this.handleChange(e)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={e => this.handleChange(e)} />
                </div>
                <p className="err-msg">{this.state.errorMsg}</p>
                <p className="success-msg">{this.state.successMsg}</p>
                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleSignup()}>{this.state.loading ? "Loading..." : "Sign Up"}</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </div>
        );
    }
}
