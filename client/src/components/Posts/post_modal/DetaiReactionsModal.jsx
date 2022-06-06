import { Dialog, IconButton, } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import FacebookEmoji from 'react-facebook-emoji';
import { useStyles } from '../../profile/dialogs/createPostStyle';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import followIcon from '../../../images/followBtn.png'
import followedIcon from '../../../images/followedIcon.png'


const styles = (theme) => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    iconReaction: {
        padding: '12px 19px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'var(--hover-bg-icon)'
        },
        height: '100%'
    },
});
const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
    },
}))(MuiDialogContent);

const types = [{ name: 'like', value: 0 }, { name: 'love', value: 1 }, { name: 'haha', value: 2 }, { name: 'wow', value: 3 },
{ name: 'angry', value: 4 }, { name: 'yay', value: 5 }, { name: 'sad', value: 6 },]

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    const [currentReact, setCurrentReact] = useState(0)
    const [currentColor, setCurrentColor] = useState('')

    useEffect(() => {
        if (currentReact === 1) setCurrentColor('rgb(243, 62, 88)')
        if (currentReact === 0) setCurrentColor('rgb(32, 120, 244)')
        if (currentReact === 5) setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 2) setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 3) setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 6) setCurrentColor('rgb(247, 177, 37)')
        if (currentReact === 4) setCurrentColor('rgb(233, 113, 15)')
    }, [currentReact])
    return (
        <MuiDialogTitle id='customModalDetailReaction' disableTypography className={classes.root} {...other}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {types.map((item, index) => (
                        <li onClick={() => setCurrentReact(item.value)} style={{ borderBottom: index === currentReact ? `3.5px solid ${currentColor}` : '' }} className={classes.iconReaction}>
                            <FacebookEmoji size='xs' type={item.name} />
                        </li>
                    ))}
                </ul>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </div>
        </MuiDialogTitle>
    );
});


function DetaiReactionsModal({ detailReactionModal, setDetailReactionModal }) {
    const { t } = useTranslation()
    const classes = useStyles()
    const [followed, setFollowed] = useState(false)
    const handleFollow = () => {
        setFollowed(true)
        // dispatch(follow({ users: profile.users, user, auth }))
        //User is current user
    }

    // UnFollow
    const handleUnFollow = () => {
        setFollowed(false)
        // dispatch(unFollow({ users: profile.users, user, auth }))
    }

    return (
        <div id='customModalDetailReaction'>
            <Dialog open={detailReactionModal} onClose={() => setDetailReactionModal(false)}>
                <DialogTitle className={classes.createPostContainer} style={{ padding: '0 !important' }} id="customized-dialog-titlet" onClose={() => setDetailReactionModal(false)}>
                    {t('taobaiviet')}
                </DialogTitle>
                <DialogContent style={{ width: '550px', height: '350px', overflow: 'scroll', padding: '16px 15px' }} className={classes.createPostContainer} dividers>
                    <div style={{ height: '100%' }}>
                        <div className={classes.peppleReaction}>
                            <div className={classes.peppleReactionLeft}>
                                <div style={{ position: 'relative' }}>
                                    <img style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/284793610_2102672313246200_1815988490344449991_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tMMMBm6LY4wAX-VUDkh&tn=l67UZcix60mbbjxh&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT90gK0DGjGZ0D2dGBtj0rRKym3TXQkKth7YDRqIBB6SPQ&oe=62A2EBCD" alt="avatar" />
                                    <div className={classes.smallReaction}>
                                        <FacebookEmoji size='xxs' type='love' />
                                    </div>
                                </div>
                                <p style={{ marginLeft: '8px', fontSize: '16px' }}>Pham Duc Manh</p>
                            </div>
                            <div className={classes.peppleReactionRight}>
                                {
                                    followed
                                        ? <div onClick={handleUnFollow} className={classes.follow}>
                                            <img className={classes.followIcon} src={followedIcon} alt="button" />
                                            <p className={classes.text}>Đang theo dõi</p>
                                        </div>
                                        : <div onClick={handleFollow} className={classes.follow}>
                                            <img className={classes.followIcon} src={followIcon} alt="button" />
                                            <p className={classes.text}>Theo dõi</p>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={classes.peppleReaction}>
                            <div className={classes.peppleReactionLeft}>
                                <div style={{ position: 'relative' }}>
                                    <img style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/284793610_2102672313246200_1815988490344449991_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tMMMBm6LY4wAX-VUDkh&tn=l67UZcix60mbbjxh&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT90gK0DGjGZ0D2dGBtj0rRKym3TXQkKth7YDRqIBB6SPQ&oe=62A2EBCD" alt="avatar" />
                                    <div className={classes.smallReaction}>
                                        <FacebookEmoji size='xxs' type='love' />
                                    </div>
                                </div>
                                <p style={{ marginLeft: '8px', fontSize: '16px' }}>Pham Duc Manh</p>
                            </div>
                            <div className={classes.peppleReactionRight}>
                                {
                                    followed
                                        ? <div onClick={handleUnFollow} className={classes.follow}>
                                            <img className={classes.followIcon} src={followedIcon} alt="button" />
                                            <p className={classes.text}>Đang theo dõi</p>
                                        </div>
                                        : <div onClick={handleFollow} className={classes.follow}>
                                            <img className={classes.followIcon} src={followIcon} alt="button" />
                                            <p className={classes.text}>Theo dõi</p>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={classes.peppleReaction}>
                            <div className={classes.peppleReactionLeft}>
                                <div style={{ position: 'relative' }}>
                                    <img style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/284793610_2102672313246200_1815988490344449991_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tMMMBm6LY4wAX-VUDkh&tn=l67UZcix60mbbjxh&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT90gK0DGjGZ0D2dGBtj0rRKym3TXQkKth7YDRqIBB6SPQ&oe=62A2EBCD" alt="avatar" />
                                    <div className={classes.smallReaction}>
                                        <FacebookEmoji size='xxs' type='love' />
                                    </div>
                                </div>
                                <p style={{ marginLeft: '8px', fontSize: '16px' }}>Pham Duc Manh</p>
                            </div>
                            <div className={classes.peppleReactionRight}>
                                {
                                    followed
                                        ? <div onClick={handleUnFollow} className={classes.follow}>
                                            <img className={classes.followIcon} src={followedIcon} alt="button" />
                                            <p className={classes.text}>Đang theo dõi</p>
                                        </div>
                                        : <div onClick={handleFollow} className={classes.follow}>
                                            <img className={classes.followIcon} src={followIcon} alt="button" />
                                            <p className={classes.text}>Theo dõi</p>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={classes.peppleReaction}>
                            <div className={classes.peppleReactionLeft}>
                                <div style={{ position: 'relative' }}>
                                    <img style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/284793610_2102672313246200_1815988490344449991_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tMMMBm6LY4wAX-VUDkh&tn=l67UZcix60mbbjxh&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT90gK0DGjGZ0D2dGBtj0rRKym3TXQkKth7YDRqIBB6SPQ&oe=62A2EBCD" alt="avatar" />
                                    <div className={classes.smallReaction}>
                                        <FacebookEmoji size='xxs' type='love' />
                                    </div>
                                </div>
                                <p style={{ marginLeft: '8px', fontSize: '16px' }}>Pham Duc Manh</p>
                            </div>
                            <div className={classes.peppleReactionRight}>
                                {
                                    followed
                                        ? <div onClick={handleUnFollow} className={classes.follow}>
                                            <img className={classes.followIcon} src={followedIcon} alt="button" />
                                            <p className={classes.text}>Đang theo dõi</p>
                                        </div>
                                        : <div onClick={handleFollow} className={classes.follow}>
                                            <img className={classes.followIcon} src={followIcon} alt="button" />
                                            <p className={classes.text}>Theo dõi</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DetaiReactionsModal