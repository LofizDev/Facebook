import { MoreHoriz, Public } from '@material-ui/icons';
import React from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
function Post() {
    const classes = useStyles();
    return (
        <header className={classes.postContainer}>
            {/* User Post */}
            <div className={classes.userPost}>
                <div className={classes.userPostLeft}>
                    <img className={classes.imgUser} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/242133184_1602794756770827_5976127879625127024_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=TOVmEU2tAmUAX9a8wxv&_nc_ht=scontent.fsgn2-1.fna&oh=6e1a1576572686c152d0a747e48d5274&oe=61730BE7" alt="avartar" />
                    <div className={classes.detailUser}>
                        <p className={classes.nameUser}>Dương Tuyết Quyên</p>
                        <p className={classes.timeSince}>
                        <span>12 phút  ·&nbsp; </span> 
                          <Public className={classes.publicIcon}/>
                        </p>
                    </div>
                </div>
                <div className={classes.userPostRight}>
                    <MoreHoriz/>
                </div>
            </div>
            {/* Content Post */}
            <div className={classes.contentPost}>
                <p className={classes.textContent}>I hate texting, I want to see u</p>
                <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/245433451_1262151704191996_9118255426205874845_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=g6zp-_r6opMAX_ibf1y&tn=75wmVns5i9UCQ6Tk&_nc_ht=scontent.fsgn2-3.fna&oh=23637c3c56edee2fbfe46446973eec35&oe=617444E4" alt="content" />
            </div>
            {/* Count Interact */}
            <div className={classes.interactPost}>
                <div className={classes.countInterac}>34</div>
                <div className={classes.countComment}>32 Bình luận</div>
            </div>
            {/* React Icons */}
            <div className={classes.reactIcons}>
                <div className={clsx(classes.like, classes.commonIcons)}>
                    <i className={clsx(classes.likeIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>Thích</span>
                </div>
                <div className={clsx(classes.comment, classes.commonIcons)}>
                    <i className={clsx(classes.commentIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>Bình luận</span>
                </div>
                <div className={clsx(classes.share, classes.commonIcons)}>
                    <i className={clsx(classes.shareIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>Chia sẻ</span>
                </div>
            </div>
        </header>
    )
}

export default Post
