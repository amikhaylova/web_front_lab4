import React from "react";
import AuthReduxForm from "./AuthForm";
import {login} from "../Actions/UserAсtions";
import {connect} from "react-redux";


class Auth extends React.Component {


    onSubmit = (formData) => {
        this.props.login(formData);
    };

    render() {
        return (
            <div className='content form_container'>
                <h2>АВТОРИЗАЦИЯ</h2>
                <AuthReduxForm onSubmit={this.onSubmit.bind(this)}/>
            </div>

        );
    }
}

function mapStateToProps (state) {
    return {
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (data) => dispatch(login(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
