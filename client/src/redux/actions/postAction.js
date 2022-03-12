import { imageUpload } from "../../utils/imageUpload";
import { GLOBALTYPES } from "./globalTypes";
import { postDataAPI } from '../../utils/fetchData'
export const POST_TYPE = {
    LOADING: 'LOADING',
    CREATE_POST: 'CREATE_POST'
}
export const createPost = ({ content, imagesSelected, auth }) => async (dispatch) => {

    let media = []
    try {
        dispatch({ type: POST_TYPE.CREATE_POST, payload: { loading: true } })
        // Send images to Cloud
        if (imagesSelected.length > 0) media = await imageUpload(imagesSelected)

        console.log(media)
        const res = await postDataAPI('posts', { content, imagesSelected: media }, auth.token)
        console.log('hi am res', res)

        dispatch({ type: POST_TYPE.CREATE_POST, payload: { loading: false } })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}