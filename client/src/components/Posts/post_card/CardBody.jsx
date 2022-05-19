import React from 'react'
import { useStyles } from '../style'
import { useTranslation } from 'react-i18next'

function CardBody({ post }) {
    const classes = useStyles();
    return (
        <div className={classes.contentPost}>
            <p className={classes.textContent}>{post.content}</p>
            {post.images.map(item => (
                <div key={item.puclic_id}>
                    <img src={item.url} alt="content" />
                </div>
            ))}
        </div>
    )
}

export default CardBody