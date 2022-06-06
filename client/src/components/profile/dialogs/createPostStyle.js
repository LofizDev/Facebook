import { makeStyles } from '@material-ui/core';
import post28Big from '../../../images/post28Big.jpg'
export const useStyles = makeStyles((theme) => ({
    createPostContainer: {
        color: 'var(--primary-text)',
        fontWeight: '500',
        backgroundColor: 'var(--bg-first)'
    },
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
        padding: '4px 6px',
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
        maxHeight: '378px',
        overflow: 'scroll',
        padding: '0 16px',
        width: '530px',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },
    contentNotScroll: {
        maxHeight: '378px',
        overflow: 'hidden',
        width: '530px',
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
    textArea: {
        fontFamily: 'Segoe UI Tahoma, Geneva, Verdana, sans-serif, sans-serif',
        fontSize: ' 23px',
        width: '100%',
        paddingTop: '60px',
        backgroundColor: 'transparent',
        height: '257px !important',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        '&::placeholder': {
            color: '#ddd',
        }
    },
    textArea1: {
        fontFamily: 'Segoe UI Tahoma, Geneva, Verdana, sans-serif, sans-serif',
        fontSize: ' 23px',
        width: '100%',
        backgroundColor: 'transparent',
        padding: '10px 0px',
        color: 'var(--secondary-text)',
    },
    textArea2: {
        fontFamily: 'Segoe UI Tahoma, Geneva, Verdana, sans-serif, sans-serif',
        fontSize: ' 23px',
        paddingLeft: '16px',
        width: '100%',
        backgroundColor: 'transparent',
        padding: '10px 0px',
        color: 'var(--secondary-text)',
    },
    cantSubmit: {
        textAlign: 'center',
        marginTop: '16px',
        color: 'var(--disabled-button-text)',
        padding: '8px 0',
        margin: '16px !important',
        cursor: 'not-allowed',
        fontWeight: '500',
        backgroundColor: "var(--disabled-button-bg)",

        borderRadius: '8px'
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        border: '1.3px solid var(--media-inner-border)',
        borderRadius: '12px',
        margin: '0 16px',
        // marginTop: '16px'
    },
    // Stream 
    frameCamera: {
        width: '100%',
        objectFit: 'cover',
    },
    VideoStream: {
        position: 'relative',
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
        position: 'relative',
        transform: 'translate:-50px',
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
    },
    wrapperTextEffect: {
        width: '32px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '8px',
        border: '2px solid transparent',
        backgroundColor: 'var(--bg-second)'
    },
    active: {
        border: '2px solid #fff',
    },
    activeDefault: {
        width: '32px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '8px',
        border: '2px solid transparent',
        backgroundColor: 'var(--bg-second)'
    },
    textEffect1: {
        width: '100% !important',
        overflow: 'hidden',
        height: '310px !important',
        backgroundSize: 'cover',
        backgroudAttachment: 'scroll',
        backgroundRepeat: 'no-repeat',
    },
    // Detail Reactions 
    peppleReaction: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px',
        justifyContent: 'space-between'
    },
    peppleReactionLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    smallReaction: {
        position: 'absolute',
        right: '-4px',
        bottom: '-6px',
        width: '20px',
        height: '20px'
    },
    follow: {
        display: 'flex',
        alignItems: 'center',
        height: '36px',
        padding: '7px 12px',
        borderRadius: '6px',
        cursor: 'pointer',
        backgroundColor: 'var(--secondary-button-background)',
        '&:hover': {
            backgroundColor: 'var(--hover-overlay-gray)'
        }
    },
    followIcon: {
        width: '16px',
        height: '16px',
        filter: 'var(--filter-primary-icon)',
    },
    text: {
        marginLeft: '6px',
        fontWeight: '500'
    },
}))