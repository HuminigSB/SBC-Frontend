/* eslint-disable import/no-anonymous-default-export */
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

export default reducer => {
    const persistedReducer = persistReducer({
        key: 'sbc',
        storage,
        whitelist: ['auth']
    },
        reducer
    );

    return persistedReducer;
}