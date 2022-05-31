import React, { useEffect, useState } from 'react'

function Resize5({ post }) {
    const [count, setCount] = useState()
    useEffect(() => {
        setCount(post.images.length - 5)
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                {post.images.slice(0, 2).map(item => (
                    <div
                        style={{ width: '50%', height: '300px' }}
                        key={item.puclic_id}>
                        <img src={item.url} style={{ height: '100%', height: '100%', objectFit: 'cover' }} alt="content" />
                    </div>
                ))}
            </div>
            <div>
                <div style={{ display: 'flex' }}>
                    {post.images.slice(2, 4).map(item => (
                        <div
                            style={{ width: '33.3333%', height: '180px' }}
                            key={item.puclic_id}>
                            <img src={item.url} style={{ height: '100%', width: "100%", objectFit: 'cover' }} alt="content" />
                        </div>
                    ))}
                    {post.images.slice(4, 5).map(item => (
                        <div
                            style={{ width: '33.3333%', height: '180px', position: 'relative' }}
                            key={item.puclic_id}>
                            {count > 0 && (
                                <div className='overlay-post-last-img'>+{count}</div>
                            )}
                            <img src={item.url} style={{ height: '100%', width: "100%", objectFit: 'cover' }} alt="content" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Resize5