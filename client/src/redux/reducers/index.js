import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import profile from './profileReducer'
import status from './statusReducer'
import homePost from './PostReducer'
export default combineReducers({
    auth,
    alert,
    profile,
    status,
    homePost
})