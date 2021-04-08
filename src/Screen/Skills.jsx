import React, { Component } from "react";
import Pagination from 'react-bootstrap-4-pagination';
import userActions from "../Store/actions/userActions";
import { connect } from "react-redux";
import api from '../services/api'

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            errorMsg: "",
            successMsg: "",
            loading: false,
            page: 1,
            selectedSkills: [],
            userSkills: []
        };
    }


    async componentDidMount() {
        console.log("user",this.props.user);
        const skills = await api.getAllSkills()
        let temp = []
        for(let i=0; i<10; i++){
            console.log(skills[i]);
            temp.push(skills[i])
        }
        ;
        await this.setState({ skills, skills1: skills,selectedSkills: temp  })
    }

    async handleProfile() {
        if(this.state.userSkills.length < 3 || this.state.userSkills.length > 8){
            this.setState({errorMsg: "Select minimum of 3 skills and maximum of 8 skills"})
        }else{
            var data ={
                skills: this.state.userSkills
            }
            const config = {
                headers: { Authorization: `Bearer ${this.props.user.accessToken}` }
            };

            try {
                const skills = await api.addSkills(data,config)
                console.log("skills",skills);

                window.location.href= "/profile"   
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

        }
        // window.location.href = "/profile"
    }


    handleSkills(e){
        console.log("e",e.target.value);
        this.setState({errorMsg: ""})

        if(this.state.userSkills.length === 8){
            var status = this.state.userSkills.includes(e.target.value)
            if(status){
                var index = this.state.userSkills.indexOf(e.target.value)
                if (index > -1) {
                    this.state.userSkills.splice(index, 1);
                }
            }else{
                this.setState({errorMsg: "You cannot select more than 8 skills"})
            }
        }else{
            var status1 = this.state.userSkills.includes(e.target.value)
            console.log("status",status1,e.target.value,this.state.userSkills);
            if(status1){
                var index1 = this.state.userSkills.indexOf(e.target.value)
                if (index1 > -1) {
                    this.state.userSkills.splice(index1, 1);
                }
                this.setState({errorMsg: ""})
            }else{

                let temp =  this.state.userSkills
                temp.push(e.target.value)
                this.setState({userSkills: temp, errorMsg: ""})
            }

        }
    }
    render() {
        var that = this
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
                var val1 = (page - 1) * 10
                if (val1 > 0) {
                    val1 = val1 - 1
                } else {
                    val1 = 0
                }
                var val2 = val1 + 10
                console.log(val1, val2);
                let temp = []
                for(let i=val1; i<val2; i++){
                    temp.push(that.state.skills[i])
                }
                that.setState({ page, selectedSkills: temp, skills: that.state.skills1 })
            }
        };
        console.log("this", this.state);

        return (
            <div>
                <h3>Add Skills</h3>
                <p style={{color: "red", textAlign: "center"}}><b>Note: </b>Select minimum of 3 skills and maximum of 8 skills</p>
                
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Select</th>
                            <th scope="col">Skill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.selectedSkills.map((skill) => (
                            <tr key={skill.publicId}>
                                <td><input checked={this.state.userSkills.includes(skill.skillName)} value={skill.skillName} type="checkbox" onChange={(e) => this.handleSkills(e)}/></td>
                                <td>{skill.skillName}</td>
                            </tr>

                        ))}

                    </tbody>
                </table>

                <div className="App">
                    <Pagination {...paginationConfig} />
                </div>
                <p className="err-msg">{this.state.errorMsg}</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
