import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1
        };
      }

      
    handleProfile(){
        window.location.href = "/skills"
    }
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


                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleProfile()}>Next</button>
          
            </div>
        );
    }
}
