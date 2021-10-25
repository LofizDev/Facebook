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
function NewFeed() {
    const{t} = useTranslation()
    const classes = useStyles();
    return (
        <div className={classes.newFeed}>
            <div className={classes.containerFeed}>
                <Grid container spacing={1}>
                    {/* Create Your Story  */}
                    <Grid item xs>
                        <Paper className={clsx(classes.paper, classes.card)}>
                            <div className={classes.yourAvartar}>
                                <div className={classes.overLayy}></div>
                                <img className={classes.imgStories} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/96290490_141086394197409_1571069268458471424_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=CkhI-0KgB4IAX-TkBee&_nc_ht=scontent.fsgn2-4.fna&oh=7d039e13be1b84a04049cabdce865f1b&oe=619132A9" alt="avartar" />
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
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/245941471_1239327716494900_3122044371424074707_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=V260YCpqvncAX83G2hX&tn=75wmVns5i9UCQ6Tk&_nc_ht=scontent.fsgn2-1.fna&oh=305d30d316ada11379578fd72a76829c&oe=6191DA64" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/214319400_1172252693202403_6296818205049742_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=SLpt7hL6EhoAX-_q9fw&_nc_ht=scontent.fsgn2-2.fna&oh=421f442c778a5a6f91b49d1461480ca2&oe=6191AC0E" alt="avartar" />
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
