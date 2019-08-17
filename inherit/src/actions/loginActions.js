import * as types from '../constants/LoginTypes';


export function login(userID, pwd) {
    return ({dispatch, state}) => {
        dispatch({type: types.LOGIN_IN_START});
        fetch('http://www.baidu.com')
            .then(() => {
                dispatch({
                    type: types.LOGIN_IN_DONE,
                    payload: {
                        userID: userID,
                        userName: '哈哈'
                    }
                })
            })
            .catch(_=>{
                dispatch({
                    type: types.LOGIN_IN_ERROR
                })
            })
    }
}