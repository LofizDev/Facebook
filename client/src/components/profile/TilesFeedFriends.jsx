import React from 'react'
import { useStyles } from './style'
function TilesFeedFriends() {
    const classes = useStyles()
    return (
        <div className={classes.tilesFeedPhotos}>
           <div className={classes.photosTitle}>
               <h2 style={{fontSize:'21.5px'}}>Bạn bè</h2>
               <span className={classes.seeAll}>Xem tất cả bạn bè</span>
           </div>
        </div>
    )
}

export default TilesFeedFriends

