import React, {Component} from "react";
import {connect} from "react-redux";
import {getPoints, sendPointForm, send_notification} from "../Actions/PointActions";
import {draw_canvas} from "./draw_canvas";


class CanvasComponent extends React.Component {

    componentDidMount() {
        console.log('didMountCanvas');
        this.updateCanvas();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('didUpdateCanvas');
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, 300, 300);
        draw_canvas(ctx, this.refs.canvas.width);
        this.props.points.map((point) => {
            this.redraw_point(ctx, point);
            return true;
        })
    }

    handleClick = (e) => {

        let r = this.props.r;
        let r_is_valid = false;
        if (isNaN(r)) {
            r_is_valid = false;
        } else {
            r = parseFloat(r);
            if ((r > 0) && (r < 5)&&(r.toString.length <7)) {
                r_is_valid = true;
            }
        }

        if (r_is_valid) {
            let canvas = this.refs.canvas;
            let center = canvas.clientWidth / 2;

            let x_pix;
            let y_pix;
            let x_canvas;
            let y_canvas;

            x_pix = this.getCP_X_pix(e);
            y_pix = this.getCP_Y_pix(e);
            x_canvas = this.getCP_X_canvas(x_pix, this.props.r);
            y_canvas = this.getCP_Y_canvas(y_pix, this.props.r);

            let request = new Object();
            request.x = x_canvas;
            request.y = y_canvas;
            request.r = this.props.r;
            request.jwt = this.props.jwt;
            //request.url = "http://127.0.0.1:8080/addCanvasPoint";
            request.url = "/addPoint";
            console.log(request);
            this.props.send_form(request);
        } else {
            this.props.send_notification();
        }
    };

    draw_point(ctx, x, y, hit) {

        if (hit == "yes") {
            ctx.fillStyle = 'green';
        } else if (hit == "") {
            ctx.fillStyle = 'grey';
        } else {
            ctx.fillStyle = 'red';
        }
        ctx.beginPath();
        ctx.rect(x - 2.5, y - 2.5, 5, 5);
        ctx.fill();
    }

    redraw_point(ctx, point) {

        if (point.r != this.props.r) {
            this.draw_point(ctx, this.back_to_X_pix(point.x, this.props.r),
                this.back_to_Y_pix(point.y, this.props.r), "");
        } else {
            this.draw_point(ctx, this.back_to_X_pix(point.x, point.r),
                this.back_to_Y_pix(point.y, point.r),
                point.hit);
        }

    }


    getCP_X_pix(e) {
        var br = this.refs.canvas.getBoundingClientRect();
        var left = br.left;
        var top = br.top;
        return e.clientX - left;
    }

    getCP_Y_pix(e) {
        var br = this.refs.canvas.getBoundingClientRect();
        var left = br.left;
        var top = br.top;
        return e.clientY - top;
    }

    getCP_X_canvas(x_pix, r) {
        let canvas = this.refs.canvas;
        let center = canvas.clientWidth / 2;
        return (r / (2 / 3 * center) * (x_pix - center)).toFixed(2);
    }

    getCP_Y_canvas(y_pix, r) {
        let canvas = this.refs.canvas;
        let center = canvas.clientWidth / 2;
        return (-r / (2 / 3 * center) * (y_pix - center)).toFixed(2);
    }

    back_to_X_pix(x, new_r) {
        let canvas = this.refs.canvas;
        let center = canvas.clientWidth / 2;
        return ((2 / 3 * center) * x + center * new_r) / new_r;
    }

    back_to_Y_pix(y, new_r) {
        let canvas = this.refs.canvas;
        let center = canvas.clientWidth / 2;
        return (-(2 / 3 * center) * y + center * new_r) / new_r;
    }


    render() {


        return (
            <div>
                <canvas id="plot" ref="canvas" width={300} height={300} onClick={this.handleClick}/>
            </div>

        );
    }
}

const mapStateToProps = function (state) {
    return {
        notifications: state.notifications,
        jwt: state.user.jwt,
        r: state.user.current_r,
        points: state.user.points,

    }
};

function mapDispatchToProps(dispatch) {
    return {
        send_form: (data) => dispatch(sendPointForm(data)),
        get_points: (data) => dispatch(getPoints(data)),
        send_notification: () => dispatch(send_notification()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasComponent);
