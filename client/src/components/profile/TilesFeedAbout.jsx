import React, { useEffect, useState } from 'react'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import HobbiesBox from './dialogs/HobbiesBox'

function TilesFeedAbout() {
    const classes = useStyles()
    const { t } = useTranslation()
    const [addBio, setAddBio] = useState(false)
    const [addHobbies, setAddHobbies] = useState(false)
    const [countDown, setCountDown] = useState(101)
    const [allowedToSave, setAllowedToSave] = useState(false)
    const [updateProfile, setUpdateProfile] = useState({ bio: "" })

    const handleChangeValue = (e) => {
        const value = e.target.value
        setUpdateProfile({ ...updateProfile, [e.target.name]: value })
    }

    // Check Allow To Save
    useEffect(() => {
        setCountDown(101 - updateProfile.bio.length)
        if (updateProfile.bio.length > 0 && updateProfile.bio.length < 102) {
            setAllowedToSave(true)
        } else {
            setAllowedToSave(false)
        }
    }, [updateProfile.bio])


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
                    <div className={classes.bio}>
                        <textarea
                            onChange={handleChangeValue}
                            name="bio"
                            className={classes.inputBio}
                            placeholder='Mô tả về bạn'>
                        </textarea>
                        <div className={classes.countDown}>
                            <span className={classes.textCountDown}>Còn {countDown} ký tự</span>
                            <div className={classes.btnGroupCountDown}>
                                <button
                                    id={allowedToSave ? 'allow-to-save' : 'cant-save'}
                                    style={{ opacity: allowedToSave ? '1' : '.6' }}
                                    className={classes.btnSave}>
                                    Lưu
                                </button>
                                <button onClick={() => setAddBio(false)} className={classes.btnCancel}>Hủy</button>
                            </div>
                        </div>

                    </div>
                )}


                <span className={classes.label}> {t('chinhsuachitiet')} </span>
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
