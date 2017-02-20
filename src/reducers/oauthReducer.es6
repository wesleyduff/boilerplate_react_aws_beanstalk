export default function oauthReducer(state = { oauth: {} }, action){
    
    switch(action.type){
        case 'OAUTH_FIRST_CALL': {
            console.log('make call to oauth in oauthReducer : ', action);
            //return new state and only update the url
            const oauth = action.oauth;
            oauth.token = "abd";
            oauth.url = "changed.html";
            action.oauth = oauth;
            let _state = Object.assign({}, state, action);
            console.log('new state from oauthReducer: ', _state);
            return _state;
        }   
        default : 
            return state;
    }
    
}