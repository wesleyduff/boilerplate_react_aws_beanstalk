import * as oauthAPI from '../api/mockOauthApi';

export function oauthTokenSuccess(oauth){
    console.log('---- oauthtokenSuccess : ', oauth);
    return {type: 'OAUTH_TOKEN_SUCCESS', oauth};
}

//thunk 
export function callOauth(dubs){
    return function(dispatch){
        return oauthAPI.getToken(dubs).then(res => {
            console.log('----- then from promise : ', res)
            dispatch(oauthTokenSuccess(res));
        }).catch(err => {
            console.log('----------- ERROR OAUTHACTIONS - ', err);
            throw(err);
        })
    }
}