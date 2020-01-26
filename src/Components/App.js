import React, {Component}  from 'react'
import {Link} from "react-router";
import Header from "./Header";
import '../css/index.css';
import Notifications, {success} from 'react-notification-system-redux';
import {connect} from "react-redux";

class App extends Component {
    render() {
        const {notifications} = this.props;
        const style = {
            NotificationItem: { // Override the notification item
                DefaultStyle: { // Applied to every notification, regardless of the notification level
                    margin: '10px 5px 2px 1px'
                },

                success: { // Applied only to the success notification item
                    color: 'red'
                }
            }
        };

        return (
            <div >
                <Header/>
                <ul className="header">
                    <li><Link to="/" onlyActiveOnIndex={true} activeClassName='active'>Главная страница</Link></li>
                    <li><Link exact to="/login" activeClassName='active'>Авторизация</Link></li>
                    <li><Link to="/registration" activeClassName='active'>Регистрация</Link></li>
                </ul>
                <Notifications notifications={notifications}/>
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    state => ({ notifications: state.notifications })
)(App);