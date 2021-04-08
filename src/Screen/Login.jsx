import React, { Component } from "react";
import api from '../services/api'
import userActions from '../Store/actions/userActions';
import { connect } from 'react-redux';

class Login extends Component {
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

    async handleSignin() {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        this.setState({ loading: true, errorMsg: "", successMsg: "" });
        try {
            const signin = await api.signin(data)
            console.log("signin",signin);
            this.props.userLogin(signin)

            if(signin.user.profileCompleted){
                window.location.href = "/profile"
            }else{
                window.location.href = "/add-profile"
            }

        } catch (e) {
            console.log(e.response);
            if (e.response.data.statusCode === 400) {
                this.setState({ errorMsg: e.response.data.message[0], loading: false })
            } else if (e.response.data.statusCode === 409) {
                this.setState({ errorMsg: e.response.data.message, loading: false })
            }else if(e.response.data.statusCode === 401){
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
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="username" onChange={e => this.handleChange(e)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={e => this.handleChange(e)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <p className="err-msg">{this.state.errorMsg}</p>
                <p className="success-msg">{this.state.successMsg}</p>
                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleSignin() }>{this.state.loading ? "Loading...": "Sign In"}</button>
                <p className="forgot-password text-right">
                    <a href="/sign-in"> Forgot password?</a>
                </p>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    signUpUser: state.createUser.signUpUser,
});

const mapDispatchToProps = (dispatch) => ({
    userLogin: (dt) => dispatch(userActions.userLogin(dt)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);