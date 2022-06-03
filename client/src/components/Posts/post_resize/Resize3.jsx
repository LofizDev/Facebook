import React from 'react'

function Resize3({ post }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {post.images.slice(0, 1).map(item => (
                <div
                    style={{ width: '100%', height: '400px' }}
                    key={item.puclic_id}>
                    <img src={item.url} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="content" />
                </div>
            ))}
            <div style={{ height: '2px', backgroundColor: '#fff', width: '100%' }}></div>
            <div style={{ display: 'flex' }}>
                {post.images.slice(1, 3).map(item => (
                    <div
                        style={{ width: '50%', height: '240px', borderRight: '2px solid #fff' }}
                        key={item.puclic_id}>
                        <img src={item.url} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="content" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resize3