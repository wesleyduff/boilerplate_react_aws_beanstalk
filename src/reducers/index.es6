import {combineReducers} from 'redux';
import oauth from './oauthReducer';

const rootReducer = combineReducers({
    oauth
});

export default rootReducer;
