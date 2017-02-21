const initialState = {
         oauth : {
            url : 'initial_state.html',
            token : null
        }
};

export default function oauthReducer(state = initialState, action){
    
    let newState = null;
    console.log('reducer', action);
    switch(action.type){
        case 'OAUTH_TOKEN_SUCCESS': {
            newState = Object.assign({}, state);
            console.log('newState BEFORE', Object.assign({}, newState));
            newState.oauth = action.oauth;
            console.log('new state AFTER : ', newState);
            return newState;
        }   
        default : 
            return state;
    }
    
}