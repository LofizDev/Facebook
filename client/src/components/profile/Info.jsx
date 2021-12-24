import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import penIcon from '../../images/penIcon.png'
import addIcon from '../../images/addStoryIcon.png'
import { useStyles } from './style'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import clsx from 'clsx';
import Follow from '../../common/buttons/Follow'
import Error from '../../common/buttons/Error'
import OptionsViewAvatarBox from './dialogs/OptionsViewAvatarBox'
import ChangesAvatarBox from './dialogs/ChangesAvatarBox'
import FollowersBox from './dialogs/FollowersBox'
import FollowingBox from './dialogs/FollowingBox'
import ProfileTabs from './tabs/ProfileTabs'

// Redux
import { useSelector } from 'react-redux'

function Info({ user, tabs, setTabs }) {
    const { t } = useTranslation()
    const classes = useStyles();
    const { auth, alert } = useSelector(state => state)
    const [isError, setIsError] = useState(false)
    const [selectionViewProfile, setSelectionViewProfile] = useState(false)
    const [viewProfile, setViewProfile] = useState(false)
    const [followersBox, setFollowersBox] = useState(false)
    const [followingBox, setFollowingBox] = useState(false)

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    console.log('re-render profile tabs');


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
            {/* Avatar */}
            <div onSubmit={handleSubmit} className={classes.info}>
                <div style={{ position: 'relative' }} className={classes.infoLeft}>
                    <div className={classes.userImg}>
                        {auth?.user?._id === user?._id
                            ? <img
                                onClick={() => setSelectionViewProfile(true)}
                                className={classes.avartar}
                                src={auth?.user?.avatar}
                                alt="avartar" />
                            : <img
                                onClick={() => setSelectionViewProfile(true)}
                                className={classes.avartar}
                                src={user?.avatar}
                                alt="avartar" />
                        }

                        {auth?.user?._id === user?._id && (
                            <label onClick={() => setViewProfile(true)} id='update-avatar' className={classes.changeAvartar}>
                                <PhotoCameraIcon className={clsx(classes.iconCamera, classes.iconCameraCustom)} />
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
                            viewProfile={viewProfile}
                            setViewProfile={setViewProfile}
                            setSelectionViewProfile={setSelectionViewProfile} />
                    )}

                    {/* Avatar - Followers, Following */}
                    <div className={classes.infoUser}>
                        <div className={classes.fullname}>
                            <h1>{user.fullname}</h1>
                            <div class="tooltip" id='verify'>
                                <span class="tooltiptext">{t('tichxanh')}
                                </span>
                            </div>
                        </div>
                        <p className={classes.follow}>
                            <span onClick={() => setFollowingBox(true)} className={classes.follower}> {user.following.length} {t('dangtheodoi')}</span>
                            <span> • </span>
                            <span onClick={() => setFollowersBox(true)} className={classes.followin}>{user.followers.length} {t('nguoitheodoi')}</span>
                        </p>
                    </div>
                    {/* Follow Box */}
                    <FollowersBox
                        followersBox={followersBox}
                        setFollowersBox={setFollowersBox}
                        currentInfoUser={user}
                    />
                    <FollowingBox
                        followingBox={followingBox}
                        currentInfoUser={user}
                        setFollowingBox={setFollowingBox} />
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
                        : <Follow user={user} />
                    }
                </div>
            </div>
            {/* Profile Tabs */}
            <ProfileTabs tabs={tabs} setTabs={setTabs} />
        </>
    )
}

export default Info
