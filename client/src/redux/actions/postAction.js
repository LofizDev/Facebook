import { imageUpload } from "../../utils/imageUpload";
import { GLOBALTYPES } from "./globalTypes";
import { getDataAPI, postDataAPI, patchDataAPI } from '../../utils/fetchData'
export const POST_TYPE = {
    LOADING: 'LOADING',
    CREATE_POST: 'CREATE_POST',
    ALERT: 'ALERT',
    GET_POSTS: 'GET_POSTS',
    UPDATE_POST: 'UPDATE_POST'
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

export const updatePost = ({ content, images, optionTextEffect, auth, status }) => async (dispatch) => {

    let media = []
    const imgNewUrl = images.filter(img => !img.url)
    const imgOldUrl = images.filter(img => img.url)

    if (status.content === content
        && imgNewUrl.length === 0
        && imgOldUrl.length === status.images.length
    )
        return
    try {
        dispatch({ type: POST_TYPE.ALERT, payload: { loadingPost: true } })
        // Send images to Cloud
        if (imgNewUrl.length > 0) media = await imageUpload(imgNewUrl)

        const res = await patchDataAPI(`post/${status._id}`,
            { content, images: [...imgOldUrl, ...media], optionTextEffect },
            auth.token)

        dispatch({ type: POST_TYPE.UPDATE_POST, payload: res.data.newPost })

        dispatch({ type: GLOBALTYPES.STATUS, payload: false })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })


    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}

export const likePost = ({ post, auth, str }) => async (dispatch) => {
    await patchDataAPI(`post/${post._id}/unlike`, null, auth.token)

    try {
        await patchDataAPI(`post/${post._id}/like`, { str }, auth.token)

    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }
}

export const unLikePost = ({ post, auth, str }) => async (dispatch) => {
    // const newPost = { ...post, likes: post.likes.filter(like => like._id !== auth.user._id) }
    // dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })
    try {
        await patchDataAPI(`post/${post._id}/unlike`, null, auth.token)

        const res = await getDataAPI('posts', auth.token)

        dispatch({ type: POST_TYPE.GET_POSTS, payload: res.data })
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.response.data.msg }
        })
    }

}