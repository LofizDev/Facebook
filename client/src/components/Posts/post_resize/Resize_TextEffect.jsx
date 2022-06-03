import React, { useEffect, useState } from 'react'
import { imageEffectData } from '../../profile/data/TextEffectData'
function Resize_TextEffect({ post }) {
    const [currentImage, setCurrentImage] = useState()

    useEffect(() => {
        const filterCurrentImg = imageEffectData.filter(item => item.value === post.optionTextEffect)
        setCurrentImage(filterCurrentImg.map(item => item.bigImage))
    }, [post])

    return (
        <div style={{
            backgroundImage: `url(${currentImage})`,
        }} className='bg-textEffect-post' >
            {post.content}
        </div >
    )
}

export default Resize_TextEffect
