import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    avatar: {
        objectFit: 'cover',
        borderRadius: '50%',
        width: '40px'
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px !important'
    },
    publicIcons: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '5px',
        padding: '5px 6px',
        borderRadius: '6px',
        width: '75px',
        backgroundColor: 'var(--bg-input)'
    },
    textPublc: {
        backgroundColor: 'var(--bg-input)',
        marginLeft: '3px',
        fontSize: '14px'
    },
    content: {
        maxHeight: '450px',
        overflow: 'scroll',
        width: '530px',
        padding: '0 16px !important',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },

    imagelist: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '8px',
    },
    deleteListImages: {
        position: 'absolute',
        right: '15px',
        top: '15px',
        zIndex: 999
    },
    image: {
        width: 'calc(50% - 4px)',
        margin: '2px',
        // flex: 1,
        objectFit: 'cover',
        height: '220px',
        [theme.breakpoints.down('md')]: {
            height: '150px',
        },
    },
    closeButton: {
        backgroundColor: 'white',
        padding: '4px',
        '&:hover': {
            backgroundColor: 'var(--hover-bg-icon)'
        }
    },
    submit: {
        textAlign: 'center',
        marginTop: '16px',
        padding: '8px 0',
        margin: '16px !important',
        cursor: 'pointer',
        color: '#fff',
        fontWeight: '500',
        backgroundColor: "var(--primary-button-background)",
        borderRadius: '8px'
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        padding: '12px',
        border: '1.3px solid var(--media-inner-border)',
        borderRadius: '12px',
        margin: '0 16px'
    },
    // Stream 
    frameCamera: {
        width: '100%',
        objectFit: 'cover',
        // height: '230px',
        // height: '50%'
        // height: 'auto'
    },
    VideoStream: {
        position: 'relative',
        // backgroundColor: 'red'
    },
    takePhotos: {
        position: 'absolute',
        bottom: '12px',
        left: '50%',
        cursor: 'pointer',
        opacity: '.8',
        color: 'white'
    },
    stream: {
        // padding: '0 16px !important',
        position: 'relative',
        transform:'translate:-50px',
    },
    // Icons
    iconsCommon: {
        fontSize: '26px',
        cursor: 'pointer',
        marginLeft: '14px'
    },
    iconCamera: {
        color: '#1771E6'
    },
    iconPhotos: {
        color: '#41B35D'
    },
    iconSatis: {
        color: '#EAB026'
    },
    iconLocation: {
        color: '#E84F3A'
    },
    iconGif: {
        color: '#1771E6'
    }

}))