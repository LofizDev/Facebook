import { POST_TYPE } from '../actions/postAction'

const initialState = {
    loadingCreatePost: false,
    posts: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_TYPE.CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default:
            return state
    }
}

export default postReducer