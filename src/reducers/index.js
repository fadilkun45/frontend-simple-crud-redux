import dataReducer from './dataReducer'
import { combineReducers } from 'redux'
import updateReducer from './updateReducer'
import dataByidReducer from './dataByIdReducer'

const rootReducers = combineReducers({
    item: dataReducer,
    update: updateReducer,
    dataByid:dataByidReducer ,
})

export default rootReducers