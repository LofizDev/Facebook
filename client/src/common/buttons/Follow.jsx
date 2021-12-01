import React from 'react'
import follow from '../../images/followBtn.png'
import message from '../../images/messageBtn.png'
import { useStyles } from './style'
function Follow() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.follow}>
                <img className={classes.followIcon} src={follow} alt="button" />
                <p className={classes.text}>Theo dõi</p>
            </div>
            <div className={classes.message}>
                <img className={classes.messageIcon} src={message} alt="button" />
                <p className={classes.textMsg}>Nhắn tin</p>
            </div>
        </>
    )
}

export default Follow
