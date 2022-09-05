import {combineReducers} from "redux"
import {userReducer} from './userReducer'
import {universeReducer} from './universeReducer'

export const rootReducer = combineReducers({
        user: userReducer,
        universe: universeReducer
    }
)