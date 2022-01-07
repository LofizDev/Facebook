import React from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next'
// Redux
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { useSelector, useDispatch } from 'react-redux'
function CreatePost() {
    const classes = useStyles()
    const { t } = useTranslation()
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const sliceUserName = auth.user.fullname.split(' ').slice(-1)

    return (
        <div className={classes.createPost}>
            <div className={classes.yourThink}>
                <img className={classes.avartar} src={auth.user.avatar} alt="avartar" />
                <input
                    onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}
                    className={classes.submit}
                    placeholder={`${sliceUserName} ${t('bandangnghigithe')}`}
                    type="text"
                />
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
                <div className={clsx(classes.typeCreate, classes.typeCreateFeel)}>
                    <i className={classes.iconFeel}></i>
                    <span className={classes.text}>{t('camxuc/hoatdong')}</span>
                </div>

            </div>
        </div>
    )
}

export default CreatePost
