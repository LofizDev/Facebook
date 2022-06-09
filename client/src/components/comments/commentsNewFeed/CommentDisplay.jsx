import React from 'react'
import CommentCard from './CommentCard'

function CommentDisplay({ post }) {
    return (
        <div style={{ margin: '0 16px', paddingBottom: '14px' }}>
            {post.comments.map((item, index) => (
                <CommentCard key={index} item={item} />
            ))}
        </div>
    )
}

export default CommentDisplay