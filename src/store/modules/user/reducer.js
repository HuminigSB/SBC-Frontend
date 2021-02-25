import produce from 'immer'

import * as actionTypes from './actionTypes'

const reducer = (state = [], action) => {
    switch (action.type){
        case actionTypes.AUTH_USER_SUCESS:
            return produce(state, draft => {
                const hashAuth = state[0] ? true : false
                if(!hashAuth){
                    draft.push({ auth: action.value })
                }else{
                    draft[0].auth = action.value
                }
            })
        case actionTypes.UPDATE_USER_SUCCESS:
            return produce(state, draft => {
                const hasData = state[1] ? true : false
                if(!hasData){
                    draft.push({ data: action.data })
                }else{
                    draft[1].data = action.data
                }
            })
        
        default:
            return state;
    }
}

export default reducer