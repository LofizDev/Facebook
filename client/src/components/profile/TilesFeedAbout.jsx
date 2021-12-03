import React, { useEffect, useState } from 'react'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import HobbiesBox from './dialogs/HobbiesBox'
import BioBox from './dialogs/BioBox'
import AdressBox from './dialogs/AdressBox'
import { join, follow, from, liveAT } from '../../common/icon/Icons'
//  Redux
import { useSelector } from 'react-redux'
function TilesFeedAbout({ user }) {
    const classes = useStyles()
    const { t } = useTranslation()
    const [addBio, setAddBio] = useState(false)
    const [addHobbies, setAddHobbies] = useState(false)
    const [edit, setEdit] = useState(false)
    const [updateProfile, setUpdateProfile] = useState({ bio: "" })
    const { auth } = useSelector(state => state)

    // Get value from input
    const handleChangeValue = (e) => {
        const value = e.target.value
        setUpdateProfile({ ...updateProfile, [e.target.name]: value })
    }


    return (
        <>
            <div className={classes.tilesFeedAbout}>
                <h2 style={{ fontSize: '21.5px', marginBottom: '10px' }}> {t('gioithieu')} </h2>
                {/* Add Bio */}
                <p style={{ textAlign: 'center', margin: '1px 0 -1px' }}>{user.story}</p>
                {/* text decoration */}
                {user.story && auth?.user?._id !== user?._id && (
                    <div className={classes.textDec}></div>
                )}
                {addBio === false && auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setAddBio(true)}
                        className={classes.label}>
                        {t('themtieusu')}
                    </span>
                )}
                {addBio && (
                    <BioBox
                        handleChangeValue={handleChangeValue}
                        setAddBio={setAddBio}
                        updateProfile={updateProfile.bio}
                        setUpdateProfile={setUpdateProfile}
                    />
                )}
                {/* List info */}
                <div className={classes.listInfo}>
                    <div className={classes.labelAboutInfo} >
                        <img className={classes.iconAboutProfile} src={join} alt="icon" />
                        <span className={classes.titleInfo}>  {t('thamgiavao')} Tháng 1 năm 2021</span>
                    </div>
                    <div className={classes.labelAboutInfo} >
                        <img className={classes.iconAboutProfile} src={liveAT} alt="icon" />
                        <span style={{ display: 'flex' }} className={classes.titleInfo}>
                            <p>Sống tại  &nbsp; </p>
                            <p className={classes.from}>{user.liveAt}</p>
                        </span>
                    </div>
                    <div className={classes.labelAboutInfo} >
                        <img className={classes.iconAboutProfile} src={from} alt="icon" />
                        <span style={{ display: 'flex' }} className={classes.titleInfo}>
                            <p>Đến từ  &nbsp; </p>
                            <p className={classes.from}>{user.from}</p>
                        </span>
                    </div>
                    <div className={classes.labelAboutInfo} >
                        <img className={classes.iconAboutProfile} src={follow} alt="icon" />
                        <span className={classes.titleInfo}>Có <label className={classes.followCount}>284</label> người theo dõi</span>
                    </div>
                </div>
                {/* Adjust Detail */}
                {edit && (<AdressBox setEdit={setEdit} />)}
                {auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setEdit(true)}
                        className={classes.label}>
                        {t('chinhsuachitiet')}
                    </span>
                )}

                {/* Add Hobbies */}
                {auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setAddHobbies(true)}
                        className={classes.label}>
                        {t('themsothich')}
                    </span>
                )}
                {/*Edit the notable part  */}
                {auth?.user?._id === user?._id && (
                    <span className={classes.label}> {t('chinhsuaphandangchuy')} </span>
                )}
            </div>

            {/* Overlay Add Hobbies */}
            {addHobbies && (
                <HobbiesBox setAddHobbies={setAddHobbies} />
            )}
        </>
    )
}

export default TilesFeedAbout
