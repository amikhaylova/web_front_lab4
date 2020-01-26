import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {Link} from "react-router";
import {logout} from "../Actions/UserAсtions";

class PointHeader extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ul className="header">
                    <li>
                        <Link onClick={this.props.logout} activeClassName='active'>
                            LogOut
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {}
};

function mapDispatchToProps(dispatch) {
    return {
        logout: (data) => dispatch(logout(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PointHeader)
