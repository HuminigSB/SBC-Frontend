import store from '../store/index'

export const useToken = () => {
    const token = {
        headers: {
            'Authorization': 'Bearer ' + store.getState().user[1]?.data?.token
        }
    }
    return[{token}];
}