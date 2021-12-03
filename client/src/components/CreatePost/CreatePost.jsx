import React from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
function CreatePost() {
    const classes = useStyles()
    const{ t } = useTranslation()
    const { auth } = useSelector(state => state)
    return (
        <div className={classes.createPost}>
            <div className={classes.yourThink}>
                <img className={classes.avartar} src={auth.user.avatar} alt="avartar" />
                <input className={classes.submit} placeholder={`${'Khôi '}${t('bandangnghigithe')}`}  type="text" />
            </div>
            <div className={classes.listTypeCreate}>
                <div className={classes.typeCreate}>
                    <i className={classes.iconLive}></i>
                    <span className={classes.text}>{t('videotructiep')}</span>
                </div>
                <div className={classes.typeCreate}>
                    <i className={classes.iconImage}></i>
                    <span className={classes.text}>{t('anh/video')}</span>
                </div>
                <div className={ clsx(classes.typeCreate, classes.typeCreateFeel)}>
                    <i className={classes.iconFeel}></i>
                    <span className={classes.text}>{t('camxuc/hoatdong')}</span>
                </div>

            </div>
        </div>
    )
}

export default CreatePost
