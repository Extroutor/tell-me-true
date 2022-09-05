import {ADD_USER} from "./type";

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}