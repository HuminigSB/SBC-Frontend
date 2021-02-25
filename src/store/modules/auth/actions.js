export function signInRequest(payload){
    return{
        type: '@auth/SIGN_IN_REQUEST',
        payload
    }
}

export function signInSucess(token, user){
    return{
        type: '@auth/SIGN_IN_SUCESS',
        payload: {token, user}
    }
}

export function signUpRequest(payload){
    return{
        type: '@auth/SIGN_UP_REQUEST',
        payload
    }
}

export function signFailure(){
    return{
        type: '@auth/SIGN_FAILURE'
    }
}

export function signOut(){
    return{
        type: '@auth/SIGN_OUT'
    }
}