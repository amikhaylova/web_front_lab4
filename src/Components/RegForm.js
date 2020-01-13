import React, {Component} from "react";
import {reduxForm, reset} from "redux-form";
import {Field} from "redux-form";
import Input from "./formsComponents";
import {matchInput, maxLength, required} from "../Validators/validators";

const RegForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                Введите логин:
            </div>
            <Field component={Input} id="loginField" type="text"
                   name="reg_login" placeholder={"Логин"} autoComplete={"off"}
                   validate={[required, maxLength]}/>

            <div>
                Введите пароль:
            </div>
            <Field component={Input} id="passwordField" type="password"
                   name="reg_pas1" placeholder={"Пароль"} autoComplete={"off"}
                   validate={[required, maxLength]}/>

            <div>
                Повторите пароль:
            </div>
            <Field component={Input} id="passwordField" type="password"
                   name="reg_pas2"
                   placeholder={"Подтвердите пароль"} autoComplete={"off"}
                   validate={[required, maxLength, matchInput]}/>


            <button>Отправить</button>

        </form>
    )
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('reg_form'));

const RegReduxForm = reduxForm(
    {
        form: 'reg_form',
        onSubmitSuccess: afterSubmit,
    }
)(RegForm);

export default RegReduxForm;


