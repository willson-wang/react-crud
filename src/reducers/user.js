// action types
const LOGIN = 'LOGIN';
const LOGINOUT = 'LOGINOUT';
const SAVE_USERINFO = 'SAVE_USERINFO';
const REMOVE_USERINFO = 'REMOVE_USERINFO';
const UPDATE_USERINFO = 'UPDATE_USERINFO';

// reducer
export function logined(state = false, action) {
    switch(action.type) {
        case LOGIN:
            return action.login;
        case LOGINOUT:
            return action.login;
        default:
            return state;
    }
}

export function userInfo(state = {}, action) {
    switch(action.type) {
        case SAVE_USERINFO:
            return {
                ...state,
                ...action.userInfo
            };
        case REMOVE_USERINFO:
            return {};
        case UPDATE_USERINFO:
            return {
                ...state.user,
                ...action.userInfo,
            };
        default:
            return state;
    }
}

// action creators
export const userLogin = (login) => {
    console.log('login', login);
    return {type: LOGIN, login};
};

export const userLoginout = (login) => {
    return {type: LOGINOUT, login};
};

export const saveUserInfo = (userInfo) => {
    console.log('saveUserInfo', userInfo);
    return {type: SAVE_USERINFO, userInfo};
};

export const removeUserInfo = () => {
    return {type: REMOVE_USERINFO};
};

export const updateUserInfo = (userInfo) => {
    return {type: UPDATE_USERINFO, userInfo};
};