import React from 'react'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
function TilesFeedAbout() {
    const classes = useStyles()
    const { t } = useTranslation()
    return (
        <div className={classes.tilesFeedAbout}>
            <h2 style={{ fontSize: '21.5px', marginBottom: '5px' }}> {t('gioithieu')} </h2>
            <span className={classes.label}> {t('themtieusu')} </span>
            <span className={classes.label}> {t('chinhsuachitiet')} </span>
            <span className={classes.label}> {t('themsothich')} </span>
            <span className={classes.label}> {t('chinhsuaphandangchuy')} </span>
        </div>
    )
}

export default TilesFeedAbout
