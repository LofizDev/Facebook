import { GLOBALTYPES } from "./globalTypes"
import { getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { imageUpload } from '../../utils/imageUpload'
export const PROFILE_TYPE = {
    LOADING: 'LOADING',
    GET_USER: 'GET_USER',
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW'
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
export const updateProfileUsers = ({ userData, avatar, auth }) => async (dispatch) => {
    try {
        let media
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loadingSecondary: true } })

        // Save img to Cloudinary
        if (avatar) media = await imageUpload([avatar])

        const res = await patchDataAPI("user", {
            ...userData,
            avatar: avatar ? media[0].url : auth.user.avatar
        }, auth.token)


        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })

        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                ...auth,
                user: {
                    ...auth.user, ...userData,
                    avatar: avatar ? media[0].url : auth.user.avatar,
                }
            }
        })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response?.data?.msg }
        })
    }
}

// Follow, user is current user
export const follow = ({ users, user, auth }) => async (dispatch) => {
    let newUser = { ...user, followers: [...user.followers, auth.user] }

    // Followers of User
    dispatch({ type: PROFILE_TYPE.FOLLOW, payload: newUser })

    // Following of Auth
    dispatch({
        type: GLOBALTYPES.AUTH, payload: {
            ...auth,
            user: {
                ...auth.user,
                following: [...auth.user.following, newUser]
            }
        }
    })
}

// UnFollow, User is current user
export const unFollow = ({ users, user, auth }) => async (dispatch) => {
    // Logic check if exist user then remove duplicate user
    let newUser = {
        ...user,
        followers: user.followers.filter(item => item._id !== auth.user._id)
    }

    //Followers of User
    dispatch({ type: PROFILE_TYPE.UNFOLLOW, payload: newUser })

    // Following of Auth
    dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
            ...auth,
            user: {
                ...auth,
                user: { ...auth.user, following: auth.user.following.filter(item => item._id !== newUser._id) }
            }
        }
    })
}