import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import penIcon from '../../images/penIcon.png'
import addIcon from '../../images/addStoryIcon.png'
import { useStyles } from './style'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import clsx from 'clsx';
import MoreHoriz from '@material-ui/icons/MoreHoriz'
function Info({ user }) {
    const { t } = useTranslation()
    const [tabs, setTabs] = useState('post')
    const classes = useStyles();

    return (
        <>
            {/* Cover image */}
            <div className={classes.coverImage}>
                <img className={classes.coverImage} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/187720804_182424740430572_2886129554968541568_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=pvbHRS8tvyYAX8uPFBD&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-4.fna&oh=2783b6e8140c8b8918a4678db76abff0&oe=61BE988A" alt="cover" />
                <div className={classes.btnAddCoverImage}>
                    <PhotoCameraIcon className={clsx(classes.iconCamera, classes.iconCameraCustom2)} />
                    <p className={classes.textCover}>Thêm ảnh bìa</p>
                </div>
            </div>
            {/* Info */}
            <div className={classes.info}>
                <div className={classes.infoLeft}>
                    <div className={classes.userImg}>
                        <img className={classes.avartar} src={user.avatar} alt="avartar" />
                        <p className={classes.changeAvartar}>
                            <PhotoCameraIcon className={clsx(classes.iconCamera, classes.iconCameraCustom)} />
                        </p>
                    </div>
                    <div className={classes.infoUser}>
                        <div className={classes.fullname}>
                            <h1>{user.fullname}</h1>
                            <div class="tooltip" id='verify'>
                                <span class="tooltiptext">{t('tichxanh')}
                                </span>
                            </div>
                        </div>
                        <p className={classes.follow}>
                            <span className={classes.follower}>  {user.following.length} {t('dangtheodoi')}</span>
                            <span> • </span>
                            <span className={classes.followin}>{user.followers.length} {t('nguoitheodoi')}</span>
                        </p>
                    </div>
                </div>
                <div className={classes.infoRight}>
                    <div className={classes.addStory}>
                        <img className={classes.iconAdd} width='16px' height='16px' src={addIcon} alt="icon" />
                        <span>{t('themvaotin')}</span>
                    </div>
                    <div className={classes.adjustProfile}>
                        <img className={classes.iconAdjust} width='16px' height='16px' src={penIcon} alt="icon" />
                        <span>{t('chinhsua')}</span>
                    </div>
                </div>
            </div>
            <div className={classes.profileTabs}>
                <ul className={classes.listTabs}>
                    <li onClick={() => setTabs('post')} id={tabs === 'post' ? 'tabs-active' : ''} className={classes.tabLink}>{t('baiviet')}</li>
                    <li onClick={() => setTabs('about')} id={tabs === 'about' ? 'tabs-active' : ''} className={classes.tabLink}>{t('gioithieu')}</li>
                    <li onClick={() => setTabs('friends')} id={tabs === 'friends' ? 'tabs-active' : ''} className={classes.tabLink}>{t('banbe')}</li>
                    <li onClick={() => setTabs('photos')} id={tabs === 'photos' ? 'tabs-active' : ''} className={classes.tabLink}>{t('anh')}</li>
                    <li onClick={() => setTabs('archive')} id={tabs === 'archive' ? 'tabs-active' : ''} className={classes.tabLink}>{t('kholuutrutin')}</li>
                    <li onClick={() => setTabs('videos')} id={tabs === 'videos' ? 'tabs-active' : ''} className={classes.tabLink}>{t('video')}</li>
                    <li onClick={() => setTabs('seemore')} id={tabs === 'seemore' ? 'tabs-active' : ''} className={classes.tabLink}>{t('xemthem')}</li>
                </ul>
                <div className={classes.archive}>
                    <MoreHoriz />
                </div>
            </div>
        </>
    )
}

export default Info
