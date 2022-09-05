import {ADD_USER, CHANGE_TYPE} from "../type";
import {VIEW_ALL_PRODUCTS} from '../type'

const initialState = {
    users: [],
    name: '',
    surname: '',
    email: '',
    password: '',
    isAuth: false,
    user: {
        name: '',
        surname: '',
        email: '',
        password: '',
    }

}

export const userReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case ADD_USER:

            return newState
        default:
            return state
    }
}