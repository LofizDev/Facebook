import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useStyles } from '../CommentStyle'
import moment from 'moment'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LikeAnimation from '../../like/LikeAnimation'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
function CommentCard({ item, post }) {
    const classes = useStyles()
    const { t } = useTranslation()
    const [content, setContent] = useState('')
    const [setting, setSetting] = useState(false)
    const [modal, setModal] = useState(false)
    const [readMore, setReadMore] = useState(false)
    const [isPlay, setIsPlay] = useState(false)
    const [currentPlaySong, setCurrentPlaySong] = useState()
    const songRef = useRef()
    const stylecard = {
        opacity: item._id ? 1 : 0.5,
        PointerEvent: item._id ? 'inherit' : 'none'
    }

    useEffect(() => {
        setContent(item.content)
    }, [content])


    const handlePlaySong = async () => {
        await setIsPlay(!isPlay)
        await setCurrentPlaySong(item?.dataSong?.music)
    }

    const pause = async () => {
        await songRef.current.pause()
    }
    const play = async () => {
        await songRef.current.play()
    }

    const handleDelete = () => {

    }



    return (
        <div className={classes.commentCard} style={stylecard}>
            <div onMouseEnter={() => setSetting(true)} onMouseLeave={() => setSetting(false)} style={{ display: 'flex' }}>
                <Link to={`profile/${item.user._id}`}>
                    <div className={classes.postCardLeft}>
                        <img src={item.user.avatar} alt="avatar" className={classes.avatar} />
                    </div>
                </Link>
                <div className={classes.postCardRight}>
                    <Link to={`profile/${item.user._id}`}>
                        <h5 className={classes.userName}>{item.user.fullname}</h5>
                    </Link>
                    <span>
                        {
                            content.length < 200 ? content :
                                readMore ? content + ' ' : content.slice(0, 200) + '...'
                        }
                    </span>
                    {content.length > 200 && (
                        <p style={{ fontWeight: '500', cursor: 'pointer' }} onClick={() => setReadMore(!readMore)}>
                            {readMore ? `${t('anbot')}` : `${t('xemthem')}`}
                        </p>
                    )}
                    {/* Like */}
                    <div className={classes.likeAnimation}>
                        <LikeAnimation post={post} item={item} style={{ width: '50px', height: '50px' }} />
                    </div>
                </div>
                {/* Edit, Delete */}
                <div style={{ position: 'relative' }}>
                    <div
                        onClick={() => setModal(!modal)}
                        className={setting ? classes.notVis : classes.visible}
                        style={{ display: 'flex', alignItems: 'center', marginLeft: '8px', zIndex: 99 }}
                    >
                        <div className={classes.iconSetting}>
                            <i className={classes.settingComment}></i>
                        </div>

                        {/* Modal Setting */}
                    </div>
                    {modal && (
                        <>
                            <div className={classes.settingBox}>
                                <div className={classes.line}></div>
                                <div className={classes.settingItem}>
                                    <div className={classes.settingIcon}><i className={classes.editIcon}></i></div>
                                    <div className={classes.settingContent}>
                                        <h4 className={classes.settingTitle}>Edit post</h4>
                                    </div>
                                </div>
                                <div onClick={handleDelete} className={classes.settingItem}>
                                    <div className={classes.settingIcon}><i className={classes.removeIcon}></i></div>
                                    <div className={classes.settingContent}>
                                        <h4 className={classes.settingTitle}>Remove</h4>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* Image or Gif */}
            {item.image && (
                <img className={classes.imageContent} src={item.image} alt="content" />
            )}
            {/* Song */}
            {item.dataSong && (
                <div className={classes.song}>
                    <div>
                        <img className={classes.songAuthor} src={item.dataSong.avatar} alt="" />
                        {item.dataSong.creator.length > 13 ? (
                            <div className={classes.songCard}>
                                <MusicNoteIcon className={classes.musicIcon} />
                                <p className={classes.creator}>
                                    {item.dataSong.creator.slice(0, 13)}...
                                </p>
                            </div>
                        ) : (
                            <div className={classes.songCard}>
                                <MusicNoteIcon className={classes.musicIcon} />
                                <p style={{ textAlign: 'center' }} className={classes.creator}>
                                    {item.dataSong.creator}
                                </p>
                            </div>
                        )}
                    </div>
                    {/* Play song */}
                    <div onClick={handlePlaySong} className={classes.playSong}>
                        {isPlay
                            ? (<PauseIcon onClick={pause} className={classes.playIcon} />)
                            : (<PlayArrowIcon onClick={play} className={classes.playIcon} />)}
                    </div>
                </div>
            )}
            <audio
                onLoadedData={play}
                ref={songRef}
                style={{ visibility: 'hidden', position: 'fixed', top: 0, left: 0, width: '20px', zIndex: -1, left: '-300px', backgroundColor: 'red' }}
                src={currentPlaySong} controls />


            <div className={classes.action}>
                <p className={classes.userAction}>{item.likes.length} {t('like')}</p>
                <p className={classes.userAction}>{t('phanhoi')}</p>
                <p style={{ fontWeight: '400' }} className={classes.userAction}>{moment(item.createAt).fromNow()}</p>
            </div>
        </div>
    )
}

export default CommentCard