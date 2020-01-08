import React from "react";
import AuthReduxForm from "./GeneralComponents/AuthForm";
import PropTypes from "prop-types";



class Auth extends React.Component {


    onSubmit = (formData)=>{
        const url = "http://127.0.0.1:8080/greeting";
        this.props.userFetchData(url, formData);
    };

    render() {
        const { name } = this.props;
        return (
            <div>
                <h2>АВТОРИЗАЦИЯ</h2>
                <AuthReduxForm onSubmit={this.onSubmit}/>
            </div>

        );
    }
}

Auth.propTypes = {
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    auth: PropTypes.bool.isRequired,
    is_authing: PropTypes.bool.isRequired,
    redirect: PropTypes.bool.isRequired,
    userFetchData: PropTypes.func.isRequired,

};

export default Auth;