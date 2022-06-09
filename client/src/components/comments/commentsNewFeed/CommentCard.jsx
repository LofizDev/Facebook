import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useStyles } from '../CommentStyle'
import moment from 'moment'
function CommentCard({ item }) {
    const classes = useStyles()
    const { t } = useTranslation()
    const [content, setContent] = useState('')
    const [readMore, setReadMore] = useState(false)

    useEffect(() => {
        setContent(item.content)
    }, [content])

    const stylecard = {
        opacity: item._id ? 1 : 0.5,
        PointerEvent: item._id ? 'inherit' : 'none'
    }

    return (
        <div className={classes.commentCard} style={stylecard}>
            <div style={{ display: 'flex' }}>
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
                </div>
            </div>
            {item.image && (
                <img className={classes.imageContent} src={item.image} alt="content" />
            )}
            <div className={classes.action}>
                <p className={classes.userAction}>{t('like')}</p>
                <p className={classes.userAction}>{t('phanhoi')}</p>
                <p style={{ fontWeight: '400' }} className={classes.userAction}>{moment(item.createAt).fromNow()}</p>
            </div>
        </div>
    )
}

export default CommentCard