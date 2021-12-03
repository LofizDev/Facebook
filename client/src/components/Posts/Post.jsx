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
                    <img className={classes.imgUser} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/p320x320/216424219_1172252689869070_5014391645576310433_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=OA-Pz5UtK3cAX8SyD3M&_nc_ht=scontent.fsgn2-4.fna&oh=dcdfe29fdd21017e772ee64d51424931&oe=619A5236" alt="avartar" />
                    <div className={classes.detailUser}>
                        <p className={classes.nameUser}>Nguyễn Thị Thùy Vân</p>
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
                <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/128651301_1035669653527375_1726257054267475373_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=7EITteAL5a8AX9T6IKo&_nc_ht=scontent.fsgn2-2.fna&oh=8429f38c2ac71336e117da7ae029d81f&oe=61BBD57D" alt="content" />
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
