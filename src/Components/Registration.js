import React, { Component } from "react";
import RegReduxForm from "./RegForm";
import {registrate} from "../Actions/UserAсtions";
import {connect} from "react-redux";



class Registration extends Component {

    onSubmit = (formData)=>{
        this.props.registrate(formData);
    };

    render() {
        return (
            <div className='content form_container'>
                    <h2>РЕГИСТРАЦИЯ</h2>
                    <RegReduxForm onSubmit={this.onSubmit.bind(this)}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        failed_reg: state.user.failed_reg,
        suc_reg: state.user.suc_reg,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        registrate: (data) => dispatch(registrate(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)