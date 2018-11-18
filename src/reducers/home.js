import { getRecommandList as _getRecommandList } from '../api/home';
const SAVE_LIST = 'SAVE_LIST';
const LOADING = 'LOADING';
const TRUE = true;
const FALSE = false;
const TOGGEL_MORE = 'TOGGEL_MORE';


export function recommandList(state = [], action) {
    switch (action.type) {
        case SAVE_LIST:
            return action.flag === 'min' ? action.recommandList : [...state, ...action.recommandList];
        default : 
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case LOADING:
            return action.isLoading;
        default : 
            return state;
    }
}

export function hasMore(state = false, action) {
    switch (action.type) {
        case TOGGEL_MORE:
            return action.hasMore;
        default:
            return state;
    }
}

export const loading = (playload) => {
    return {type: LOADING, isLoading: playload};
};

export const saveList = (playload, flag) => {
    return {type: SAVE_LIST, recommandList: playload.data, flag};
};

export const toggelMore = (playload) => {
    return {type: TOGGEL_MORE, hasMore: playload.has_more};
};

export const getRecommandList = (url, params) => {
    return (dispatch) => {
        dispatch(loading(TRUE));
        return _getRecommandList(url, params).then((res) => {
            dispatch(saveList(res, params.flag));
            dispatch(toggelMore(res));
        }).finally(() => {
            dispatch(loading(FALSE));
        });
    };
};