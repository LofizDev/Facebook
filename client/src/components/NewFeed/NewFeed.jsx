import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { Add } from '@material-ui/icons';
import CreatePost from '../CreatePost/CreatePost';
import MeetRoom from '../MeetRoom/MeetRoom';
import Post from '../Posts/Post';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
function NewFeed() {
    const { t } = useTranslation()
    const classes = useStyles();
    const { auth } = useSelector(state => state)

    return (
        <div className={classes.newFeed}>
            <div className={classes.containerFeed}>
                <Grid container spacing={1}>
                    {/* Create Your Story  */}
                    <Grid item xs>
                        <Paper className={clsx(classes.paper, classes.card)}>
                            <div className={classes.yourAvartar}>
                                <div className={classes.overLayy}></div>
                                <img className={classes.imgStories} src={auth.user.avatar} alt="avartar" />
                            </div>
                            <div className={classes.createStory}>
                                <i className={classes.createIcon}>
                                    <Add />
                                </i>
                                <p style={{ fontWeight: '500' }} classes={classes.title}>{t('taotin')}</p>
                            </div>
                        </Paper>
                    </Grid>
                    {/* List Your friend's stories*/}
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/240670656_1979013555583119_7801393993238196498_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=ZppHP2e1ZQ4AX-_usdh&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8mtQn4eqS8XQxZ5mswLw-9vCls0Tlig31DYHwKVduUyA&oe=61C7017D" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/258567190_2018400094977798_6917131705404610081_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QMa33Sv_JLsAX85fBJF&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT9oPlyx87okxujB4EhFcHNixdClIWLPMD5GqzfMU7yPog&oe=61C7605F" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Lee Thuy Duong
                                </div>
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/190971024_464748874796228_2247476436178691492_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=SARFNe9E3fkAX9A1tp9&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT_zIi2wd3iDxgnKfe8pr_BcrksGgi47gqEBWLmuEqMOXg&oe=61C76195" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/p320x320/169380886_440424943895288_7535477019471748670_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mc8RAP-tO_EAX9YhaGP&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8uwoBU89WlzICfxI5rlIOqOWqGXlz2A9UBKFmv6oAlZQ&oe=61E7AE76" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Nguyen Thi Thuy
                                </div>
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/240143537_972209746959145_1587190539251960045_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=ze077baly6kAX_SOqbA&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_9w92RohjQ8thCt9VVr6v9cpqgxjRzapVICrUKonNfTg&oe=61C75636" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/p720x720/262012894_1013931036120349_5031900395496811978_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mM7109PnnQ0AX911KmD&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT85TrKb7zta04ZWJ1oY1zU_TT7TNb6ILBiAR5_kAbHJYg&oe=61C7F824" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Thảo Vy
                                </div>
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/248946480_877764596461814_5047385650478399683_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=_15KcpBLmU0AX-ISgnH&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT80C9RyYyYGVAWP99taubcLUNCspbGH3pkO4_K5pxOCVA&oe=61C8CB88" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/236389881_827421624829445_1648697243805756187_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=_KEmDOiieOwAX_xKGo7&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT95X9w_mGv987H3nCZ7lHGxiaw0PaUf_uAUC3KdFjm8mQ&oe=61C7BF83" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Bích Vân
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            {/* Create Post */}
            <CreatePost />
            {/* Create Meet Room */}
            <MeetRoom />
            {/* Posts */}
            <Post />

        </div>
    )
}

export default NewFeed
