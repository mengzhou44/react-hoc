

export const signIn = function (history) {
    return function (dispatch) {
        dispatch({ type: "SIGN_IN_SUCCESS" });
        history.push('/blogs');
    };
};

export const signOut = function (history) {
    return function (dispatch) {
        dispatch({ type: "SIGN_OUT_SUCCESS" });
        history.push('/');
    };
};


