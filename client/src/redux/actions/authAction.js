import { postDataAPI } from "../../utils/fetchData"
   
import { GLOBALTYPES } from './globalTypes'

// Login, Call to API and response then save Token when Login
export const login = (data) => async (dispatch) => {
    try {
        // Loading
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        // Get data from API
        const res = await postDataAPI('login', data)
        dispatch({
            type: GLOBALTYPES.AUTH, 
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })
        // Save token in localStorage
        localStorage.setItem("firstLogin", true)
        // Send notify success or error
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {
                success: res.data.msg
            }
        })
    } catch (error) {
        dispatch({
            type: GLOBALTYPES.ALERT, 
            payload: {
                error: error.response.data.msg
            }
        })
    }
}

// Check if token exists locaStorage then call API ( Automatically Login )
export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin")
    if (firstLogin) {
        dispatch({ type:GLOBALTYPES.ALERT, payload: { loading: true } })
        try {
            const res = await postDataAPI('refresh_token')
            dispatch({
                type: GLOBALTYPES.AUTH, 
                payload: {
                    token: res.data.access_token,
                    user: res.data.user
                }
            })
            dispatch({type: GLOBALTYPES.ALERT, payload: {} })
        } catch (error) {
            dispatch({
                type: GLOBALTYPES.ALERT, 
                payload: {
                    error: error.response.data.msg
                }
            })
        }
    }
}