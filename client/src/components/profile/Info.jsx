import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import penIcon from '../../images/penIcon.png'
import addIcon from '../../images/addStoryIcon.png'
import { useStyles } from './style'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import clsx from 'clsx';
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import Follow from '../../common/buttons/Follow'
import { checkImage } from '../../utils/imageUpload'
import Error from '../../common/buttons/Error'
import OptionsViewAvatarBox from './dialogs/OptionsViewAvatarBox'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUsers } from '../../redux/actions/profileAction'
import ChangesAvatarBox from './dialogs/ChangesAvatarBox'

function Info({ user }) {
    const { t } = useTranslation()
    const [tabs, setTabs] = useState('post')
    const classes = useStyles();
    const { auth, alert } = useSelector(state => state)
    const [isError, setIsError] = useState(false)
    const [selectionViewProfile, setSelectionViewProfile] = useState(false)
    const [viewProfile, setViewProfile] = useState(false)
    const [avatar, setAvatar] = useState('')

    // Redux
    const dispath = useDispatch()

    // Changes Avatar
    const handleChangeAvatar = (e) => {
        const file = e.target.files[0]
        // Check format image before setAvatar
        const err = checkImage(file)

        err ? setIsError(true) : setIsError(false)
        if (err) return dispath({ type: GLOBALTYPES.ALERT, payload: { error: err } })
        // setAvatar(file)
    }

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        // dispath(updateProfileUsers(avatar))
    }




    return (
        <>
            {/* Cover image */}
            <div className={classes.coverImage}>
                <img className={classes.coverImage} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/187720804_182424740430572_2886129554968541568_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=pvbHRS8tvyYAX8uPFBD&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-4.fna&oh=2783b6e8140c8b8918a4678db76abff0&oe=61BE988A" alt="cover" />
                {auth?.user?._id === user?._id && (
                    <label id='update-cover' className={classes.btnAddCoverImage}>
                        <PhotoCameraIcon className={clsx(classes.iconCamera, classes.iconCameraCustom2)} />
                        <p className={classes.textCover}>{t('themanhbia')}</p>
                        <input type="file" name='file' accept='image/*' />
                    </label>
                )}
            </div>
            {alert.error && isError && (
                <Error setIsError={setIsError} />
            )}
            {/* Info */}
            <div onSubmit={handleSubmit} className={classes.info}>
                <div style={{ position: 'relative' }} className={classes.infoLeft}>
                    <div className={classes.userImg}>
                        <img
                            onClick={() => setSelectionViewProfile(true)}
                            className={classes.avartar}
                            src={avatar ? URL.createObjectURL(avatar) : user.avatar}
                            alt="avartar" />
                        {auth?.user?._id === user?._id && (
                            <label onClick={() => setViewProfile(true)} id='update-avatar' className={classes.changeAvartar}>
                                <PhotoCameraIcon className={clsx(classes.iconCamera, classes.iconCameraCustom)} />
                                {/* <input onChange={handleChangeAvatar} type="file" name='file' accept='image/*' /> */}
                            </label>
                        )}
                    </div>
                    {/* Options View Profile */}
                    {selectionViewProfile &&
                        <OptionsViewAvatarBox
                            viewProfile={viewProfile}
                            setViewProfile={setViewProfile}
                            setSelectionViewProfile={setSelectionViewProfile
                            } />
                    }
                    {/* Changes Avatar Box */}
                    {viewProfile && (
                        <ChangesAvatarBox
                            avatar={avatar}
                            setAvatar={setAvatar}
                            viewProfile={viewProfile}
                            setViewProfile={setViewProfile}
                            handleChangeAvatar={handleChangeAvatar}
                            setSelectionViewProfile={setSelectionViewProfile} />
                    )}

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
                    {/* Authorization user  */}
                    {auth?.user?._id === user?._id
                        ?
                        <>
                            <div className={classes.addStory}>
                                <img className={classes.iconAdd} width='16px' height='16px' src={addIcon} alt="icon" />
                                <span>{t('themvaotin')}</span>
                            </div>
                            <div className={classes.adjustProfile}>
                                <img className={classes.iconAdjust} width='16px' height='16px' src={penIcon} alt="icon" />
                                <span>{t('chinhsua')}</span>
                            </div>
                        </>
                        :
                        <>
                            <Follow />
                        </>
                    }
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
