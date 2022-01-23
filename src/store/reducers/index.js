import { combineReducers } from 'redux'
import { counterReducer } from './counter'
import { testReducer } from './test'

export default combineReducers({
    test: testReducer, counter: counterReducer
})