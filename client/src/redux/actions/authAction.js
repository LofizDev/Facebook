import { postDataAPI } from "../../utils/fetchData"

export const TYPES = {
    AUTH: 'AUTH'
}

// Login
export const login = (data) => async (dispatch) => {
    try {
        dispatch({type: 'NOTIFY', payload: { loading: true }})
        const res = await postDataAPI('login',data )
        localStorage.setItem("firstLogin",true)
        dispatch({
            type:'AUTH',
            payload: {
                token:res.data.access_token,
                user:res.data.user
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