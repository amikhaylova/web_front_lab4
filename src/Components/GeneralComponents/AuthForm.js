import React from "react";
import {reduxForm, reset, Field} from "redux-form";
import {maxLength, required} from "../../Validators/validators";
import {Input} from "./formsComponents";

const AuthForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="authWrapper">
                <div>
                    <label htmlFor="loginField">Введите логин:</label>
                </div>
                <div>
                    <Field component={Input} id="loginField" type="text"
                           name="auth_login" placeholder={"Логин"}
                           autoComplete={"off"} validate={[required, maxLength]}/>
                </div>
                <div>
                    <label htmlFor="passwordField">Введите пароль:</label>
                </div>
                <div>
                    <Field component={Input} id="passwordField" type="password"
                           name="auth_pas" placeholder={"Пароль"} autoComplete={"off"}
                           validate={[required, maxLength]}/>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </div>
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


