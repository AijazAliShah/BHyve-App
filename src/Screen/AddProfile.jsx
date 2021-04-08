import React, { Component } from "react";
import api from '../services/api'
import userActions from "../Store/actions/userActions";
import { connect } from "react-redux";

class AddProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            errorMsg: "",
            successMsg: "",
            loading: false
        };
    }

    componentDidMount() {
        console.log("user", this.props.user);
    }

    async handleProfile() {
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        const config = {
            headers: { Authorization: `Bearer ${this.props.user.accessToken}` }
        };

        if (this.state.firstName) {
            if (this.state.lastName) {
                try {
                    const profile = await api.addProfile(data, config)
                    console.log("profile",profile);
                    window.location.href= "/skills"   
                } catch (e) {
                    console.log(e.response);
                    if (e.response.data.statusCode === 400) {
                        this.setState({ errorMsg: e.response.data.message[0], loading: false })
                    } else if (e.response.data.statusCode === 409) {
                        this.setState({ errorMsg: e.response.data.message, loading: false })
                    } else if (e.response.data.statusCode === 401) {
                        this.setState({ errorMsg: e.response.data.message, loading: false })
                    }
                }
            } else {
                this.setState({ errorMsg: "Please Enter Last Name", loading: false })
            }
        } else {
            this.setState({ errorMsg: "Please Enter First Name", loading: false })
        }



    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (
            <div>
                <h3>Complete Profile</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstName" onChange={e => this.handleChange(e)} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastName" onChange={e => this.handleChange(e)} />
                </div>


                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleProfile()}>Next</button>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.createUser.user,
});

const mapDispatchToProps = (dispatch) => ({
    addSignUpUser: (dt) => dispatch(userActions.addSignUpUser(dt)),
    removeSignUpUser: (dt) => dispatch(userActions.removeSignUpUser(dt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProfile);
