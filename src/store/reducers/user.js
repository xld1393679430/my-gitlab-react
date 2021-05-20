import { handleActions } from 'redux-actions';

export const CHANGE_USER = 'CHANGE_USER'

const initialState = {
    userInfo: {
        name: '',
        age: '',
        sex: ''
    }
}

const user = handleActions({
    [CHANGE_USER]: (state, action = {}) => {
        return {
            userInfo: {
                ...state.userInfo,
                ...action.payload
            }
        }
    }
}, initialState)

export default user