import React from 'react'
import { useStyles } from './style'
function TilesFeedAbout() {
    const classes = useStyles()
    return (
        <div className={classes.tilesFeedAbout}>
            <h2 style={{fontSize:'21.5px',marginBottom:'5px'}}>Giới thiệu</h2>
            <span className={classes.label}>Thêm tiểu sử</span>
            <span className={classes.label}>Chỉnh sửa chi tiết</span>
            <span className={classes.label}>Thêm sở thích</span>
            <span className={classes.label}>Chỉnh sửa phần đáng chú ý</span>
        </div>
    )
}

export default TilesFeedAbout
