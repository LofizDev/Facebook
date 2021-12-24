import React from 'react'
import TilesFeedAbout from '../../../components/profile/profileTilesFeed/TilesFeedAbout'
import ProfileComposer from '../../../components/profile/profileComposer/ProfileComposer'
import Posts from '../../../components/profile/Posts'
import TilesFeedPhotos from '../../../components/profile/profileTilesFeed/TilesFeedPhotos'
import TilesFeedFriends from '../../../components/profile/profileTilesFeed/TilesFeedFriends'
import { useSelector } from 'react-redux'
import { useStyles } from '../style'

function Post({ user }) {
    const classes = useStyles()
    const { auth } = useSelector(state => state)
    return (
        <div className={classes.profileBottom}>
            <div className={classes.profileBottomLeft}>
                <TilesFeedAbout user={user} auth={auth} />
                <TilesFeedPhotos />
                <TilesFeedFriends />
                <span style={{ display: 'flex', justifyContent: 'center', color: "var(--secondary-text)" }}>
                    Development by <span style={{ fontWeight: '500', color: 'rgb(246 104 95' }}>
                        &nbsp;Khoi Lam&nbsp;
                    </span>with 🧡 © 2022
                </span>
            </div>
            <div className={classes.profileBottomRight}>
                <ProfileComposer auth={auth} user={user} />
                <Posts user={user} />
            </div>
        </div>
    )
}

export default Post
