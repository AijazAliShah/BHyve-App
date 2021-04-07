import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <h3>Complete Profile</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>


                <button type="submit" className="btn btn-primary btn-block">Save</button>
          
            </div>
        );
    }
}
