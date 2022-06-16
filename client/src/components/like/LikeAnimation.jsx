import Lottie from 'react-lottie';
import React, { useState } from 'react'
import animationData from './animation.json';
import { useDispatch, useSelector } from 'react-redux';
import { likeComment, unLikeComment } from '../../redux/actions/commentAction';
import { useEffect } from 'react';
function LikeAnimation({ post, item }) {
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state)
    const [isLiked, setLikeState] = useState(false);
    const [animationState, setAnimationState] = useState({
        isStopped: true, isPaused: false,
        direction: -1,
    });

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    useEffect(() => {
        if (item.likes.find(like => like._id === auth.user._id)) {
            setAnimationState({ direction: 1 })
        }
    }, [item, auth.user._id])


    return (
        <div>
            <div onClick={() => {
                const reverseAnimation = -1;
                const normalAnimation = 1;
                setAnimationState({
                    ...animationState,
                    isStopped: false,
                    direction: animationState.direction === normalAnimation
                        ? reverseAnimation
                        : normalAnimation,
                })
                if (isLiked) {
                    dispatch(unLikeComment({ item, post, auth }))
                } else {
                    dispatch(likeComment({ item, post, auth }))
                }
                setLikeState(!isLiked);
            }}>
                <div className="animation">
                    <Lottie
                        options={defaultOptions}
                        width={135}
                        height={55}
                        resizeMode="center"
                        direction={animationState.direction}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused} />
                </div>
            </div>
            {/* <span>
                {isLiked ? 1 : 0}
            </span> */}
        </div>
    )
}

export default LikeAnimation