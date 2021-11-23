import React from 'react'
import { useStyles } from './style'
function TilesFeedPhotos() {
    const classes = useStyles()
    return (
        <div className={classes.tilesFeedPhotos}>
           <div className={classes.photosTitle}>
               <h2 style={{fontSize:'21.5px'}}>Ảnh</h2>
               <span className={classes.seeAll}>Xem tất cả ảnh</span>
           </div>
        </div>
    )
}

export default TilesFeedPhotos
