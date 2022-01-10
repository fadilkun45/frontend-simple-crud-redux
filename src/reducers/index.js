import dataReducer from './dataReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    item: dataReducer
})

export default rootReducers