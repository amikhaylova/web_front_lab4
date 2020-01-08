import React, {Component} from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import Auth from "./Auth";
import Registration from "./Registration";
import Points from "./Points";
import Header from "./GeneralComponents/Header";
import {connect} from "react-redux";
import {userFetchData} from "../Actions/fetchData";

import {logOut} from "../Actions/logOut";
import {Redirect} from "react-router";

class Main extends Component {

    logOut = () =>{
        this.props.logOut();
    };

    render() {
        const {user, userFetchData, logOut} = this.props;
        /*if (user.redirect) {
            return (
                <BrowserRouter>
                    <Route path="/Points" render={(props) => <Points auth={user.auth} redirect={user.redirect} logOut={logOut} {...props}/>}/>
                </BrowserRouter>)
        }*/
        return (
            <BrowserRouter >
                <div>
                    <Header/>

                    <ul className="header">
                        {!user.redirect &&
                        <li><NavLink exact to="/">Авторизация</NavLink></li>
                        }

                        {!user.redirect &&
                        <li><NavLink to="/Registration">Регистрация</NavLink></li>
                        }

                        {user.redirect &&
                        <li><NavLink to="/Points">Главная страница</NavLink></li>
                        }

                        {user.redirect &&
                        <li>
                            <a onClick={this.logOut}>
                                Разлогиниться
                            </a>
                        </li>
                        }
                    </ul>

                    <div>
                    </div>
                    <div className="content">
                        <Route exact path="/"
                               render={(props) => <Auth login={user.login} password={user.password} auth={user.auth}
                                                        is_authing={user.is_authing} redirect={user.redirect}
                                                        userFetchData={userFetchData} {...props}/>}/>
                        <Route path="/Registration" component={Registration}/>
                        <Route path="/Points" component={Points}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}



// приклеиваем данные из store
const mapStateToProps = store => {
    return {
        user: store.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        userFetchData: (url, data) => dispatch(userFetchData(url, data)),
        logOut: () => dispatch(logOut()),
    }
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(Main);
