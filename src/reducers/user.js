// action types
const LOGIN = 'LOGIN';
const LOGINOUT = 'LOGINOUT';
const SAVE_USERINFO = 'SAVE_USERINFO';
const REMOVE_USERINFO = 'REMOVE_USERINFO';
const UPDATE_USERINFO = 'UPDATE_USERINFO';

// reducer
export default function (state, action) {
    if (!state) {
        state = {
            userInfo: {},
            logined: false
        };
    }

    switch(action.type) {
        case LOGIN:
            return {...state, logined: action.login};
        case LOGINOUT:
            return {...state, logined: action.login};
        case SAVE_USERINFO:
            return {
                ...state,
                userInfo: {
                    ...action.userInfo,
                }
            };
        case REMOVE_USERINFO:
            return {
                ...state,
                userInfo: {}
            };
        case UPDATE_USERINFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    ...action.userInfo
                }
            };
        default:
            return state;
    }
}

// action creators
export const login = (login) => {
    return {type: LOGIN, login};
};

export const loginout = (login) => {
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