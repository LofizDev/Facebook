import { GLOBALTYPES } from "./globalTypes"
import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { imageUpload } from '../../utils/imageUpload'
export const PROFILE_TYPE = {
    LOADING: 'LOADING',
    GET_USER: 'GET_USER'
}

// Get Profile Users
export const getProfileUsers = ({ users, id }) => async (dispatch) => {
    // If the current ID !== the ID want to search
    // Then procced to call the API search Profile User 
    if (users.every(user => user._id !== id)) {
        try {
            dispatch({ type: PROFILE_TYPE.LOADING, payload: true })
            // Get API to search Profile
            const res = await getDataAPI(`/user/${id}`)
            dispatch({
                type: PROFILE_TYPE.GET_USER,
                payload: res.data
            })
            dispatch({ type: PROFILE_TYPE.LOADING, payload: false })

        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {
                    error: err.response?.data?.msg
                }
            })
        }
    }

}

// Update Profile User
export const updateProfileUsers = ({ avatar, auth }) => async (dispatch) => {
    try {
        let media
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        if (avatar) media = await imageUpload([avatar])

        const res = await patchDataAPI("user", {
            avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.token)

        console.log('am res', res);

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                ...auth,
                user: {
                    ...auth.user,
                    avatar: avatar ? media[0].url : auth.user.avatar,
                }
            }
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response?.data?.msg
            }
        })
    }
}