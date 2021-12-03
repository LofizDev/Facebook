import React from 'react'
import { useStyles } from './style'
import { Link } from 'react-router-dom'

function UserCard({ user, handleClose }) {
    const classes = useStyles();

    const handleCloseAll = () => {
        if(handleClose) handleClose()
    }
    return (
        <Link to={`/profile/${user._id}`} onClick={handleCloseAll}>
        <div className={classes.userCardContainer}>
            <img className={classes.userCardImage} src={user.avatar} alt="avartar" />
            <p className={classes.userCardName}>{user.fullname}</p>
        </div>
        </Link>
    )
}

export default UserCard
