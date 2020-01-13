import React from "react";
import {reduxForm, reset, Field} from "redux-form";
import {maxLength, required} from "../Validators/validators";
import Input from "./formsComponents";

const AuthForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>Введите логин:</div>
            <Field component={Input} id="loginField" type="text"
                   name="auth_login" placeholder={"Логин"}
                   autoComplete={"off"} validate={[required, maxLength]}/>
            <div>Введите пароль:</div>
            <Field component={Input} id="passwordField" type="password"
                   name="auth_pas" placeholder={"Пароль"} autoComplete={"off"}
                   validate={[required, maxLength]}/>
            <button>Отправить</button>

        </form>
    )
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('auth_form'));

const AuthReduxForm = reduxForm(
    {
        form: 'auth_form',
        onSubmitSuccess: afterSubmit,
    }
)(AuthForm);

export default AuthReduxForm;


