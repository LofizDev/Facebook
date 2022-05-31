import React from 'react'

function Resize1({ post }) {
    return (
        <div>
            {post.images.map(item => (
                <div
                    style={{ width: '100%', height: 'auto' }}
                    key={item.puclic_id}>
                    <img src={item.url} style={{ height: '100%', objectFit: 'cover' }} alt="content" />
                </div>
            ))}
        </div>
    )
}

export default Resize1