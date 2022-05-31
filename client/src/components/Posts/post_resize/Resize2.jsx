import React from 'react'

function Resize2({ post }) {
    return (
        <div style={{ display: 'flex' }}>
            {post.images.map(item => (
                <div
                    style={{ width: '50%', height: 'auto' }}
                    key={item.puclic_id}>
                    <img src={item.url} style={{ height: '100%', objectFit: 'cover' }} alt="content" />
                </div>
            ))}
        </div>
    )
}

export default Resize2