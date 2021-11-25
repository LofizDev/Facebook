import { makeStyles } from '@material-ui/core';
import filterIcon from '../../images/filterIcon.png'
import manaIcon from '../../images/settingProfileIcon.png'
import eventIcon from '../../images/eventLife.png'
export const useStyles = makeStyles((theme) => ({
    coverImage: {
        backgroundColor: 'pink',
        height: '350px',
        position: 'relative',
        width: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
        [theme.breakpoints.down('xs')]: {
            height: '180px'
        },
    },
    btnAddCoverImage: {
        position: 'absolute',
        right: '32px',
        bottom: '16px',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'flex-end',
        cursor: 'pointer',
        fontWeight: "500",
        borderRadius: '8px',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: '#F2F2F2'
        }
    },
    iconCamera: {
        fontSize: '18px',
        marginRight: '6px',
        [theme.breakpoints.down('md')]: {
            marginRight: '0',
        },
    },
    iconCameraCustom2: {
        color: 'black',
    },
    iconCameraCustom: {
        fontSize: '23px',
        marginRight: '0',
        filter: '(var(--primary-icon))',
    },
    textCover: {
        color: 'black',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    // Info user
    info: {
        display: 'flex',
        padding: '22px 30px 0',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            marginTop: '-50px',
        },
    },
    avartar: {
        width: '172px',
        height: '172px',
        border: '4px solid var(--bg-first)',
        borderRadius: "50%",
        position: 'relative',
        transform: 'translateY(-52px)',
    },
    changeAvartar: {
        right: '8px',
        bottom: '18px',
        transform: 'translateY(-47px)',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'var(--secondary-button-bg)'
    },
    userImg: {
        position: 'relative'
    },
    infoLeft: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    infoUser: {
        paddingLeft: '16px',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '0',
        },
    },
    fullname: {
        display: 'flex',
        alignItems: 'flex-end',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '-50px'
        },
    },
    follow: {
        fontSize: '18.0625px',
        color: 'var(--secondary-text)',
        fontWeight: '500',
        cursor: 'pointer'
    },
    followin: {
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    follower: {
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    // Add story icon, adjust Icon
    infoRight: {
        display: 'flex',
        marginTop: '24px',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            marginBottom: '20px'
        },
    },
    addStory: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        backgroundColor: 'var(--bg-icon-search)',
        color: 'white',
        height: '38px',
        fontWeight: '500',
        borderRadius: '8px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    adjustProfile: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        borderRadius: '8px',
        fontWeight: '500',
        height: '38px',
        backgroundColor: 'var(--button-bg)',
        marginLeft: '10px',
        '&:hover': {
            backgroundColor: 'var(--hover-icon-right-header)',
            cursor: 'pointer',
        }

    },
    iconAdd: {
        filter: 'invert(100%)',
        marginRight: '7px'
    },
    iconAdjust: {
        filter: 'var(--filter-primary-icon)',
        marginRight: '7px'
    },
    // Profle Tabs
    profileTabs: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 30px',
        marginTop: '-35px',
        borderTop: '1px solid #ced0d4',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    listTabs: {
        display: 'flex',
    },
    tabLink: {
        margin: '4px 0',
        padding: '16px 16px',
        cursor: 'pointer',
        color: 'var(--secondary-text)',
        fontWeight: '500',
        position: 'relative',
        '&:hover': {
            borderRadius: '8px',
            backgroundColor: 'var(--hover-bg-icon)'
        }
    },
    archive: {
        padding: '5px 13px',
        cursor: 'pointer',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--button-bg)',
    },
    // Profile bottom
    tilesFeedAbout: {
        backgroundColor: 'var(--bg-first)',
        borderRadius: '8px',
        padding: '15px 16px 9px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 2px var(--shadow2)'
    },
    label: {
        width: '100%',
        margin: '11px 0',
        fontWeight: '600',
        textAlign: 'center',
        padding: '7px 0',
        borderRadius: '8px',
        backgroundColor: 'var(--secondary-button-background)',
        cursor: 'pointer',
        transition: '.1s ease',
        '&:hover': {
            backgroundColor: 'var(--hover-icon-right-header)'
        }
    },
    tilesFeedPhotos: {
        backgroundColor: 'var(--bg-first)',
        borderRadius: '8px',
        padding: '16px 16px 20px',
        margin: '16px 0',
        boxShadow: '0 1px 2px var(--shadow2)'
    },
    photosTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    seeAll: {
        color: 'var(--blue-link)',
        fontWeight: '500',
        fontSize: '17px'
    },
    // Composer
    // ComposerTop
    composerTop: {
        borderRadius: '8px',
        backgroundColor: 'var(--bg-first)',
        padding: '12px 16px 10px',
        boxShadow: '0 1px 2px var(--shadow2)',
        marginBottom: '16px'
    },
    composerBottom: {
        borderRadius: '8px',
        padding: '8px 16px 0',
        backgroundColor: 'var(--bg-first)',
        boxShadow: '0 1px 2px var(--shadow2)'
    },
    createPost: {
        display: 'flex',
        borderBottom: '1px solid var(--secondary-button-bg)',
        paddingBottom: '12px',
        "& input::placeholder": {
            fontSize: "17.5px",
            fontWeight: '500',
            color: 'var(--secondary-text)'
        }
    },
    avartarCreatePost: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover'
    },
    inputCreatePost: {
        width: '100%',
        backgroundColor: 'var(--bg-input)',
        border: '0',
        outline: '0',
        borderRadius: '20px',
        marginLeft: '8px',
        padding: '12px'
    },
    typeCreate: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    typeCreateButton: {
        borderRadius: '8px',
        display: 'flex',
        padding: '8px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'var(--bg-input)'
        }
    },
    hiddenButton: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    live: {
        filter: '#f3425f',
    },
    eventIcon: {
        backgroundImage: `url(${eventIcon})`,
        backgroundPosition: '0px -148px',
        backgroundSize: '26px 714px',
        width: '20px',
        position: 'absolute',
        height: '20px',
    },
    iconType: {
        marginRight: '5px',
    },
    textType: {
        fontWeight: '500',
        color: 'var(--secondary-text)'
    },
    // Composer Bottom
    managerPost: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '8px',
        borderBottom: '1px solid var(--secondary-button-bg)',

    },
    buttomCommon: {
        padding: '8px 12px 6px',
        borderRadius: '8px',
        border: '0',
        cursor: "pointer",
        fontSize: '17px',
        fontWeight: '500',
        color: 'var(--primary-text)',
        outline: '0',
        backgroundColor: 'var(--secondary-button-background)',
        '&:hover': {
            backgroundColor: 'var(--hover-icon-right-header)'
        }
    },
    mana: {
        fontWeight: '500',
        marginLeft: '8px',
        bomdhadow: '0 1px 2px var(--shadow2)'
    },
    iconFilter: {
        backgroundImage: `url(${filterIcon})`,
        backgroundPosition: '0px -496px',
        backgroundSize: '26px 690px',
        width: '16px',
        height: '16px',
        filter: 'var(--filter-primary-icon)',
        position: 'absolute',
    },
    iconMana: {
        backgroundImage: `url(${manaIcon})`,
        backgroundPosition: '0px -658px',
        backgroundSize: '26px 690px',
        width: '16px',
        filter: 'var(--filter-primary-icon)',
        height: '16px',
        position: 'absolute',
    },
    textComposerBot: {
        paddingLeft: '21px',
    },
    viewMode: {
        padding: '4px 0 4px',
        justifyContent: 'space-around',
        display: 'flex',
        color: 'var(--secondary-text)'
    },
    titleViewMode: {
        padding: '5px 45px',
        borderRadius: '8px',
        '&:hover': {
            cursor: "pointer",
            backgroundColor: 'var(--bg-input)'
        },
        [theme.breakpoints.down('md')]: {
            padding: '5px 40px',
        },
    },
    // Custom scrollbar
    '@global': {
        '*::-webkit-scrollbar': {
            width: '9px',
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset #a6afe0',
            borderRadius: '10px',
        },
        '*::-webkit-scrollbar-thumb': {
            borderRadius: '7px',
            backgroundColor: 'var(--scroll-color)',
            '-webkit-box-shadow': 'inset 0px 0px 6px rgba(160, 200, 241, 0.5)',
        }
    }

}))