import { PROFILE_TYPE } from "../actions/profileAction"
const initialState = {
    loading: false,
    users: [],
    posts: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_TYPE.LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case PROFILE_TYPE.GET_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user]
            }
        default:
            return state
    }
}

export default profileReducer