import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { Add } from '@material-ui/icons';
import CreatePost from '../CreatePost/CreatePost';
function NewFeed() {
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
                                <p classes={classes.title}>Tạo tin</p>
                            </div>
                        </Paper>
                    </Grid>
                    {/* List Your friend's stories*/}
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t51.36329-10/p235x165/245946338_1263682664104769_6949278089034341571_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=ULNnndm3VzIAX8CcOWU&tn=75wmVns5i9UCQ6Tk&_nc_ht=scontent.fsgn2-2.fna&oh=4c5650c51403266d411fc8475e8d80c5&oe=6172AF5E" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/221192612_826498961572012_629616175358977808_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Dy_7oc-shOgAX9ReLRi&_nc_ht=scontent.fsgn2-4.fna&oh=0d8cf387545be1ffc4a302abb92b1724&oe=61919CB6" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Nguyen Ngoc Han
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
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/245940284_1479046192495651_6953155291225214752_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=5b7eaf&_nc_ohc=sFjCITT9RdkAX9SzL6S&_nc_ht=scontent.fsgn2-1.fna&oh=07f3b6a84821565c263fbff9e03cbdf6&oe=6192F626" alt="imageStory" />
                                </div>
                                <div className={classes.userImg}>
                                    <img style={{ objectFit: 'cover' }} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/119979463_1199838413749765_602518048585378860_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hOQfxJCZWAMAX_0wGv4&_nc_ht=scontent.fsgn2-2.fna&oh=5b7ee46cd8d4e514db4855deb777ae96&oe=6192B2D8" alt="avartar" />
                                </div>
                                <div className={classes.userNameStory}>
                                    Cà Mau Hôm Nay
                                </div>
                            </div>

                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <div className={classes.wrapperStories}>
                                <div className={classes.storyUser}>
                                    <div className={classes.overLay}></div>
                                    <img className={classes.imageStory} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/245791000_4417877228320500_721603458161283251_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VlVU-D17kjQAX9Mil_0&_nc_ht=scontent.fsgn2-2.fna&oh=676d312e6e63218af3338d5da0653764&oe=617228CB" alt="imageStory" />
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

        </div>
    )
}

export default NewFeed
