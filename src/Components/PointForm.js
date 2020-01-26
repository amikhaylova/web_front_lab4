import React from "react";
import {reduxForm, reset, Field} from "redux-form";
import {maxPointLength, required, x_value, y_value, r_value} from "../Validators/validators";
import Input from "./formsComponents";

const PointForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div> Введите R:</div>
            <Field component={Input} id="rField" type="text"
                   name="r" placeholder={"(-5 ... 5)"} autoComplete={"off"}
                   validate={[required, maxPointLength, r_value]}/>
            <div> Введите X:</div>
            <Field component={Input} id="xField" type="text"
                   name="x" placeholder={"(-5 ... 5)"}
                   autoComplete={"off"} validate={[required, maxPointLength, x_value]}/>
            <div>Введите Y:</div>
            <Field component={Input} id="yField" type="text"
                   name="y" placeholder={"(-3 ... 3)"} autoComplete={"off"}
                   validate={[required, maxPointLength, y_value]}/>
            <button>Проверить</button>
        </form>
    )
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('point_form'));


const PointReduxForm = reduxForm(
    {
        form: 'point_form',
        onSubmitSuccess: afterSubmit,
    }
)(PointForm);

export default PointReduxForm;


