import React, { Component } from "react";
import Pagination from 'react-bootstrap-4-pagination';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 1
        };
      }

      handleProfile(){
        window.location.href = "/profile"
    }


    render() {
        
        let paginationConfig = {
            totalPages: 10,
            currentPage: this.state.active,
            showMax: 10,
            size: "md",
            threeDots: true,
            prevNext: true,
            
            borderColor: 'black',
            activeBorderColor: 'black',
            activeBgColor: 'grey',
            activeColor: 'white',

            onClick: function (page) {
                console.log(page);
            }
        };

        return (
            <div>
                <h3>Add Skills</h3>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Select</th>
                            <th scope="col">Skill</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>css</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>html</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>html</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>html</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>html</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>html</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>html</td>
                        </tr>
                    </tbody>
                </table>

                <div className="App">
                    <Pagination {...paginationConfig} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.handleSkills()}>Next</button>

            </div>
        );
    }
}
