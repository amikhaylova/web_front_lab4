import React, {Component} from "react";
import PointReduxForm from "./PointForm";
import {logout} from "../Actions/UserAсtions";
import {getPoints, sendPointForm} from "../Actions/PointActions";
import {connect} from "react-redux";

class PointFormHandler extends Component{

    componentDidUpdate(oldProps) {
        console.log("in update");
        const newProps = this.props;
        console.log(newProps.r);
        if(oldProps.r !== newProps.r) {
            let r = newProps.r;
            let r_is_valid = false;
            if (isNaN(r)){
                r_is_valid = false;
            }else{
                r = parseFloat(r);
                if ((r>0)&&(r<5)&&(r.toString.length <7)){
                    r_is_valid=true;
                }
            }
            if(r_is_valid){
                console.log('prepare to send a request');
                let formData = new Object();
                formData.r = r;
                formData.jwt = this.props.jwt;
                this.props.get_points(formData);
            }
        }
    }

    onSubmit = (formData) => {
        const jwt = this.props.jwt;
        console.log("JWT: " + this.props.jwt);
        formData.jwt = this.props.jwt;
        formData.url = "http://127.0.0.1:8080/addPoint";
        //formData.url = "/addPoint";
        this.props.send_form(formData);
    };

    render() {

        let r = this.props.r;
        let r_is_valid = false;
        if (isNaN(r)) {
            r_is_valid = false;
        } else {
            r = parseFloat(r);
            if ((r > 0) && (r < 5)&&(r.toString().length <7 )) {
                r_is_valid = true;
            }
        }

        return (
            <div className="object_wrapper">
                <div id="label">Текущее значение R: {r_is_valid ? this.props.r : "не установлено"}</div>
                <PointReduxForm onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
}
const mapStateToProps = function(state) {
    return {
        notifications: state.notifications,
        jwt: state.user.jwt,
        r: state.user.current_r,
        points: state.user.points,

    }
};

function mapDispatchToProps(dispatch) {
    return {
        logout: (data) => dispatch(logout(data)),
        send_form: (data) => dispatch(sendPointForm(data)),
        get_points: (data) => dispatch(getPoints(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointFormHandler)
