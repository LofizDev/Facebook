import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import { Search } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';



function ProfileTabFollowers({ user }) {
    const { t } = useTranslation()
    const classes = useStyles()
    const [option, setOption] = useState('followers')
    let select

    // Select Follows
    option === 'followers'
        ? select = user.followers
        : select = user.following

    return (
        <div id='profile-bottom' className={classes.profileBottom}>
            <div className={classes.followers}>
                {/* Followers Title */}
                <h3 className={classes.followersTop}>
                    <h4 className={classes.title}>{t('nguoitheodoiprofile')}</h4>
                    <div className={classes.searching}>
                        <Search className={classes.searchIcon} fontSize='small' />
                        <input className={classes.searchInput} type="text" placeholder={t('timkiemprofile')} />
                    </div>
                </h3>
                {/* Followers Content */}
                <div className={classes.followersContent}>
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
                                    <Grid key={user._id} item xs={12} sm={6}>
                                        <Paper className={classes.paper}>
                                            <div className={classes.info}>
                                                <img className={classes.avatar} src={user.avatar} alt="avatar" />
                                                <p className={classes.fullname}>{user.fullname}</p>
                                            </div>
                                            <div className={classes.followBtn}>
                                                <div className={classes.button}>{t('theodoi')}</div>
                                            </div>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileTabFollowers