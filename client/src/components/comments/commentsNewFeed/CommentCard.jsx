import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useStyles } from '../CommentStyle'
import moment from 'moment'
import LikeAnimation from '../../like/LikeAnimation'
function CommentCard({ item }) {
    const classes = useStyles()
    const { t } = useTranslation()
    const [content, setContent] = useState('')
    const [setting, setSetting] = useState(false)
    const [readMore, setReadMore] = useState(false)

    const stylecard = {
        opacity: item._id ? 1 : 0.5,
        PointerEvent: item._id ? 'inherit' : 'none'
    }

    useEffect(() => {
        setContent(item.content)
    }, [content])



    return (
        <div className={classes.commentCard} style={stylecard}>
            <div onMouseEnter={() => setSetting(true)} onMouseLeave={() => setSetting(false)} style={{ display: 'flex' }}>
                <Link to={`profile/${item.user._id}`}>
                    <div className={classes.postCardLeft}>
                        <img src={item.user.avatar} alt="avatar" className={classes.avatar} />
                    </div>
                </Link>
                <div className={classes.postCardRight}>
                    <Link to={`profile/${item.user._id}`}>
                        <h5 className={classes.userName}>{item.user.fullname}</h5>
                    </Link>
                    <span>
                        {
                            content.length < 200 ? content :
                                readMore ? content + ' ' : content.slice(0, 200) + '...'
                        }
                    </span>
                    {content.length > 200 && (
                        <p style={{ fontWeight: '500', cursor: 'pointer' }} onClick={() => setReadMore(!readMore)}>
                            {readMore ? `${t('anbot')}` : `${t('xemthem')}`}
                        </p>
                    )}
                    <div className={classes.likeAnimation}>
                        <LikeAnimation style={{ width: '50px', height: '50px' }} />
                    </div>
                </div>

                <div className={setting ? classes.notVis : classes.visible} style={{ display: 'flex', alignItems: 'center', marginLeft: '8px', zIndex: 99, }}>
                    <div className={classes.iconSetting}>
                        <i className={classes.settingComment}></i>
                    </div>
                </div>

            </div>
            {item.image && (
                <img className={classes.imageContent} src={item.image} alt="content" />
            )}

            <div className={classes.action}>
                <p className={classes.userAction}>4 {t('like')}</p>
                <p className={classes.userAction}>{t('phanhoi')}</p>
                <p style={{ fontWeight: '400' }} className={classes.userAction}>{moment(item.createAt).fromNow()}</p>
            </div>
        </div>
    )
}

export default CommentCard