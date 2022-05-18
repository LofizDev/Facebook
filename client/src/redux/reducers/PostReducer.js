import { POST_TYPE } from '../actions/postAction'

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
                posts: [...state.posts, action.payload]
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
        default:
            return state
    }
}

export default postReducer