import React, { useEffect, useState } from 'react'
import Resize1 from '../post_resize/Resize1';
import Resize2 from '../post_resize/Resize2';
import Resize3 from '../post_resize/Resize3';
import Resize4 from '../post_resize/Resize4';
import Resize5 from '../post_resize/Resize5';
import { useStyles } from '../style'

function CardBody({ post }) {
    const classes = useStyles();
    return (
        <div className={classes.contentPost}>
            <p className={classes.textContent}>{post.content}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', cursor: 'pointer' }}>
                {post.images.length === 1 && <Resize1 post={post} />}
                {post.images.length === 2 && <Resize2 post={post} />}
                {post.images.length === 3 && <Resize3 post={post} />}
                {post.images.length === 4 && <Resize4 post={post} />}
                {post.images.length > 4 && <Resize5 post={post} />}

            </div>
        </div>

    )
}

export default CardBody