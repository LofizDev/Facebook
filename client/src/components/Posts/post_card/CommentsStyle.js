import { makeStyles } from '@material-ui/core';
import reacts from '../../../images/posts/emoji.png'
export const useStyles = makeStyles((theme) => ({
    postContainer: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--bg-first)',
        borderRadius: '8px',
        margin: '15px 16px 9px',
        // padding: '10px 0',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
        },
    },
    postContainerRight: {
        width: '92.5%',
        backgroundColor: 'var(--bg-input-light)',
        height: '37px',
        paddingLeft: '16px',
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '40px',
        [theme.breakpoints.down('xs')]: {
            width: '92.5%',
        },
    },
    inputComment: {
        height: '38px',
        width: '75%',
        outline: 'none',
        borderRadius: '40px',
        border: 'none',
        backgroundColor: 'transparent'
    },
    userAvatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        objectFit: 'cover'
    },
    listIcons: {
        display: 'flex',
        cursor: 'pointer',
    },
    emoji: {
        backgroundImage: `url(${reacts})`,
        width: '16px',
        display: 'block',
        height: '16px',
        marginRight: '12px',
        backgroundPosition: ' 0px -538px',
        backgroundSize: ' 26px 820px',
        filter: 'var(--filter-secondary-icon)',
        backgroundRepeat: 'no-repeat',
    },
    music: {
        backgroundImage: `url(${reacts})`,
        width: '16px',
        display: 'block',
        height: '16px',
        marginRight: '12px',
        backgroundPosition: ' 0px -376px',
        backgroundSize: ' 26px 820px',
        filter: 'var(--filter-secondary-icon)',
        backgroundRepeat: 'no-repeat',
    },
    camera: {
        backgroundImage: `url(${reacts})`,
        width: '16px',
        display: 'block',
        height: '16px',
        filter: 'var(--filter-secondary-icon)',
        marginRight: '12px',
        backgroundPosition: ' 0px -520px',
        backgroundSize: ' 26px 820px',
        backgroundRepeat: 'no-repeat',
    },
    gif: {
        backgroundImage: `url(${reacts})`,
        width: '16px',
        marginRight: '12px',
        display: 'block',
        height: '16px',
        filter: 'var(--filter-secondary-icon)',
        backgroundPosition: ' 0px -466px',
        backgroundSize: ' 26px 820px',
        backgroundRepeat: 'no-repeat',
    },
    // Modal Gifs
    modalGif: {
        overflow: 'scroll',
        position: 'absolute',
        zIndex: 99,
        width: '380px',
        bottom: '60px',
        right: '0px',
        height: '400px',
        backgroundColor: 'var(--bg-first)',
        boxShadow: ' 0 12px 28px 0 var(--shadow2),0 2px 4px 0 var(--shadow1),inset 0 0 0 1px var(--shadow-inset)'
    },
    overlay: {
        position: 'fixed',
        width: '100%',
        top: '0',
        left: 0,
        zIndex: 9,
        height: '100%',
    }


}))