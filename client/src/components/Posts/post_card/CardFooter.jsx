import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useStyles } from '../style'
import clsx from 'clsx';
import FacebookEmoji from 'react-facebook-emoji';
function CardFooter() {
    const classes = useStyles();
    const { t } = useTranslation()
    const [isShow, setIsShow] = useState(false)
    const [currentColor, setCurrentColor] = useState('')
    const [currentReact, setCurrentReact] = useState('')

    const handleToggleReact = () => {
        if (currentReact !== '') {
            setCurrentColor('')
            setCurrentReact('')
        }
        if (currentReact === '') {
            setCurrentReact('like')
        }
    }
    useEffect(() => {
        if (currentReact === 'love') setCurrentColor('rgb(243, 62, 88)')
        if (currentReact === 'like') setCurrentColor('rgb(32, 120, 244)')
        if (currentReact === 'yay') setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 'haha') setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 'wow') setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 'sad') setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 'angry') setCurrentColor('rgb(233, 113, 15)')
    }, [currentReact])

    return (
        <div onMouseLeave={() => setIsShow(false)} style={{ position: 'relative', height: '100px' }}>
            <div >
                <div className={classes.interactPost}>
                    <div className={classes.countInterac}>34</div>
                    <div className={classes.countComment}>32 {t('binhluans')}</div>
                </div>

                <div id='can-custom' style={{ cursor: 'pointer' }} className={classes.reactIcons}>
                    <div onClick={handleToggleReact} onMouseEnter={() => setIsShow(true)} className={clsx(classes.like, classes.commonIcons)}>
                        {currentReact === ''
                            ? (<i className={clsx(classes.likeIcon, classes.commonIcon)}></i>)
                            : (<FacebookEmoji size='xs' type={currentReact} />)}

                        {currentReact === ''
                            ? (<span style={{ color: `${currentColor}`, }} className={classes.textCommon}>{t('thich')}</span>)
                            : (<span style={{ color: `${currentColor}`, marginTop: '1px' }} className={classes.textCommon}>{t(`${currentReact}`)}</span>)}

                    </div>
                    <div className={clsx(classes.comment, classes.commonIcons)}>
                        <i className={clsx(classes.commentIcon, classes.commonIcon)}></i>
                        <span className={classes.textCommon}>{t('binhluan')}</span>
                    </div>
                    <div className={clsx(classes.share, classes.commonIcons)}>
                        <i className={clsx(classes.shareIcon, classes.commonIcon)}></i>
                        <span className={classes.textCommon}>{t('chiase')}</span>
                    </div>
                </div>
            </div>

            <div style={{ postion: 'absolute', }} >
                <div onClick={() => setIsShow(false)} onMouseLeave={() => setIsShow(false)} id={isShow ? 'animated-reactions' : 'no-animate'} className='reactions-buttons'>
                    <div onClick={() => setCurrentReact('like')} className='icon-react'>
                        <FacebookEmoji size='sm' type="like" />
                    </div>
                    <div onClick={() => setCurrentReact('love')} className='icon-react'>
                        <FacebookEmoji size='sm' type="love" />
                    </div>
                    <div onClick={() => setCurrentReact('wow')} className='icon-react'>
                        <FacebookEmoji size='sm' type="wow" />
                    </div>
                    <div onClick={() => setCurrentReact('yay')} className='icon-react'>
                        <FacebookEmoji size='sm' type="yay" />
                    </div >
                    <div onClick={() => setCurrentReact('angry')} className='icon-react'>
                        <FacebookEmoji size='sm' type="angry" />
                    </div>
                    <div onClick={() => setCurrentReact('haha')} className='icon-react'>
                        <FacebookEmoji size='sm' type="haha" />
                    </div>
                    <div onClick={() => setCurrentReact('sad')} className='icon-react'>
                        <FacebookEmoji size='sm' type="sad" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFooter