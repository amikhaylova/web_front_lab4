import CanvasComponent from "./Canvas";
import React, {Component} from "react";
import PointHeader from "./PointHeader";
import PointFormHandler from "./PointFormHandler";
import PointTable from "./PointTable"
import {connect} from "react-redux";
import Notifications from "react-notification-system-redux";
import "../css/index.css";


class PointsPage extends Component {
    render() {
        const {notifications} = this.props;
        return (
            <div>
                <PointHeader/>
                <div className='content_point point_container'>
                    <h2>ТОЧКИ</h2>
                    <PointFormHandler/>
                    <CanvasComponent/>
                    <PointTable/>
                    <Notifications notifications={notifications}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = function (state) {
    return {
        notifications: state.notifications,
    }
};

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PointsPage)