import { useState, useEffect } from 'react'
import { useStyles } from '../../components/profile/tabs/style'
import { Search } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { ProfileTooltip } from '../../components/profile/tooltip/ProfileTooltip';
import { useSelector, useDispatch } from 'react-redux'

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: 'var(--bg-first)',
        boxShadow: '0 0 8px 0 var(--media-inner-border)',
        fontSize: 16,
        color: 'var(--primary-color)',
        padding: '19px 16px',
        borderRadius: 8,
        minWidth: '350px'
    },
}))(Tooltip);



function ProfileAppFollowers({ user }) {
    const { t } = useTranslation()
    const classes = useStyles()
    const [option, setOption] = useState('followers')
    const [search, setSearch] = useState('')
    const [filterDataFollowing, setFilterDataFollowing] = useState([])
    const [filterDataFollowers, setFilterDtaFollowers] = useState([])
    const [followed, setFollowed] = useState(false)
    const [message, setMessage] = useState(false)
    const dispatch = useDispatch()
    // Redux
    const { auth, profile } = useSelector(state => state)
    let select


    // Select Follows
    option === 'followers'
        ? select = filterDataFollowers
        : select = filterDataFollowing


    // Handle Search users by name
    useEffect(() => {
        // Following
        const newFilterFollowing = user.following.filter((value) => {
            return value.fullname.toLowerCase().includes(search.toLowerCase())
        })
        setFilterDataFollowing(newFilterFollowing)

        // Followers
        const newFilterFollowers = user.followers.filter((value) => {
            return value.fullname.toLowerCase().includes(search.toLowerCase())
        })
        setFilterDtaFollowers(newFilterFollowers)
    }, [search])


    // Hanlde effect button followed
    useEffect(() => {
        if (option === 'followers') {
            setFollowed(true)
            setMessage(false)
        } else {
            setMessage(true)
            setFollowed(false)
        }
    }, [option])

    // Handle Follow,UnFollow
    const handleFollow = () => {
        setFollowed(true)
        // dispatch(follow({ users: profile.users, user, auth }))
    }

    // UnFollow
    const handleUnFollow = () => {
        setFollowed(false)
        // dispatch(unFollow({ users: profile.users, user, auth }))

    }


    return (
        <div className={classes.profileBottom}>
            <div className={classes.followers}>
                {/* Followers Title */}
                <h3 className={classes.followersTop}>
                    <h4 className={classes.title}>{t('nguoitheodoiprofile')}</h4>
                    <div className={classes.searching}>
                        <Search className={classes.searchIcon} fontSize='small' />
                        <input
                            onChange={e => setSearch(e.target.value)}
                            className={classes.searchInput}
                            type="text"
                            value={search}
                            placeholder={t('timkiemprofile')}
                        />
                    </div>
                </h3>
                {/* Followers Content */}
                <div id='customTooltip' className={classes.followersContent}>
                    <div className={classes.followSelect}>
                        <div
                            onClick={() => setOption('followers')}
                            id={option === 'followers' ? 'follow-active' : ''}
                            className={classes.followOption}>{t('nguoitheodoiprofile')}
                        </div>
                        <div
                            id={option === 'following' ? 'follow-active' : ''}
                            onClick={() => setOption('following')}
                            className={classes.followOption}>{t('dangtheodoiprofile')}
                        </div>
                    </div>
                    <div className={classes.listFollow}>
                        <div className={classes.root}>
                            <Grid container spacing={1}>
                                {select.map(user => (
                                    <Grid className={classes.tootipUser} key={user._id} item xs={12} sm={6}>
                                        <Paper className={classes.paper}>
                                            <Link to={`/profile/${user?._id}`}>
                                                <div className={classes.info}>
                                                    <LightTooltip title={<ProfileTooltip user={user} />} interactive>
                                                        <img className={classes.avatar} src={user.avatar} alt="avatar" />
                                                    </LightTooltip>
                                                    <p className={classes.fullname}>{user.fullname}</p>
                                                </div>
                                            </Link>
                                            {/* Follow, UnFollow  */}
                                            {auth?.user?._id !== user?._id && message && (
                                                <div onClick={handleUnFollow} className={classes.followBtn}>
                                                    <div className={classes.button}>Nh???n tin</div>
                                                </div>
                                            )}
                                            {auth?.user?._id !== user?._id && followed && (
                                                <div onClick={handleFollow} className={classes.followBtn}>
                                                    <div className={classes.button}>Theo d??i</div>
                                                </div>
                                            )}
                                        </Paper>
                                    </Grid>
                                ))}
                                {/* Err Can't found user */}
                                {select.length === 0 && search.length > 0 && (
                                    <div className={classes.errData}>{t('khongcoketquacho')}  {search}</div>
                                )}
                                {select.length === 0 && search.length == 0 && (
                                    <div className={classes.errData}>{t('khongcodulieu')}</div>
                                )}
                            </Grid>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileAppFollowers