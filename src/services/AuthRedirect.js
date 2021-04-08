  
import React from "react";

// import { bindActionCreators } from "redux";
// import { authModalAsync, historyAsync } from "../../store/actions";
// import { connect } from "react-redux";
// import { reactLocalStorage } from "reactjs-localstorage";

export default class AuthRedirect extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {};
  }
  async componentWillMount() {

    if (!this.props.authEd) {
      window.location = '/sign-in'
    }
  }


  render() {
    return <div></div>;
  }
}
