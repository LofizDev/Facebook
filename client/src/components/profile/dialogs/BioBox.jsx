import React, { useState, useEffect } from 'react'
import { useStyles } from '../style'
import { useTranslation } from 'react-i18next'
function BioBox({ setAddBio, handleChangeValue, userData, setUserData, handleSubmit }) {
    const classes = useStyles()
    const { t } = useTranslation()
    const [countDown, setCountDown] = useState(101)
    const [allowedToSave, setAllowedToSave] = useState(false)


    // Check Allow To Save
    useEffect(() => {
        setCountDown(101 - userData.length)
        if (userData.length > 0 && setUserData.length < 102) {
            setAllowedToSave(true)
        } else {
            setAllowedToSave(false)
        }
    }, [userData])



    return (
        <form onSubmit={handleSubmit} className={classes.bio}>
            <textarea
                onChange={handleChangeValue}
                name="bio"
                value={userData}
                className={classes.inputBio}
                placeholder={t('motaveban')}>
            </textarea>
            <div className={classes.countDown}>
                <span className={classes.textCountDown}>  {t('con')} {countDown} {t('kytuconlai')}</span>
                <div className={classes.btnGroupCountDown}>
                    <button
                        id={allowedToSave ? 'allow-to-save' : 'cant-save'}
                        style={{ opacity: allowedToSave ? '1' : '.6' }}
                        className={classes.btnSave}>
                        {t('luu')}
                    </button>
                    <button onClick={() => setAddBio(false)} className={classes.btnCancel}>{t('huy')}</button>
                </div>
            </div>
        </form>
    )
}

export default BioBox
