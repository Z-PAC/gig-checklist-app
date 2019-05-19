import { combineReducers } from 'redux'
import ChecklistReducer from './ChecklistReducer'

export default combineReducers({
    checklists: ChecklistReducer
})