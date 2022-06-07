import React, { useEffect } from 'react'
import { useStyles } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/postAction';
import Facebook from './Sketelon';
import CardHeader from './post_card/CardHeader';
import CardBody from './post_card/CardBody';
import CardFooter from './post_card/CardFooter';
import Comments from './post_card/Comments';

function Post() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { auth, homePosts } = useSelector(state => state)

    // Get all posts when run app first time
    useEffect(() => {
        if (auth.token) dispatch(getPosts(auth.token))
    }, [dispatch, auth.token])


    return (
        <>
            {homePosts.loading
                ? <Facebook />
                :
                <>
                    {homePosts.posts.map(item => (
                        <div key={item._id} className={classes.postContainer}>
                            <CardHeader post={item} />
                            <CardBody post={item} />
                            <CardFooter post={item} />
                            <Comments post={item} />
                        </div>
                    ))}
                </>
            }
        </>

    )
}

export default Post
