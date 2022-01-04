import { useStyles } from './styleBox'
import { useTranslation } from 'react-i18next'

function OptionsViewAvatarBox({ setSelectionViewProfile, viewProfile, setViewProfile }) {
    const classes = useStyles();
    const { t } = useTranslation()
    return (
        <>
            <div style={{ display: viewProfile ? 'none' : '' }} className={classes.options}>
                <div className={classes.selectt}>
                    <div className={classes.icon}>
                        <i className={classes.viewIcon}></i>
                    </div>
                    <p className={classes.text}>{t('xemanhdaidien')}</p>
                </div>
                <div className={classes.selectt}>
                    <div className={classes.icon}>
                        <i className={classes.updateIcon}></i>
                    </div>
                    <p onClick={() => setViewProfile(true)} className={classes.text}>{t('capnhatanhdaidien')}</p>
                </div>
            </div>
            <div onClick={() => setSelectionViewProfile(false)} className={classes.overlay}> </div>
        </>
    )
}


export default OptionsViewAvatarBox
