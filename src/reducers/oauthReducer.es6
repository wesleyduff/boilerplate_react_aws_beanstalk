export default function oauthReducer(state = { oauth: {} }, action){
    
    switch(action.type){
        case 'OAUTH_TOKEN_SUCCESS': {
            console.log('oauth token success action : ', action);
            console.log('oauth token success state : ', state);
            let current = Object.assign({}, ...state, action.oauth);
            console.log('Current - ', current);
            return current;
        }   
        default : 
            return state;
    }
    
}