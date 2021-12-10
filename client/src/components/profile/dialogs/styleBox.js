import { makeStyles } from '@material-ui/core';
import iconAvatar from '../../../images/viewProfileIcon.png'
export const useStyles = makeStyles((theme) => ({
    overlay: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        left: '0',
        top: '0',
    },
    options: {
        position: 'absolute',
        bottom: '-52px',
        left: '-54%',
        transform: 'translateX(50%)',
        backgroundColor: 'var(--bg-first)',
        padding: '8px',
        borderRadius: '8px',
        width: '345px',
        boxShadow: '0 12px 28px 0 var(--shadow2),0 2px 4px 0 var(--shadow1),inset 0 0 0 1px var(--shadow-inset)',
        zIndex: '9999',
        [theme.breakpoints.down('sm')]: {
            left: '-30%'
        },
    },
    text: {
        marginLeft: '32px',
        fontWeight: '500',
    },
    icon: {
        position: 'relative'
    },
    viewIcon: {
        backgroundImage: `url(${iconAvatar})`,
        backgroundPosition: '0 -323px',
        position: 'absolute',
        backgroundSize: '25px 365px',
        width: '20px',
        height: '20px'
    },
    updateIcon: {
        backgroundImage: `url(${iconAvatar})`,
        backgroundPosition: '0 -294px',
        position: 'absolute',
        backgroundSize: '26px 382px',
        width: '20px',
        height: '20px'
    },
    select: {
        padding: '7px',
        borderRadius: '8px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'var(--bg-second)'
        }
    },
    // Change avatar container
    changeAvatarContainer: {
        backgroundColor: 'var(--bg-first)',
        minWidth: '360px',
        padding: '20px 0',
    },
    title: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '20px',
        paddingBottom: '18px',
        color: 'var(--primary-text)',
        borderBottom: '1px solid var(--media-inner-border)',
    },
    upload: {
        margin: '16px',
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 0',
        borderRadius: '8px',
        backgroundColor: 'var(--bg-active)',
        color: 'var(--blue-link)',
        fontWeight: '500',
        cursor: 'pointer'
    },
    imgCustom: {
        minWidth: '400px',
        height: 'auto',
        objectFit: 'cover'
    },
    footerPreview: {
        padding: '16px',
    },
    closeIcon: {
        position: 'absolute',
        right: '13px',
        top: '10px',
        width: '35px',
        height: '35px',
        color: '#5E656D',
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'var(--filter-primary-icon)',
        borderRadius: '50%',
        backgroundColor: 'var(--secondary-button-background)',
        '&:hover': {
            backgroundColor: '#D8DADF',
        }
    },

    // Crop container

    cropContainer: {
        position: 'relative',
        width: '500px',
        background: '#333',
        height: 330,
        margin: '30px 30px',
        [theme.breakpoints.down('md')]: {
            height: 300,
            width: '420px',
        },
        [theme.breakpoints.down('xs')]: {
            height: 250,
            margin: '30px 20px',
            width: '380px',
        },

    },

    cropButton: {
        flexShrink: 0,
    },
    controls: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        color: 'var(--primary-text)',
        alignItems: 'stretch',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    },
    sliderContainer: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
    },
    sliderLabel: {
        [theme.breakpoints.down('xs')]: {
            minWidth: 65,
        },
    },
    slider: {
        padding: '22px 0px',
        marginLeft: 16,
        // color: 'red',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 16px',
        },
    },

}))