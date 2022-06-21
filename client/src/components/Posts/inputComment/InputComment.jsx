import { useStyles } from '../post_card/CommentsStyle'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import EmojiModal from '../post_modal/EmojiModal';
import Gifs from '../post_gif/Gifs'
import MusicModal from '../post_modal/MusicModal'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { createComment } from '../../../redux/actions/commentAction';
import { Modal } from '@material-ui/core';
function InputComment({ post, onReply, setOnReply, children }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const [image, setImage] = useState()
    const [open, setOpen] = useState(false)
    const [music, setMusic] = useState(false)
    const [content, setContent] = useState('');
    const [dataSong, setDataSong] = useState()
    const { auth } = useSelector(state => state)

    const handleChangeImage = e => {
        const file = e.target.files[0];
        setImage(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!content.trim()) return
        dispatch(createComment(post, content, image, dataSong, auth, onReply))
        setContent('')
        setImage()
        setDataSong()
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* {children} */}
            <div id='giff' style={{ position: 'relative' }} className={classes.postContainer}>
                <div style={{ marginLeft: '24px' }} className={classes.postContainerLeft}>
                    <img style={{ width: '24px', height: '24px' }} className={classes.userAvatar} src={auth?.user?.avatar} alt="avatar" />
                    <div className={classes.onlineIcon}></div>
                </div>
                <div style={{ width: '90%' }} className={classes.postContainerRight}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p
                            style={{ display: 'flex', fontWeight: '500', marginRight: '8px', marginTop: '-2px', fontSize: '14px', padding: '1.5px', background: 'var(--text-hight-light)' }}
                        >{children}
                        </p>
                        <input
                            type='text'
                            style={{ width: 'auto' }}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className={classes.inputComment} />
                    </div>
                    <div className={classes.listIcons}>
                        <div style={{ position: 'relative' }}>
                            <i onClick={() => setMusic(!music)} className={classes.music}></i>
                            {music && (
                                <MusicModal setMusic={setMusic} setDataSong={setDataSong} />
                            )}
                        </div>
                        <EmojiModal setContent={setContent} />
                        <label style={{ cursor: 'pointer' }} id='update-cover'>
                            <i className={classes.gif}>
                                <input onChange={handleChangeImage} type='file' accept='image/* video/*' />
                            </i>
                        </label>
                        <i onClick={() => setOpen(true)} className={classes.emoji}></i>
                    </div>
                </div>
                <Modal open={open} onClose={() => setOpen(false)} >
                    <Gifs setImage={setImage} setOpen={setOpen} />
                </Modal>
            </div>
            {image && (
                <div style={{ marginBottom: '12px', paddingBottom: '14px', display: 'flex', justifyContent: 'space-between', margin: '0 16px' }}>
                    {/* Image or Gif */}
                    {typeof (image) === 'string' ? (
                        <img style={{ width: '200px', height: '120px', objectFit: 'cover' }}
                            src={image}
                            alt="image" />
                    ) : (
                        <img style={{ width: '200px', height: '120px', objectFit: 'cover' }}
                            src={image ? URL.createObjectURL(image) : null}
                            alt="image" />
                    )}

                </div>
            )}
            {dataSong && (
                <div style={{ marginBottom: '12px', paddingBottom: '14px', display: 'flex', justifyContent: 'space-between', margin: '0 16px' }}>

                    <div style={{ display: 'flex' }}>
                        <img style={{ width: '90px', height: '100px', borderRadius: '8px', objectFit: 'cover' }}
                            src={dataSong.avatar}
                            alt="image" />
                        <div style={{ marginLeft: '14px', fontSize: '14px' }}>
                            <p style={{ fontWeight: '500' }}>{dataSong.title}</p>
                            <span style={{ color: 'var(--secondary-text)' }}>{dataSong.creator}</span>
                        </div>
                    </div>
                    <div onClick={() => setImage(null)} className={classes.deleteListImages}>
                        <IconButton style={{ padding: '6px !important' }} aria-label="close" className={classes.closeButton}>
                            <CloseIcon fontSize='small' />
                        </IconButton>
                    </div>
                </div>
            )}
        </form>
    )
}

export default InputComment