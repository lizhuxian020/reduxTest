
import * as Types from '../constants/LoginTypes'

const initialState = {
    desc: '未登陆',
    isSuccess: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Types.LOGIN_IN_START: {
            return Object.assign({}, state, {
                desc: '开始登陆',
                isSuccess: false,
                user: null
            })
        }
        case Types.LOGIN_IN_DONE: {
            return Object.assign({}, state, {
                desc: '登陆成功',
                isSuccess: true,
                user: action.payload
            })
        }
        case Types.LOGIN_IN_ERROR: {
            return Object.assign({}, state, {
                desc: '登陆失败',
                isSuccess: false,
                user: null
            })
        }
        default: {
            return state;
        }
    }

}