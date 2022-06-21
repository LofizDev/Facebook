import React, { useState } from 'react'
import { useStyles } from './style'
import { Link } from 'react-router-dom'

function UserCard({ user, handleClose, recentSearches, setRecentSearches }) {
    const classes = useStyles();
    // const [recentSearches, setRecentSearches] = useState([])

    const handleCloseAll = () => {
        if (handleClose) handleClose()
        const existingSearchHistory = JSON.parse(localStorage.getItem("Search History") || "[]")

        recentSearches.push(...existingSearchHistory, { id: user._id, name: user.fullname, avatar: user.avatar })
        existingSearchHistory.push(recentSearches)
        // setRecentSearches(...recentSearches, existingSearchHistory, { id: user._id, name: user.fullname, avatar: user.avatar })
        localStorage.setItem("Search History", JSON.stringify(recentSearches))

        // Push unique value to localStorage
        const uniqueUsers = Array.from(JSON.parse(localStorage.getItem("Search History")).reduce((map, obj) => map.set(obj.id, obj), new Map()).values())
        localStorage.setItem("Search History", JSON.stringify(uniqueUsers))
    }

    return (
        <Link to={`/profile/${user._id}`} onClick={handleCloseAll}>
            <div className={classes.userCardContainer}>
                <img className={classes.userCardImage} src={user?.avatar} alt="avartar" />
                <p className={classes.userCardName}>{user?.fullname}</p>
            </div>
        </Link>
    )
}

export default UserCard
