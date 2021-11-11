import { postDataAPI } from "../../utils/fetchData"

export const TYPES = {
    AUTH: 'AUTH'
}

// Login, Call to API and response then save Token when Login
export const login = (data) => async (dispatch) => {
    try {
        // Loading
        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        // Get data from API
        const res = await postDataAPI('login', data)
        dispatch({
            type: 'AUTH',
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })
        // Save token in localStorage
        localStorage.setItem("firstLogin", true)
        // Send notify success or error
        dispatch({
            type: 'NOTIFY',
            payload: {
                success: res.data.msg
            }
        })
    } catch (error) {
        dispatch({
            type: 'NOTIFY',
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
        dispatch({ type: 'NOTIFY', payload: { loading: true } })
        try {
            const res = await postDataAPI('refresh_token')
            dispatch({
                type: 'AUTH',
                payload: {
                    token: res.data.access_token,
                    user: res.data.user
                }
            })
            dispatch({ type: 'NOTIFY', payload: {} })
        } catch (error) {
            dispatch({
                type: 'NOTIFY',
                payload: {
                    error: error.response.data.msg
                }
            })
        }
    }
}