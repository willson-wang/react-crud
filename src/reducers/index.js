import { combineReducers } from 'redux';
import { userInfo,logined  } from './user';
import { recommandList, isLoading, hasMore } from './home';

const appReducers = combineReducers({
    logined,
    userInfo,
    recommandList,
    isLoading,
    hasMore
});

export default appReducers;

