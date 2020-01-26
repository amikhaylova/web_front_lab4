import Notifications from "react-notification-system-redux";
import { point_notification} from "./Notifications";

export function sendPointForm(formData) {
    console.log(formData);
    return (dispatch) => {
        const header = 'Bearer '.concat(formData.jwt);
        const url = formData.url;
        let request = new Object();
        request.x = formData.x;
        request.y = formData.y;
        request.r = formData.r;

        console.log("Object " + JSON.stringify(request));
        /*console.log("Header "  + header);*/

        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            headers: {
                'Authorization': header,
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

                }
                return response;
            })
            .then(response => response.json())
            .then(answer => {
                console.log(answer);
                let data = new Object();
                data.r = formData.r;
                console.log("getPoints!");

                    fetch("/getPoints", {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    //mode: 'no-cors', // no-cors, cors, *same-origin
                    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    //credentials: 'include', // include, *same-origin, omit
                    headers: {
                        'Authorization': header,
                        'Content-Type': 'application/json',

                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    //redirect: 'follow', // manual, *follow, error
                    //referrer: 'no-referrer', // no-referrer, *client
                    body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
                })
                    .then(response => {
                        console.log('Status: ' + response.status);
                        if (!response.ok) {

                        }
                        return response;
                    })
                    .then(response => response.json())
                    .then(answer => {
                        dispatch({
                            type: 'CHANGE_POINTS',
                            payload: answer,
                        });
                        console.log(answer);
                    });
            });
    }
}

export function getPoints(formData) {
    return (dispatch) => {
        const header = 'Bearer '.concat(formData.jwt);
        const url = "http://127.0.0.1:8080/getPoints";
        //const url = "/getPoints";
        let request = new Object();
        request.r = formData.r;

        console.log("Object " + JSON.stringify(request));
        console.log("Header "  + header);

        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //mode: 'no-cors', // no-cors, cors, *same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            headers: {
                'Authorization': header,
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

                }
                return response;
            })
            .then(response => response.json())
            .then(answer => {
                dispatch({
                    type: 'CHANGE_POINTS',
                    payload: answer,
                });
                console.log(answer);
            });
    }
}

export function send_notification() {
    return (dispatch) => {
        dispatch(Notifications.error(point_notification));
    }
}