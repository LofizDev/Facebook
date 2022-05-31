import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Resize1 from '../post_resize/Resize1';
import Resize2 from '../post_resize/Resize2';
import Resize3 from '../post_resize/Resize3';
import Resize4 from '../post_resize/Resize4';
import Resize5 from '../post_resize/Resize5';
import { useStyles } from '../style'

function CardBody({ post }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const [readmore, setReadmore] = useState(false)


    return (
        <div className={classes.contentPost}>
            <div style={{ padding: '0 16px 4px' }}>
                {post.content.length < 200 ? post.content : readmore ? post.content + '' : post.content.slice(0, 200) + '.......'}
            </div>
            {post.content.length > 200 && (
                <span className={classes.textContent} style={{ fontWeight: '500', cursor: 'pointer' }} onClick={() => setReadmore(!readmore)}>
                    {readmore ? '' : t('xemthem')}
                </span>
            )}
            <Link to={`/post/${post._id}`}>
                <div style={{ display: 'flex', flexWrap: 'wrap', cursor: 'pointer' }}>
                    {post.images.length === 1 && <Resize1 post={post} />}
                    {post.images.length === 2 && <Resize2 post={post} />}
                    {post.images.length === 3 && <Resize3 post={post} />}
                    {post.images.length === 4 && <Resize4 post={post} />}
                    {post.images.length > 4 && <Resize5 post={post} />}
                </div>
            </Link>
        </div>

    )
}

export default CardBody