import React from 'react'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx';
import { VideosData } from './VideosData';

function ContentWatch() {
  const { t } = useTranslation()
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      {/* Avartar */}
      {VideosData.map(data => (
        <>
          <div className={classes.card}>
            <div className={classes.cardAvatar}>
              <div className={classes.image}>
                <img src={data.img} alt="avartar" />
              </div>
              <div className={classes.page}>
                <p className={classes.pageName}>{data.pageName} ·
                  <span className={classes.follow}> Theo dõi</span>
                </p>
                <p className={classes.timeSince}>27 Tháng 5, 2020</p>
              </div>
            </div>
            {/* Title Conten */}
            <div className={classes.cardTitle}>
              {data.title}
            </div>
            {/* Video Content */}
            <div className={classes.cardVideo}>
              {data.urlVideo}
            </div>


            {/* Like , Comments, Share */}
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
        </>
      ))}
    </div >
  )
}

export default ContentWatch
