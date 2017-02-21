/*
Mock OATH 
if needed
*/
const delay = 1000;
const oauthtoken = {url: '',
                    token: '123456'};
const data = {
    user: {
        name: 'John Doe',
    }
}

export function getToken(oauth){
    console.log(' ------------ in api : calling getToken with : ', oauth);
    let p =  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(oauthtoken);
        }, delay); 
    });
    
    return p;
}

export function getUserDate(oauthToken){
    let p = new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            if(oauthToken !== '123456'){
                reject("Oauth Token does not exist");
            }
        
            resolve(data);
    
        }, delay);
        
    });
    
    return p;
}