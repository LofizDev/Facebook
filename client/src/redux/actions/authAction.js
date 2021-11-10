import { postDataAPI } from "../../utils/fetchData"

export const TYPES = {
    AUTH: 'AUTH'
}

// Login
export const login = (data) => async (dispatch) => {
    try {
        // Loading
        dispatch({type: 'NOTIFY', payload: { loading: true }})
        // Get data from API
        const res = await postDataAPI('login',data )
        dispatch({
            type:'AUTH',
            payload: {
                token:res.data.access_token,
                user:res.data.user
            }
        })
        localStorage.setItem("firstLogin",true)
        // Send notify success or error
        dispatch({
            type:'NOTIFY',
            payload: {
                success:res.data.msg
            }
        })
    } catch (error) {
        dispatch({
            type:'NOTIFY',
            payload: {
                error:error.response.data.msg
            }
        })
    }
}