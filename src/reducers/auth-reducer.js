export default (state = false, action) => {

    switch (action.type) {
        case "SIGN_IN_SUCCESS":
            return true;
        case "SIGN_OUT_SUCCESS":
            return false;
        default:
            return state;
    }
}