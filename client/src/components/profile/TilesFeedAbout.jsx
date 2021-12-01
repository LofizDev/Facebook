import React, { useEffect, useState } from 'react'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import HobbiesBox from './dialogs/HobbiesBox'
import BioBox from './dialogs/BioBox'
import AdressBox from './dialogs/AdressBox'
import { join, follow } from '../../common/icon/Icons'
function TilesFeedAbout() {
    const classes = useStyles()
    const { t } = useTranslation()
    const [addBio, setAddBio] = useState(false)
    const [addHobbies, setAddHobbies] = useState(false)
    const [edit, setEdit] = useState(false)
    const [updateProfile, setUpdateProfile] = useState({ bio: "" })

    // Get value from input
    const handleChangeValue = (e) => {
        const value = e.target.value
        setUpdateProfile({ ...updateProfile, [e.target.name]: value })
    }


    console.log('update profile', updateProfile.bio);


    return (
        <>
            <div className={classes.tilesFeedAbout}>
                <h2 style={{ fontSize: '21.5px', marginBottom: '10px' }}> {t('gioithieu')} </h2>
                {/* Add Bio */}
                {addBio === false && (
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
                        <img className={classes.iconAboutProfile} src={follow} alt="icon" />
                        <span className={classes.titleInfo}>Có <label className={classes.followCount}>284</label> người theo dõi</span>
                    </div>
                </div>
                {/* Adjust Detail */}
                {edit && (<AdressBox setEdit={setEdit} />)}
                <span
                    onClick={() => setEdit(true)}
                    className={classes.label}>
                    {t('chinhsuachitiet')}
                </span>

                {/* Add Hobbies */}
                <span
                    onClick={() => setAddHobbies(true)}
                    className={classes.label}>
                    {t('themsothich')}
                </span>
                <span className={classes.label}> {t('chinhsuaphandangchuy')} </span>
            </div>

            {/* Overlay Add Hobbies */}
            {addHobbies && (
                <HobbiesBox setAddHobbies={setAddHobbies} />
            )}
        </>
    )
}

export default TilesFeedAbout
