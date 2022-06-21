import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CommentCard from './CommentCard'

function CommentDisplay({ post }) {
    const { t } = useTranslation()
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState([])
    const [next, setNext] = useState(2)

    const [replyComments, setReplyComments] = useState([])

    useEffect(() => {
        const newCm = post.comments.filter(cm => !cm.reply)
        setComments(newCm)
        setShowComments(newCm.slice(newCm.length - next))
    }, [post.comments, next])

    useEffect(() => {
        const newRep = post.comments.filter(cm => cm.reply)
        setReplyComments(newRep)
    }, [post.comments])

    return (
        <div style={{ margin: '0 16px', paddingBottom: '14px' }}>
            {showComments.map((item, index) => (
                <CommentCard post={post} key={index} item={item} commentID={item._id}
                    replyCm={replyComments.filter(hey => hey.reply === item._id)}
                />
            ))}


            {
                comments.length - next > 0
                    ? <div style={{ cursor: 'pointer', fontWeight: '500', color: 'var(--secondary-text)' }}
                        onClick={() => setNext(next + 10)}>{t('xemthembinhluan')}</div>
                    : comments.length > 2 && <div style={{ cursor: 'pointer', fontWeight: '500', color: 'var(--secondary-text)' }}
                        onClick={() => setNext(2)}>{t('anbotbinhluan')}</div>
            }
        </div>
    )
}

export default CommentDisplay