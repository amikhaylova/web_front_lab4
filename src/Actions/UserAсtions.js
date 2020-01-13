import Notifications from 'react-notification-system-redux';
import "./Notifications";
import {
    auth_error_notification,
    reg1_error_notification,
    reg_error_notification,
    suc_notification
} from "./Notifications";


export function login(formData) {
    var request = new Object();
    request.login = formData.auth_login;
    request.password = formData.auth_pas;
    return (dispatch) => {

        dispatch({
            type: 'LOGIN_REQUEST'
        });

        //const url = "http://127.0.0.1:8080/login";
        const url = "/login";

        console.log(request);
        console.log(JSON.stringify(request));

        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, cors, *same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(request), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then(response => {
                console.log('Status: ' + response.status);
                if (!response.ok) {
                    //throw new Error(response.statusText);
                    dispatch(Notifications.error(auth_error_notification));
                    dispatch({
                        type: 'LOGIN_FAIL',
                        payload: response,
                    });
                }
                return response;
            })
            .then(response => response.json())
            .then(answer => {
                console.log(answer.jwt);
                if (answer.jwt !== undefined) {
                    dispatch({
                        type: 'LOGIN_SUCCESS',
                        payload: answer,
                    });
                    dispatch({
                        type: 'ROUTING',
                        payload: {
                            method: 'replace', //или, например, replace
                            nextUrl: '/points'
                        }
                    });
                }
            });
    }
}

export function logout() {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

export function registrate(formData) {
    return (dispatch) => {

        dispatch({
            type: 'REG_REQUEST'
        });

        //const url = "http://127.0.0.1:8080/register";
        const url = "/register";

        console.log("before fetch");
        console.log(formData);
        console.log("URL: " + url);
        var request = new Object();
        request.login = formData.reg_login;
        request.password = formData.reg_pas1;
        console.log(request);
        console.log(JSON.stringify(request));


        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //mode: 'no-cors', // no-cors, cors, *same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(request), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        })
            .then(response => {
                if (!response.ok) {
                    dispatch(Notifications.error(reg_error_notification));
                    dispatch({
                        type: 'REG_FAIL',
                        payload: response,
                    });
                }
                return response;
            })
            .then(response => response.json())
            .then(answer => {
                console.log('Reg: ' + answer.reg);
                if (answer.reg == 'true') {
                    dispatch(Notifications.success(suc_notification));
                    dispatch({
                        type: 'REG_SUCCESS',
                        payload: answer,
                    });
                } else if (answer.reg == 'false') {
                    dispatch(Notifications.error(reg1_error_notification));
                    dispatch({
                        type: 'REG_FAIL',
                        payload: answer,
                    });
                }

            });
    }
}