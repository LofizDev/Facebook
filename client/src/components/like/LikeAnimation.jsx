import Lottie from 'react-lottie';
import React, { useState } from 'react'
import animationData from './animation.json';
function LikeAnimation() {
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
    // console.log(isLiked)

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