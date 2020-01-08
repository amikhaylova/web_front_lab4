
export function userFetchData(url, data) {
    return dispatch => {
        dispatch({
            type: 'DATA_IS_FETCHING',
            payload: data,
        });

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    //throw new Error(response.statusText);
                    dispatch({
                        type: 'FETCH_DATA_ERROR',
                        error: true,
                        payload: 'Ошибка авторизации',
                    })
                }
                return response;
            })
            .then(response => response.json())
            .then(answer => dispatch({
                type: 'FETCH_DATA',
                payload: answer,
            }));
    }
}