import {reducerCounter} from './reducerCounter'
import {createStore,combineReducers} from 'redux'

const rootReducer = combineReducers({counter:reducerCounter})

export default createStore(rootReducer)