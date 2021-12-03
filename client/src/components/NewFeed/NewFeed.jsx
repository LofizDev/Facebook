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
    const{t} = useTranslation()
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
                                <p style={{fontWeight:'500'}} classes={classes.title}>{t('taotin')}</p>
                            </div>
                        </Paper>
                    </Grid>
                    {/* List Your friend's stories*/}
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/247681708_1024390061732822_7337010114735014611_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=y9niBdT26M4AX_Ak-eL&_nc_ht=scontent.fsgn2-3.fna&oh=38510e9699984672f707e4864eb5b3ae&oe=619AC718" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/167595297_897836477721515_3391070981035473584_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0kfRPg-k3aUAX9cQ_2w&_nc_ht=scontent.fsgn2-5.fna&oh=d5374bf2a2ed9b558813a34539c12410&oe=61993E4D" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Ngọc Thùy
                                </div>
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/117445240_948462838914724_2634762528636435074_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=7h1sq5vonjUAX8Igc5O&_nc_ht=scontent.fsgn2-2.fna&oh=8028a3b9668bdac34e4765f33f483319&oe=61B96B9E" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/139521075_1063665850727755_2492830634421674709_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=WhZYDi--Wg4AX-Qk0f_&_nc_ht=scontent.fsgn2-5.fna&oh=56c3952a8d039aa304d88063a7a9d009&oe=61B8F899" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Phạm Đào
                                </div>
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/72806079_2150936731879148_8676922527445942272_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=e3f864&_nc_ohc=lquUUh6knycAX9t3L4u&_nc_ht=scontent.fsgn2-2.fna&oh=136729ab346a5b85ebec4f5cfaffed12&oe=61984355" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/119979463_1199838413749765_602518048585378860_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hOQfxJCZWAMAX_0wGv4&_nc_ht=scontent.fsgn2-2.fna&oh=5b7ee46cd8d4e514db4855deb777ae96&oe=6192B2D8" alt="avartar" />
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
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/243120674_3021360468122911_5516460918778402540_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=grseOt36vXoAX_W98Oo&_nc_ht=scontent.fsgn2-2.fna&oh=1ac41e227f3da5a5e8935bcf2320e4ad&oe=619AD7AE" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/152174818_3221395501476885_2426669206923228359_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ACQsmO6886AAX8QxVOX&_nc_ht=scontent.fsgn2-3.fna&oh=18a3a6658420c2f2e57e4aa2d1e7234f&oe=619364B5" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Ái Nguyên
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            {/* Create Post */}
            <CreatePost/>
            {/* Create Meet Room */}
            <MeetRoom/>
            {/* Posts */}
            <Post/>
     
        </div>
    )
}

export default NewFeed
