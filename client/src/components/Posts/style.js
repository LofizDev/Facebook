import { makeStyles } from '@material-ui/core';
import reacts from '../../images/reactIcon.png'
import savePost from '../../images/savePost.png'
import editPost from '../../images/editPost.png'
import removePost from '../../images/removePost.png'
import coppyPost from '../../images/coppyPost.png'
export const useStyles = makeStyles((theme) => ({
    postContainer: {
        maxWidth: '75%',
        margin: '0 auto',
        backgroundColor: 'var(--bg-first)',
        borderRadius: '8px',
        marginTop: '15.5px',
        padding: '10px 0 0',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100%',
        },
    },
    userPost: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 16px 0px',
        position: 'relative',
    },
    timeSince: {
        color: 'var(--secondary-text)',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        opacity: '.9',
        fontWeight: '500'
    },
    userPostRight: {
        cursor: 'pointer',
        width: '36px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '36px',
        borderRadius: '50%',
        '&:hover': {
            backgroundColor: 'var(--hover-bg-icon)'
        }
    },
    nameUser: {
        fontSize: '16px',
        fontWeight: '500',
        letterSpacing: '.3px',
    },
    userPostLeft: {
        display: 'flex',
        alignItems: 'center'
    },
    imgUser: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover'
    },
    textContent: {
        padding: '0px 16px 13px',
    },
    detailUser: {
        marginLeft: '8px'
    },
    contentPost: {
        marginTop: '6px',
        maxHeight: '630px',
        overflow: 'hidden'
    },
    interactPost: {
        padding: '20px 16px 15px',
        display: 'flex',
        borderBottom: '1px solid #ddd',
        justifyContent: 'space-between',
        color: 'var(--secondary-text)'
    },
    countInterac: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    reactIcons: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '94%',
        margin: '0 auto',
        padding: '4px 8px',
        borderBottom: '1px solid #ddd'
    },

    commonIcons: {
        display: 'flex',
        alignItems: 'center',
        color: 'var(--secondary-text)',
        padding: '7px 20px',
        cusor: 'pointer',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: 'var(--hover-bg-icon)'
        }
    },
    commonIcon: {
        backgroundImage: `url(${reacts})`,
        width: '18px',
        height: '18px',
    },
    tsIcon: {
        position: 'relative'
    },
    publicIcon: {
        width: '16px'
    },
    likeIcon: {
        backgroundPosition: '0px -354px',
        backgroundSize: '34px 772px',
        filter: 'invert(39%)'
    },
    commentIcon: {
        backgroundPosition: '0px -314px',
        backgroundSize: '34px 772px',
        filter: 'invert(39%)'
    },
    textCommon: {
        fontWeight: '500',
        marginLeft: '12px',
        fontSize: '16px',
        opacity: '.9',
    },
    shareIcon: {
        backgroundPosition: '0px -374px',
        backgroundSize: '34px 772px',
        filter: 'invert(39%)'
    },
    overLay: {
        position: 'fixed',
        left: '0',
        top: '0',
        backgroundColor: 'blue',
        width: '100%',
        height: '100%'
    },
    // Setting post
    settingBox: {
        position: 'absolute',
        right: '20px',
        top: '40px',
        width: '305px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: 'var(--bg-first)',
        zIndex: 9999,
        boxShadow: '0 12px 28px 0 var(--shadow2),0 2px 4px 0 var(--shadow1),inset 0 0 0 1px var(--shadow-inset)'
    },
    settingItem: {
        width: '96%',
        padding: '8px',
        display: 'flex',
        borderRadius: '8px',
        alignItems: 'center',
        margin: '2px 8px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'var(--hover-bg-icon)'
        }
    },
    settingTitle: {
        fontSize: '16px',
        fontWeight: '500'
    },
    settingIcon: {
        marginRight: '12px'
    },

    icon: {
        backgroundImage: `url(${savePost})`,
        backgroundPosition: ' 0px -328px',
        backgroundSize: ' 34px 1060px',
        width: ' 20px',
        filter: 'var(--filter-primary-icon)',
        height: ' 20px',
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
    },
    editIcon: {
        backgroundImage: `url(${editPost})`,
        backgroundPosition: ' 0px -702px',
        backgroundSize: ' 34px 1060px',
        width: ' 20px',
        filter: 'var(--filter-primary-icon)',
        height: ' 20px',
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
    },
    removeIcon: {
        backgroundImage: `url(${removePost})`,
        backgroundPosition: ' 0px -944px',
        backgroundSize: ' 34px 1060px',
        width: ' 20px',
        filter: 'var(--filter-primary-icon)',
        height: ' 20px',
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
    },
    coppyIcon: {
        backgroundImage: `url(${coppyPost})`,
        backgroundPosition: ' 0px -394px',
        backgroundSize: ' 34px 1060px',
        width: ' 20px',
        filter: 'var(--filter-primary-icon)',
        height: ' 20px',
        display: 'inline-block',
        backgroundRepeat: 'no-repeat',
    },
    unFollowIcon: {
        filter: 'var(--filter-primary-icon)',
    },

    subTitle: {
        fontSize: '13px',
        color: 'var(--secondary-text)'
    },
    line: {
        width: '90%',
        display: 'flex',
        marginBottom: '5px',
        height: '2px',
        justifyContent: 'center',
        backgroundColor: 'var(--secondary-button-bg)'
    }
}))