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
        },
        [theme.breakpoints.down('md')]: {
            padding: '7px 9px'
        },
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
    recomendHobbies: {
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
        objectFit: 'cover',
        position: 'relative',
        cursor: "pointer",
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
            cursor: 'pointer',
            backgroundColor: 'var(--hover-overlay-blue)'
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
        position: 'relative',
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
    // Edit Profile,Add Bio
    inputBio: {
        width: '100%',
        height: '85px',
        outline: 'none!important',
        borderColor: '#ccc',
        borderRadius: '6px',
        textAlign: 'center',
        fontWeight: '500',
        opacity: '.9',
        backgroundColor: 'var(--bg-second)',
        fontSize: '16px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif, sans-serif',
        paddingTop: '8px',
        color: 'var(--secondary-text)',
        '&:focus': {
            backgroundColor: 'var(--bg-first)',
            outline: 'none!important',
            color: 'var(--primary-text)',
            borderColor: 'var(--blue-link)'
        },
    },
    textDec: {
        width: '100%', height: '1px', backgroundColor: '#ced0d4', marginTop: '13px'
    },
    countDown: {
        float: 'right'
    },
    textCountDown: {
        color: 'var(--secondary-text)',
        marginBottom: '5px',
        opacity: '.8',
        fontSize: '13.5px',
        float: 'right'
    },
    btnSave: {
        float: 'right',
        marginLeft: '5px',
        padding: '7px 11px',
        borderRadius: '6px',
        border: '0',
        fontSize: '17px',
        fontWeight: '500',
        outline: '0',
        cursor: 'pointer',
        backgroundColor: 'var(--secondary-button-bg)'
    },
    btnCancel: {
        padding: '7px 11px',
        borderRadius: '6px',
        border: '0',
        outline: '0',
        fontSize: '17px',
        cursor: 'pointer',
        fontWeight: '500',
        backgroundColor: 'var(--secondary-button-bg)'
    },
    // Hobbies
    overlayHobbies: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--overlay-box)',
        opacity: '.85',
        zIndex: '999',
    },
    hobbies: {
        width: '550px',
        height: '640px',
        boxShadow: '0 12px 28px 0 var(--shadow2),0 2px 4px 0 var(--shadow1),inset 0 0 0 1px var(--shadow-inset)',
        backgroundColor: 'var(--bg-first)',
        zIndex: '9999',
        position: 'fixed',
        borderRadius: '8px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
    },
    bannerHobbies: {
        backgroundColor: '#CAEDF9',
        height: '183px'
    },
    imgHobbies: {
        margin: '0 auto'
    },
    listHobbies: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '88%',
        margin: '15px auto',
        justifyContent: 'center'
    },
    tagHobbie: {
        margin: '4.5px 4px',
        width: 'auto',
        border: '1px solid var(--media-inner-border)',
        padding: '7px 12px',
        fontWeight: '500',
        borderRadius: '18px',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'var(--bg-second)',
            cursor: 'pointer',
            transition: '.2s ease'
        }
    },
    closeIcon: {
        position: 'absolute',
        right: '15px',
        top: '13px',
        width: '40px',
        color: '#5E656D',
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--secondary-button-bg)',
        '&:hover': {
            backgroundColor: '#D8DADF',
        }
    },
    searchHobbies: {
        border: '1px solid var(--media-inner-border)',
        display: 'flex',
        alignItems: 'center',
        color: '#1877f2',
        marginTop: '4px',
        fontWeight: '500',
        padding: '7px 12px',
        backgroundColor: 'var(--primary-deemphasized-button-background)',
        borderRadius: '18px'
    },
    // Edit 
    editUserInfo: {
        width: '45%',
        height: '590px',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
    },
    labelAboutInfo: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0 5px'
    },
    titleInfo: {
        marginLeft: '12px',
    },
    from: {
        fontWeight: '500'
    },
    iconAboutProfile: {
        width: '20px',
        height: '20px',
        filter: 'var(--filter-placeholder-icon)'
    },
    followCount: {
        fontWeight: '500',
    },
    // Address
    editUserWrapper: {
        padding: '15px 28px'
    },
    descH6: {
        fontSize: '18px',
        fontWeight: '500'
    },
    descP: {
        color: 'var(-secondary-text)',
        marginTop: '2px'
    },
    country: {
        position: 'relative',
    },
    listSuggestions: {
        position: 'absolute',
        width: '100%',
        zIndex: '999',
        boxShadow: '0 12px 12px var(--shadow2),inset 0 0 0 1px var(--shadow-inset)',
        backgroundColor: 'var(--bg-search-hover)'
    },
    suggestionItem: {
        padding: '12px 11px',
        '&:hover': {
            borderRadius: '8px',
            cursor: 'pointer'
        }
    },
    titleCurrentLive: {
        marginTop: '25px',
    },
    currentLive: {
        position: 'relative'
    },
    select: {
        color: "var(--primary-text)",
        '&:before': {
            borderColor: 'var(--blue-link)',
            color: 'red'
        },
        '&:after': {
            borderColor: 'var(--blue-link)',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'var(--blue-link)',
        },
    },
    inputCurrentLive: {
        width: '100%',
        marginTop: '12px',
        multilineColor: {
            color: 'red'
        },
        '& .MuiInputBase-root': {
            color: 'var(--primary-text)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'var(--blue-link)',
            },
            '&:hover fieldset': {
                borderColor: 'var(--blue-link)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#1877f2',
            },
        },
    }
    ,
    // Custom scrollbar
    '@global': {
        '*::-webkit-scrollbar': {
            width: '8px',
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