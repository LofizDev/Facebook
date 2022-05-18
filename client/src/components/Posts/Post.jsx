import { MoreHoriz, Public } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/postAction';
import Facebook from './Sketelon';

function Post() {
    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch()
    const { auth, homePosts } = useSelector(state => state)

    // Get all posts when run app first time
    useEffect(() => {
        if (auth.token) dispatch(getPosts(auth.token))
    }, [dispatch, auth.token])


    return (
        <>
            {homePosts.loading ? <Facebook /> : <header className={classes.postContainer}>
                {/* User Post */}
                <div className={classes.userPost}>
                    <div className={classes.userPostLeft}>
                        <img className={classes.imgUser} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/97240814_729559761118821_3489172087707271168_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=EbFJv_Og_H8AX8W2ol8&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT_yolOwFDMmkXCChaHmQmPEudhQ7b6EAj_p7fpsi6P-Iw&oe=61EA0E93" alt="avartar" />
                        <div className={classes.detailUser}>
                            <p className={classes.nameUser}>Diem Quynh</p>
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
                    <p className={classes.textContent}>I hate texting, I want to see u</p>
                    <img src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/89206459_678820319526099_8846878107085307904_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=puyfdVV7b5cAX-Tj4SW&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8hOXFIlVfMx9PC6orluWAdDXJoJVP231X4rvvjhXFqzw&oe=61E7B9F4" alt="content" />
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
            </header>}
        </>

    )
}

export default Post
