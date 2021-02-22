import * as actionTypes from './actionTypes'

export function authUser(value){
    return {
        type: actionTypes.AUTH_USER_SUCESS,
        value
    }
}

export function updateUser(data){
    return{
        type: actionTypes.UPDATE_USER_SUCCESS,
        data
    }
}