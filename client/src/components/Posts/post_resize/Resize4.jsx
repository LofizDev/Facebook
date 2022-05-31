import React from 'react'

function Resize4({ post }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {post.images.slice(0, 1).map(item => (
                <div
                    style={{ width: '100%', height: 'auto' }}
                    key={item.puclic_id}>
                    <img src={item.url} style={{ height: '100%', objectFit: 'cover' }} alt="content" />
                </div>
            ))}
            <div>
                <div style={{ display: 'flex' }}>
                    {post.images.slice(1, 4).map(item => (
                        <div
                            style={{ width: '33.3333%', height: '200px' }}
                            key={item.puclic_id}>
                            <img src={item.url} style={{ height: '100%', width: "100%", objectFit: 'cover' }} alt="content" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Resize4