export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loginRequest = (username, password) => {
    return {
        type: LOGIN_REQUEST,
        payload: {
            username,
            password
        }
    }
};

export const loginSuccess = (username) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            username
        }
    }
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: {
            error
        }
    };
};

export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

export const loginAsync = (username, password) => {
    return dispatch => {
        dispatch(loginRequest(username, password));
        fetch("https://enj4rjleilmk.x.pipedream.net", {
            method: 'POST',
            body: {
                username,
                password
            }
        })
            .then(response => dispatch(loginSuccess(username)))
            .catch(error => loginFailure(error));
    }
}