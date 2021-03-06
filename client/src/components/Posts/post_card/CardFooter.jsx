import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useStyles } from '../style'
import clsx from 'clsx';
import FacebookEmoji from 'react-facebook-emoji';
import { useSelector, useDispatch } from 'react-redux'
import { likePost, unLikePost } from '../../../redux/actions/postAction';
import DetaiReactionsModal from '../post_modal/DetaiReactionsModal';


function CardFooter({ post }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const [isShow, setIsShow] = useState(false)
    const [detailReactionModal, setDetailReactionModal] = useState(false)
    const { auth } = useSelector(state => state)

    const [currentColor, setCurrentColor] = useState('')
    const [currentReact, setCurrentReact] = useState('')

    const [total, setTotal] = useState()
    const [sads, setSad] = useState(post.sads.length)
    const [wows, setWows] = useState(post.wows.length)
    const [yays, setYays] = useState(post.yays.length)
    const [likes, setLikes] = useState(post.likes.length)
    const [loves, setLoves] = useState(post.loves.length)
    const [hahas, setHahas] = useState(post.hahas.length)
    const [angries, setAngries] = useState(post.angrys.length)

    const [first, setFirst] = useState()
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [largestReactions, setLargestReactions] = useState([])

    // Check isReactioned
    useEffect(() => {
        if (post.likes.find(like => like._id === auth.user._id)) {
            setCurrentReact('like')
        }
        if (post.loves.find(like => like._id === auth.user._id)) {
            setCurrentReact('love')
        }
        if (post.hahas.find(like => like._id === auth.user._id)) {
            setCurrentReact('haha')
        }
        if (post.sads.find(like => like._id === auth.user._id)) {
            setCurrentReact('sad')
        }
        if (post.wows.find(like => like._id === auth.user._id)) {
            setCurrentReact('wow')
        }
        if (post.yays.find(like => like._id === auth.user._id)) {
            setCurrentReact('yay')
        }
        if (post.angrys.find(like => like._id === auth.user._id)) {
            setCurrentReact('angry')
        }
    }, [auth.user._id])

    // Get total Reactions
    useEffect(() => {
        setTotal(likes + loves + hahas + yays + angries + sads + wows)
    }, [post.likes, post.loves, post.hahas, post.yays, post.sads, post.angrys])




    useEffect(() => {
        if (currentReact === 'love') setCurrentColor('rgb(243, 62, 88)')
        if (currentReact === 'like') setCurrentColor('rgb(32, 120, 244)')
        if (currentReact === 'yay') setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 'haha') setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 'wow') setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 'sad') setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 'angry') setCurrentColor('rgb(233, 113, 15)')
        if (currentReact === '') setCurrentColor('')
    }, [currentReact])


    const handleReaction = async (str) => {
        await setCurrentReact(str)
        if (str !== '') dispatch(likePost({ post, auth, str }))
        if (str === '') dispatch(unLikePost({ post, auth, str }))

        if (str === '') {
            setTotal(total + 0)
        }
        if (currentReact == '' && str !== '') {
            setTotal(total + 1)
        }
    }

    // Find largest Reactions
    useEffect(() => {
        // const largestReactions = []
        largestReactions.push({ react: 'like', total: likes })
        largestReactions.push({ react: 'love', total: loves })
        largestReactions.push({ react: 'haha', total: hahas })
        largestReactions.push({ react: 'wow', total: wows })
        largestReactions.push({ react: 'yay', total: yays })
        largestReactions.push({ react: 'angry', total: angries })
        largestReactions.push({ react: 'sad', total: sads })

        var sorting = largestReactions?.sort(({ total: a }, { total: b }) => b - a).slice(0, 1).filter(item => item.total >= 1)
        setFirst(sorting.map(item => item.react))

    }, [])


    return (
        <div onMouseLeave={() => setIsShow(false)} style={{ position: 'relative', height: '100px' }}>
            <div >
                <div className={classes.interactPost}>
                    <div onClick={() => setDetailReactionModal(true)} className={classes.countInterac}>
                        {total > 0 && (
                            <>
                                {first !== undefined && (
                                    <FacebookEmoji size='xxs' type={first} />
                                )}
                                {/* {first !== currentReact && currentReact !== '' && (
                                    <div style={{ marginLeft: '2px' }}>
                                        <FacebookEmoji size='xxs' type={currentReact} />
                                    </div>
                                )} */}
                                <p className={classes.totalReactions} style={{ transform: 'translateY(-3px)', marginLeft: '8px' }}>
                                    {total}
                                </p>
                            </>
                        )}
                    </div>
                    {post.comments.length > 0 && (
                        <div className={classes.countComment}>{post.comments.length} {t('binhluans')}</div>
                    )}
                </div>

                <div id='can-custom' style={{ cursor: 'pointer' }} className={classes.reactIcons}>
                    {currentReact === '' && (
                        <div onClick={() => { handleReaction('like'); setIsShow(false) }} onMouseEnter={() => setIsShow(true)} className={clsx(classes.like, classes.commonIcons)}>
                            <i className={clsx(classes.likeIcon, classes.commonIcon)}></i>
                            <span style={{ color: `${currentColor}`, }} className={classes.textCommon}>{t('thich')}</span>

                        </div>
                    )}
                    {currentReact !== '' && (
                        <div onClick={() => { { handleReaction(''); setCurrentReact('') } }} onMouseEnter={() => setIsShow(true)} className={clsx(classes.like, classes.commonIcons)}>
                            <FacebookEmoji size='xs' type={currentReact} />
                            <span style={{ color: `${currentColor}`, marginTop: '1px' }} className={classes.textCommon}>{t(`${currentReact}`)}</span>
                        </div>
                    )}
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

            <div style={{ postion: 'absolute', visibility: isShow ? 'visible' : 'none' }} >
                <div onClick={() => setIsShow(false)} onMouseLeave={() => setIsShow(false)} id={isShow ? 'animated-reactions' : 'no-animate'} className='reactions-buttons'>
                    <div onClick={() => handleReaction('like')} className='icon-react'>
                        <FacebookEmoji size='sm' type="like" />
                    </div>
                    <div onClick={() => handleReaction('love')} className='icon-react'>
                        <FacebookEmoji size='sm' type="love" />
                    </div>
                    <div onClick={() => handleReaction('wow')} className='icon-react'>
                        <FacebookEmoji size='sm' type="wow" />
                    </div>
                    <div onClick={() => handleReaction('yay')} className='icon-react'>
                        <FacebookEmoji size='sm' type="yay" />
                    </div >
                    <div onClick={() => handleReaction('angry')} className='icon-react'>
                        <FacebookEmoji size='sm' type="angry" />
                    </div>
                    <div onClick={() => handleReaction('haha')} className='icon-react'>
                        <FacebookEmoji size='sm' type="haha" />
                    </div>
                    <div onClick={() => handleReaction('sad')} className='icon-react'>
                        <FacebookEmoji size='sm' type="sad" />
                    </div>
                </div>
            </div>
            <DetaiReactionsModal detailReactionModal={detailReactionModal} setDetailReactionModal={setDetailReactionModal} />
        </div>
    )
}

export default CardFooter