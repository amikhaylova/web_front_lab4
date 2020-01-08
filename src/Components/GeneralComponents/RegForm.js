import React, { Component } from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {Input} from "./formsComponents";
import {matchInput, maxLength, required} from "../../Validators/validators";

const RegForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="regWrapper">
                <div>
                    <label htmlFor="loginField">Введите логин:</label>
                </div>
                <div>
                    <Field component={Input} id="loginField" type="text"
                           name="reg_login" placeholder={"Логин"} autoComplete={"off"}
                           validate={[required, maxLength]}/>
                </div>
                <div>
                    <label htmlFor="passwordField">Введите пароль:</label>
                </div>
                <div>
                    <Field component={Input} id="passwordField" type="password"
                           name="reg_pas1" placeholder={"Пароль"} autoComplete={"off"}
                           validate={[required, maxLength]}/>
                </div>
                <div>
                    <label htmlFor="passwordField">Повторите пароль:</label>
                </div>
                <div>
                    <Field component={Input} id="passwordField" type="password"
                           name="reg_pas2"
                           placeholder={"Подтвердите пароль"} autoComplete={"off"}
                           validate={[required, maxLength, matchInput]}/>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </div>
        </form>
    )
};

const RegReduxForm = reduxForm(
    {
        form: 'reg_form'
    }
)(RegForm);

export default RegReduxForm;


