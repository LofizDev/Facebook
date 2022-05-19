import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MoreHoriz, Public } from '@material-ui/icons';
import { useStyles } from '../style'
import { Link } from 'react-router-dom'
import moment from 'moment'
import unFollow from '../../../images/unFollowPost.png'
function CardHeader({ post }) {
    const { t } = useTranslation()
    const classes = useStyles();
    const [settingPost, setSettingPost] = useState(false)

    var now = moment.utc(new Date(post.createdAt)).fromNow();

    return (
        <div >
            <div className={classes.userPost}>
                <div className={classes.userPostLeft}>
                    <Link to={`profile/${post.user._id}`}>
                        <img className={classes.imgUser} src={post?.user?.avatar} alt="avartar" />
                    </Link>
                    <div className={classes.detailUser}>
                        <Link to={`profile/${post.user._id}`}>
                            <p className={classes.nameUser}>{post?.user?.fullname}</p>
                        </Link>
                        <p className={classes.timeSince}>
                            <span>{now}  ·&nbsp; </span>
                            <Public className={classes.publicIcon} />
                        </p>
                    </div>
                </div>
                <div onClick={() => setSettingPost(!settingPost)} className={classes.userPostRight}>
                    <MoreHoriz />
                </div>
                {settingPost && (
                    <>
                        <div onClick={() => setSettingPost(false)} className={settingPost ? 'overLayBody' : ''}></div>
                        <div className={classes.settingBox}>
                            <div className={classes.settingItem} style={{ margin: '8px 0' }} >
                                <div className={classes.settingIcon}><i className={classes.icon}></i></div>
                                <div className={classes.settingContent}>
                                    <h4 className={classes.settingTitle}>Save Post</h4>
                                    <p className={classes.subTitle}>Add this to your saved items.</p>
                                </div>
                            </div>
                            <div className={classes.line}></div>
                            <div className={classes.settingItem}>
                                <div className={classes.settingIcon}><i className={classes.editIcon}></i></div>
                                <div className={classes.settingContent}>
                                    <h4 className={classes.settingTitle}>Edit post</h4>
                                </div>
                            </div>
                            <div className={classes.settingItem}>
                                <div className={classes.settingIcon}><i className={classes.removeIcon}></i></div>
                                <div className={classes.settingContent}>
                                    <h4 className={classes.settingTitle}>Remove</h4>
                                </div>
                            </div>
                            <div className={classes.settingItem}>
                                <div className={classes.settingIcon}>
                                    <img className={classes.unFollowIcon} width='20px' height='20px' src={unFollow} alt='unFollow icon' />
                                </div>
                                <div className={classes.settingContent}>
                                    <h4 className={classes.settingTitle}>Unfollow Nguyen</h4>
                                    <p className={classes.subTitle}>Stop seeing posts from this person.</p>
                                </div>
                            </div>
                            <div className={classes.settingItem} style={{ marginBottom: '8px' }}>
                                <div className={classes.settingIcon}><i className={classes.coppyIcon}></i></div>
                                <div className={classes.settingContent}>
                                    <h4 className={classes.settingTitle}>Coppy Link</h4>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </div>
    )
}

export default CardHeader