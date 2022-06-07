import { GLOBALTYPES } from './globalTypes'
import { POST_TYPE } from '../actions/postAction'
import { postDataAPI } from '../../utils/fetchData'
import { imageUpload, updloadSingleFile } from '../../utils/imageUpload'
export const createComment = (post, content, image, auth) => async (dispatch) => {


    try {
        let media
        media = await updloadSingleFile(image)

        const newComment = {
            content,
            image: media.url,
            like: [],
            user: auth.user,
            createAt: new Date().toISOString()
        }

        const newPost = { ...post, comments: [...post.comments, newComment] }
        dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })

        // console.log('new comment', newComment)
        const data = { ...newComment, postId: post._id }

        const res = await postDataAPI('comment', data, auth.token)
        console.log(res)
    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } })

    }
}