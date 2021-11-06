import React from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next'
function CreatePost() {
    const classes = useStyles();
    const{t} = useTranslation()
    return (
        <div className={classes.createPost}>
            <div className={classes.yourThink}>
                <img className={classes.avartar} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/100105408_150159316623450_6233873745942079200_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=t09i6CYGXaAAX-BXlt0&_nc_ht=scontent.fsgn2-3.fna&oh=44832c0c15ae76f18c9b2c80f0433c16&oe=618E26F9" alt="avartar" />
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
