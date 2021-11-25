import { GLOBALTYPES } from "./globalTypes"
import { getDataAPI } from '../../utils/fetchData'
export const PROFILE_TYPE = {
    LOADING: 'LOADING',
    GET_USER: 'GET_USER'
}

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
                error: err.response.data.msg
            })

        }
    }

}