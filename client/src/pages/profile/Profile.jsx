import React from 'react'
import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'
import { useStyles } from './style'
import TilesFeedAbout from '../../components/profile/TilesFeedAbout'
import ProfileComposer from '../../components/profile/ProfileComposer'
import TilesFeedFriends from '../../components/profile/TilesFeedFriends'
import TilesFeedPhotos from '../../components/profile/TilesFeedPhotos'
function Profile() {
    const classes = useStyles()
    return (
        // Profile Top, Avatar banner
        <>
        <div className={classes.profileTop}>
            <div className={classes.infoContainer}>
               <div className={classes.info}>
                  <Info/>
               </div>
            </div>
        </div>
        {/* Profile Bottom , Posts */}
        <div className={classes.profileBottom}>
            <div className={classes.profileBottomLeft}>
                <TilesFeedAbout/>
                <TilesFeedPhotos/>
                <TilesFeedFriends/>
                <span className={classes.policy}>Quyền riêng tư  · Điều khoản  · Quảng cáo  · Lựa chọn quảng cáo   · Cookie  ·   · Meta © 2021</span>
            </div>
            <div className={classes.profileBottomRight}>
                <ProfileComposer/>
                <Posts/>
            </div>

        </div>
       </>
    )
}

export default Profile
