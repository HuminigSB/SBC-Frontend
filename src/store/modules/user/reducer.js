import produce from 'immer'

import * as actionTypes from './actionTypes'

const reducer = (state = [], action) => {
    switch (action.type){
        case actionTypes.AUTH_USER_SUCESS:
            return produce(state, draft => {
                draft.push({
                    auth: true
                })
            })
        case actionTypes.UPDATE_USER_SUCCESS:
            return produce(state, draft => {
                draft.push({
                    data: action.data
                })
            })
        
        default:
            return state;
    }
}

export default reducer