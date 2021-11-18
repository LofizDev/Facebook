import React from 'react'
import { useStyles } from './style'
function UserCard({ user }) {
    const classes = useStyles();
    return (
        <div className={classes.userCardContainer}>
            <img className={classes.userCardImage} src={user.avatar} alt="avartar" />
            <p className={classes.userCardName}>{user.fullname}</p>
        </div>
    )
}

export default UserCard
