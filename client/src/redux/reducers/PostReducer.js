import { POST_TYPE } from '../actions/postAction'
import { EditData } from '../actions/globalTypes'
const initialState = {
    loadingCreatePost: false,
    posts: [],
    result: 0,
    page: 2
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TYPE.CREATE_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case POST_TYPE.LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case POST_TYPE.GET_POSTS:
            return {
                ...state,
                posts: action.payload.posts,
                result: action.payload.result
            }
        case POST_TYPE.UPDATE_POST:
            return {
                ...state,
                posts: EditData(state.posts, action.payload._id, action.payload)
            }
        default:
            return state
    }
}

export default postReducer