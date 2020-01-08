import React, { Component } from "react";
import RegReduxForm from "./GeneralComponents/RegForm";



class Registration extends Component {

    onSubmit = (formData)=>{
        console.log(formData);
    };

    render() {
        return (
            <div>
                <h2>РЕГИСТРАЦИЯ</h2>
                <RegReduxForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default Registration;