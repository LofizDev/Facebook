import { MoreHoriz, Public } from '@material-ui/icons';
import React from 'react'
import { useStyles } from '../Posts/style'
import { useTranslation } from 'react-i18next'
function Post() {
    const { t } = useTranslation()
    const classes = useStyles();
    return (
        <div style={{ marginTop: '16px' }}>
            <header className={classes.postProfileContainer} style={{ backgroundColor: 'var(--bg-first)', borderRadius: '8px', padding: '12px 0', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)', }}>
                {/* User Post */}
                <div className={classes.userPost}>
                    <div className={classes.userPostLeft}>
                        <img className={classes.imgUser} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/100105408_150159316623450_6233873745942079200_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=pwZcE0rcxTcAX8dP6Uh&_nc_ht=scontent.fsgn2-4.fna&oh=a28aa24d4598adfff5ce24df73e19df7&oe=61BE3C53" alt="avartar" />
                        <div className={classes.detailUser}>
                            <p className={classes.nameUser}>Khôi Lâm</p>
                            <p className={classes.timeSince}>
                                <span>12 phút  ·&nbsp; </span>
                                <Public className={classes.publicIcon} />
                            </p>
                        </div>
                    </div>
                    <div className={classes.userPostRight}>
                        <MoreHoriz />
                    </div>
                </div>
                {/* Content Post */}
                <div className={classes.contentPost}>
                    <p className={classes.textContent}>My love</p>
                    <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/239825201_1227237074370631_6444057016379111550_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=xdY3eSW6afMAX_1D4-R&_nc_ht=scontent.fsgn2-5.fna&oh=b99a3f39f6b5d946b9526cad46c579e4&oe=61A16E5B" alt="content" />
                </div>
                {/* Count Interact */}
                <div className={classes.interactPost}>
                    <div className={classes.countInterac}>34</div>
                    <div className={classes.countComment}>32 {t('binhluans')}</div>
                </div>
                {/* React Icons */}
                {/* <div className={classes.reactIcons}>
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
            </div> */}
            </header>
        </div>
    )
}

export default Post