const fetchLib = async (method = 'GET', route , body = {}) => {
    var response
    
    if(method === 'GET')
        response = await fetch(process.env.REACT_APP_ENDPOINT  + "v1/" + route)  
    else
        response = await fetch(  process.env.REACT_APP_ENDPOINT + "v1/" + route, {
            method,
            body : JSON.stringify(body),
            headers : {
                'Content-Type' : 'application/json',
            }
        })

    return response
}

const fetchAuth = async (method = 'GET' , route , token , body = {} ) => {
    var response
    const headers = {
        'Authorization' : 'Bearer '  + token
    }
    if(method === 'GET')
        response = await fetch(process.env.REACT_APP_ENDPOINT  + "v1/" + route , {
            'Content-Type' : 'application/json',
            headers : { ...headers }
        })  
    else
        response = await fetch(  process.env.REACT_APP_ENDPOINT + "v1/" + route, {
            method,
            body : JSON.stringify(body),
            headers : {
                'Content-Type' : 'application/json',
                ...headers
            }
        })

    return response
}

const fetchAuthFile = async (method = 'GET' , route , token ,body = {} ) => {
    var response
    const headers = {
        'Authorization' : 'Bearer '  + token
    }
    if(method === 'GET')
        response = await fetch(process.env.REACT_APP_ENDPOINT  + "v1/" + route , {
            headers : { ...headers }
        })  
    else
        response = await fetch(  process.env.REACT_APP_ENDPOINT + "v1/" + route, {
            method,
            body : body,
            headers : {
                ...headers
            }
        })

    return response
}



export {  fetchLib  , fetchAuth  , fetchAuthFile} 
