import {combineReducers} from 'redux';
import login from './oauthReducer';

const rootReducer = combineReducers({
    login
});

export default rootReducer;
