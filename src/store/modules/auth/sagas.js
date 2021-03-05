import {takeLatest, call, put, all} from 'redux-saga/effects'
import {toast} from 'react-toastify'

import api from '../../../services/api'
import history from '../../../services/history'

import {signInSucess, signFailure} from './actions'

export function* signIn({payload}){
    try{
        const response = yield call(api.post, '/login', payload)
        const {user, token} = response.data
        api.defaults.headers['Authorization'] = `Bearer ${token}`
        yield put(signInSucess(token, user))
        history.push('/dashboard')
    }catch(error){
        toast.error(error.response.data.error)
        yield put(signFailure())
    }
}

export function* signUp({payload}){
    try{
        yield call(api.post, '/user', payload)
        toast.success("Conta criada com sucesso!")
        history.push('/')
    }catch(error){
        toast.error(error.response.data.error)
        yield put(signFailure())
    }
}

export function setToken({payload}){
    if(!payload)
        return;

    const {token} = payload.auth;

    if(token){
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
}

export function signOut(){
    history.push('/')
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut)
])