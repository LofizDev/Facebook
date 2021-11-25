import React from 'react'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
function TilesFeedFriends() {
    const classes = useStyles()
    const { t } = useTranslation()
    return (
        <div className={classes.tilesFeedPhotos}>
            <div className={classes.photosTitle}>
                <h2 style={{ fontSize: '21.5px' }}> {t('banbe')} </h2>
                <span className={classes.seeAll}> {t('xemtatcabanbe')} </span>
            </div>
        </div>
    )
}

export default TilesFeedFriends

