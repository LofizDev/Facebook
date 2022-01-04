import React, { useState, useEffect } from 'react'
import followIcon from '../../images/followBtn.png'
import message from '../../images/messageBtn.png'
import { useStyles } from './style'
import followedIcon from '../../images/followedIcon.png'
// Redux
import { follow, unFollow } from '../../redux/actions/profileAction'
import { useSelector, useDispatch } from 'react-redux'

function Follow({ user }) {
    const classes = useStyles()
    const [followed, setFollowed] = useState(false)

    //Redux
    const dispatch = useDispatch()
    const { auth, profile } = useSelector(state => state)


    // Hanlde effect button followed
    useEffect(() => {
        if (auth?.user?.following?.find(item => item?._id === user?._id)) {
            setFollowed(true)
        }
    }, [auth?.user?.following, user?._id])

    // Follow
    const handleFollow = () => {
        setFollowed(true)
        dispatch(follow({ users: profile.users, user, auth }))
        //User is current user
    }

    // UnFollow
    const handleUnFollow = () => {
        setFollowed(false)
        dispatch(unFollow({ users: profile.users, user, auth }))
    }


    return (
        <div style={{ display: 'flex' }}>
            {
                followed
                    ? <div onClick={handleUnFollow} className={classes.follow}>
                        <img className={classes.followIcon} src={followedIcon} alt="button" />
                        <p className={classes.text}>Đang theo dõi</p>
                    </div>
                    : <div onClick={handleFollow} className={classes.follow}>
                        <img className={classes.followIcon} src={followIcon} alt="button" />
                        <p className={classes.text}>Theo dõi</p>
                    </div>
            }

            <div className={classes.message}>
                <img className={classes.messageIcon} src={message} alt="button" />
                <p className={classes.textMsg}>Nhắn tin</p>
            </div>

        </div>
    )
}

export default Follow
