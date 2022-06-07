import { useStyles } from './CommentsStyle'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import EmojiModal from './EmojiModal';
import Gifs from '../post_gif/Gifs'
function Comments({ post }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const [modal, setModal] = useState(false)
    const [content, setContent] = useState('');
    const { auth } = useSelector(state => state)

    return (
        <>
            <div className={classes.postContainer}>
                <div className={classes.postContainerLeft}>
                    <img className={classes.userAvatar} src={auth?.user?.avatar} alt="avatar" />
                    <div className={classes.onlineIcon}></div>
                </div>
                <div className={classes.postContainerRight}>
                    <input placeholder={t('vietbinhluancongkhai')} className={classes.inputComment} />
                    <div className={classes.listIcons}>
                        <EmojiModal setContent={setContent} />
                        <i className={classes.gif}></i>
                        {/* <GifModal /> */}
                        <i onClick={() => setModal(true)} className={classes.emoji}></i>
                    </div>
                </div>

                {modal && (
                    <div className={classes.modalGif} >
                        <Gifs />
                    </div>
                )}
                {modal && (
                    <div onClick={() => setModal(false)} className={classes.overlay}>
                    </div>

                )}
            </div>
        </>
    )
}

export default Comments