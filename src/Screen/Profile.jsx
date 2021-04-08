import React, { Component } from "react";
import api from '../services/api'
import userActions from "../Store/actions/userActions";
import { connect } from "react-redux"

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        };
    }

    async componentDidMount() {
        const config = {
            headers: { Authorization: `Bearer ${this.props.user.accessToken}` }
        };

        const user = await api.getProfile(config)
        console.log("user", user);
        this.setState({ user })

    }
    render() {
        return (
            <div className="container">
                <div className="main-body">

                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Profile</a></li>
                        </ol>
                    </nav>

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.user.firstName + " " + this.state.user.lastName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.user.username}
                                        </div>
                                    </div>
                                    <hr />

                                </div>
                            </div>
                            <div className="row gutters-sm">
                                <div className="col-sm-12 mb-3">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Skills</i></h6>
                                            {this.state.user && this.state.user.skills.map(skill => (
                                                <>
                                                    <small>{skill}</small>
                                                    <div className="progress mb-3" style={{ height: "5px" }}>
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "100%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </>
                                            ))}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
