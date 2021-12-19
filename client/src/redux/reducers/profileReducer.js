import { PROFILE_TYPE } from "../actions/profileAction"
const initialState = {
    loadingSecondary: false,
    users: [],
    posts: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_TYPE.LOADING:
            return {
                ...state,
                loadingSecondary: action.payload
            }
        case PROFILE_TYPE.GET_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user]
            }
        case PROFILE_TYPE.FOLLOW:
            return {
                ...state,
                users: state.users.map(user =>
                    (user._id === action.payload._id ? action.payload : user))
            }
        case PROFILE_TYPE.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user =>
                    (user._id === action.payload._id ? action.payload : user))
            }
        default:
            return state
    }
}

export default profileReducer