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
    selectt: {
        padding: '7px ',
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
        padding: '20px 0 15px',
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
        width: '380px',
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
        padding: '0 16px',
    },
    closeIcon: {
        position: 'absolute',
        right: '13px',
        top: '10px',
        width: '35px',
        height: '35px',
        color: 'var(--primary-color)',
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
        margin: '30px 20px 0',
        [theme.breakpoints.down('md')]: {
            height: 300,
            width: '420px',
        },
        [theme.breakpoints.down('xs')]: {
            height: 250,
            margin: '20px 20px 0',
            width: '380px',
        },

    },

    cropButton: {
        flexShrink: 0,
    },
    controls: {
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        color: 'var(--primary-text)',
        alignItems: 'stretch',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    },
    sliderLabel: {
        marginRight: '20px',
        marginTop: '5px'
    },
    sliderContainer: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
    },
    // Hobbies Box
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
        overflow: 'hidden',
        borderRadius: '8px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [theme.breakpoints.down('md')]: {
            width: '90%',
            height: '600px'
        },
    },
    bannerHobbies: {
        backgroundColor: '#CAEDF9',
        height: '183px',
        [theme.breakpoints.down('md')]: {
            height: '143px',
        },
    },
    imgHobbies: {
        margin: '0 auto'
    },
    titleHobbies: {
        textAlign: 'center',
        margin: '7px 0 28px',
        padding: '0 20px 27px',
        borderBottom: '1px solid var(--media-inner-border)'
    },
    listHobbies: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '88%',
        margin: '15px auto',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100% !important'
        },
    },
    publicHobbiesText: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
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
        },
        [theme.breakpoints.down('md')]: {
            padding: '7px 8px'
        },
    },
    btnGroupCountDown: {
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            right: '20px'
        }
    },
    closeIcon: {
        position: 'absolute',
        right: '15px',
        top: '13px',
        width: '40px',
        color: 'var(--primary-color)',
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--secondary-button-background)',
        '&:hover': {
            backgroundColor: '#D8DADF',
        }
    },
    searchHobbies: {
        border: '1px solid var(--media-inner-border)',
        display: 'flex',
        alignItems: 'center',
        color: '#1877f2',
        cursor: 'pointer',
        marginTop: '4px',
        fontWeight: '500',
        padding: '7px 12px',
        backgroundColor: 'var(--primary-deemphasized-button-background)',
        borderRadius: '18px',
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
        color: 'var(--primary-text)',
        fontWeight: '500',
        backgroundColor: 'var(--secondary-button-background)'
    },
    recomendHobbies: {
        textAlign: 'center',
        fontSize: '13.8px',
        fontWeight: '500',
        color: 'var(--secondary-text)',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    alertSearchHobies: {
        display: 'flex',
        width: '94%',
        flexDirection: 'column',
        margin: '0 auto 7px',
    },
    descAlert: {
        fontSize: '14px',
        color: 'var(--secondary-text)',
        fontWeight: '500'
    },
    listFilteredHobbies: {
        display: 'flex',
        width: '95%',
        margin: '0 auto',
        flexWrap: 'wrap'
    },
    errSearchNotFound: {
        textAlign: 'center',
        marginTop: '30px',
        fontSize: '17pxs'
    },
    hobbieSingle: {
        border: '1px solid var(--media-inner-border)',
        margin: '9px 8px 0 0',
        padding: '7px 12px',
        fontWeight: 500,
        borderRadius: '18px',
        cursor: 'pointer',
        transition: '.1s ease',
        backgroundColor: 'transparent',
        '&:hover': {
            color: ' var(--color-primary)',
            backgroundColor: ' var(--primary-deemphasized-button-background)'
        }
    },
    // Looking for other hoobies
    searchOtherHobbie: {
        width: '95%',
        margin: '12px auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50px',
        height: '42px',
        backgroundColor: 'var(--bg-input)',
        padding: '0 8px',
    },
    iconSearchOtherHobbies: {
        color: 'var(--secondary-fill-icon)',
    },
    inputSearchOtherHobbies: {
        flex: '1',
        border: '0',
        backgroundColor: 'transparent',
        outline: '0',
        color: 'var(--primary-text)',
        paddingLeft: '6px',
        height: '100%'
    },
    // Adress
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
    },
    // Bio Box
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

}))