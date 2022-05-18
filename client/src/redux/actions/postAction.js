import { imageUpload } from "../../utils/imageUpload";
import { GLOBALTYPES } from "./globalTypes";
import { getDataAPI, postDataAPI } from '../../utils/fetchData'
export const POST_TYPE = {
    LOADING: 'LOADING',
    CREATE_POST: 'CREATE_POST',
    ALERT: 'ALERT',
    GET_POSTS: 'GET_POSTS'
}
export const createPost = ({ content, images, optionTextEffect, auth }) => async (dispatch) => {

    let media = []
    try {
        dispatch({ type: POST_TYPE.ALERT, payload: { loadingPost: true } })
        // Send images to Cloud
        if (images.length > 0) media = await imageUpload(images)

        const res = await postDataAPI('posts', { content, images: media, optionTextEffect }, auth.token)

        dispatch({ type: POST_TYPE.CREATE_POST, payload: res.data.newPost })

        dispatch({ type: POST_TYPE.ALERT, payload: { loadingPost: false } })
        dispatch({ type: GLOBALTYPES.STATUS, payload: false })


    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const getPosts = (token) => async (dispatch) => {
    try {
        dispatch({ type: POST_TYPE.LOADING, payload: true })
        const res = await getDataAPI('posts', token)

        dispatch({ type: POST_TYPE.GET_POSTS, payload: res.data })

        dispatch({ type: POST_TYPE.LOADING, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}