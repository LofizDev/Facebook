import { DeleteData, EditData, GLOBALTYPES } from './globalTypes'
import { POST_TYPE } from '../actions/postAction'
import { deleteDataAPI, patchDataAPI, postDataAPI } from '../../utils/fetchData'
import { imageUpload, updloadSingleFile } from '../../utils/imageUpload'

export const createComment = (post, content, image, dataSong, auth, onReply) => async (dispatch) => {
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
        reply: onReply && onReply.commentID,
        tag: onReply && onReply.user,
        createAt: new Date().toISOString()
    }
    const newPost = { ...post, comments: [...post.comments, newComment] }
    dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })

    try {
        const data = { ...newComment, postId: post._id, postUserId: post.user._id }

        const res = await postDataAPI('comment', data, auth.token)

        const newData = { ...res.data.newComment, user: auth.user }
        const newPost = { ...post, comments: [...post.comments, newData] }
        dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })
        // console.log(res)
    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } })

    }
}

export const likeComment = ({ item, post, auth }) => async (dispatch) => {

    var comment = item
    const newComment = { ...comment, likes: [...comment.likes, auth.user] }

    const newComments = EditData(post.comments, comment._id, newComment)
    const newPost = { ...post, comments: newComments }

    dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })

    try {
        await patchDataAPI(`comment/${comment._id}/like`, null, auth.token)
    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } })
    }
}

export const unLikeComment = ({ item, post, auth }) => async (dispatch) => {

    var comment = item
    const newComment = { ...comment, likes: DeleteData(comment.likes, auth.user._id) }

    const newComments = EditData(post.comments, comment._id, newComment)
    const newPost = { ...post, comments: newComments }

    dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })

    try {
        await patchDataAPI(`comment/${comment._id}/unlike`, null, auth.token)

    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } })
    }
}

export const deleteComment = ({ post, item, auth }) => async (dispatch) => {

    const deleteArr = [...post.comments.filter(cm => cm.reply === item._id), item]
    const newPost = {
        ...post,
        comments: post.comments.filter(cm => !deleteArr.find(data => cm._id === data._id))
    }
    dispatch({ type: POST_TYPE.UPDATE_POST, payload: newPost })
    try {
        deleteArr.forEach(teim => {
            deleteDataAPI(`comment/${item._id}`, auth.token)
        })
        console.log(post, auth, item)


    } catch (error) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error.response.data.msg } })
    }
}