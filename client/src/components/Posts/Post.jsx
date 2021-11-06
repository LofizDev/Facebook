import { MoreHoriz, Public } from '@material-ui/icons';
import React from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next'
function Post() {
    const{t} = useTranslation()
    const classes = useStyles();
    return (
        <header className={classes.postContainer}>
            {/* User Post */}
            <div className={classes.userPost}>
                <div className={classes.userPostLeft}>
                    <img className={classes.imgUser} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/237580190_555211889231108_1161435415566896807_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=oH-TOVru5o8AX9Y2JYT&_nc_ht=scontent.fsgn2-6.fna&oh=87a31068b2a4accc064c8df4eeaa476e&oe=61798DDD" alt="avartar" />
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
                <div className={classes.countComment}>32 {t('binhluans')}</div>
            </div>
            {/* React Icons */}
            <div className={classes.reactIcons}>
                <div className={clsx(classes.like, classes.commonIcons)}>
                    <i className={clsx(classes.likeIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>{t('thich')}</span>
                </div>
                <div className={clsx(classes.comment, classes.commonIcons)}>
                    <i className={clsx(classes.commentIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>{t('binhluan')}</span>
                </div>
                <div className={clsx(classes.share, classes.commonIcons)}>
                    <i className={clsx(classes.shareIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>{t('chiase')}</span>
                </div>
            </div>
        </header>
    )
}

export default Post
