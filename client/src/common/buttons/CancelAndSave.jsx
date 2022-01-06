import React from 'react'
import { useStyles } from './style'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import LoadingButton from '../../components/notify/loadingButton/LoadingButton'
function CancelAndSave({ setViewProfile }) {
    const classes = useStyles();
    const { alert } = useSelector(state => state)
    const { t } = useTranslation()
    return (
        <div className={classes.btnGroupCountDown}>
            {alert.loadingSecondary ? (
                <button
                    style={{ padding: '7px 17px', backgroundColor: '#E4E6EB' }}
                    type='submit'
                    className={classes.btnSave} >
                    {alert.success ? t('luu') : <LoadingButton />}
                </button>
            ) : (
                <button
                    style={{ padding: '7px 24px', backgroundColor: '#1b74e4', color: 'white' }}
                    type='submit'
                    className={classes.btnSave}>
                    {t('luu')}
                </button>
            )}
            <button type='submit' onClick={() => setViewProfile(false)} className={classes.btnCancel}>Hủy</button>
        </div>
    )
}

export default CancelAndSave
