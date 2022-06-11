import { GLOBALTYPES } from './globalTypes'
import { POST_TYPE } from '../actions/postAction'
import { postDataAPI } from '../../utils/fetchData'
import { imageUpload, updloadSingleFile } from '../../utils/imageUpload'
export const createComment = (post, content, image, dataSong, auth) => async (dispatch) => {


    let media
    if (typeof image !== 'string') {
        media = await updloadSingleFile(image)
    }

    const newComment = {
        content,
        image: typeof image === 'string' ? image : media.secure_url,
        like: [],
        user: auth.user,
        dataSong,
        createAt: new Date().toISOString()
    }
    const newPost = { ...post, comments: [...post.comments, newComment] }
    dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })

    try {
        const data = { ...newComment, postId: post._id }

        const res = await postDataAPI('comment', data, auth.token)

        const newData = { ...res.data.newComment, user: auth.user }
        const newPost = { ...post, comments: [...post.comments, newData] }
        dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })
        // console.log(res)
    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } })

    }
}
