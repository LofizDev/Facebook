import React from 'react'
import { useTranslation } from 'react-i18next'
import { useStyles } from '../style'
import clsx from 'clsx';

function CardFooter() {
    const { t } = useTranslation()
    const classes = useStyles();
    return (
        <div>
            <div className={classes.interactPost}>
                <div className={classes.countInterac}>34</div>
                <div className={classes.countComment}>32 {t('binhluans')}</div>
            </div>
            <div className={classes.reactIcons}>
                <div className={clsx(classes.like, classes.commonIcons)}>
                    <i className={clsx(classes.likeIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>{t('thich')}</span>
                </div>
                <div className={clsx(classes.comment, classes.commonIcons)}>
                    <i className={clsx(classes.commentIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>{t('binhluan')}</span>
                </div>
                <div className={clsx(classes.share, classes.commonIcons)}>
                    <i className={clsx(classes.shareIcon, classes.commonIcon)}></i>
                    <span className={classes.textCommon}>{t('chiase')}</span>
                </div>
            </div>
        </div>
    )
}

export default CardFooter