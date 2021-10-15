import { makeStyles } from '@material-ui/core';
import '../../App.css'
export const useStyles = makeStyles((theme) => ({
    header: {
        padding: '5px 15px',
        backgroundColor: '#fff',
        display: 'flex',
        height: '57px',
        position:'fixed',
        top:'0',
        left:'0',
        width:'100%',
        borderBottom: '1px solid #E3E5E8',
        boxShadow: '0 0 6px 0 rgb(32 32 36 / 17%)',
        zIndex:999
    },
    container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
    },
    headerLeft: {
        display: 'flex',
        flex: 3,
        alignItems: 'center',
    },
    headerCenter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flex: 6,
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
        },
    },
    headerRight: {
        width: '100%',
        flex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
    },
    iconItem: {
        padding: '8px 47px',
        transition: 'all 0.1s',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#F2F2F2',
            borderRadius: '6px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '8px 35px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '8px 25px',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
            padding: '8px 8px',
        },
    },
    iconItemRight: {
        width: '40px',
        height: '40px',
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 5px',
        borderRadius: '50%',
        backgroundColor: 'var(--overlay-gray)',
        transition: '.1s ease',
        '&:hover': {
            backgroundColor: 'var(--hover-overlay-gray)',

        }
    },
    listIcons: {
        display: 'flex'
    },
    iconImage: {
        width: '25px',
        height: '25px',
    },
    iconImageContact: {
        width: '18px',
        height: '18px',
    },
    searchBar: {
        display: 'flex',
        backgroundColor: 'var(--bg-second)',
        padding: '9px 18px 9px 5px',
        alignItems: 'center',
        marginLeft: '10px',
        justifyContent: 'center',
        borderRadius: '28px',
        [theme.breakpoints.down('md')]: {
            padding: '0',
            width: '40px',
            height: '40px',
        },
    },
    searchInput: {
        border: '0',
        outline: '0',
        width: '180px',
        fontSize: '16px',
        backgroundColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    searchIcon: {
        fontSize: '23px',
        color: '#71777F',
        marginLeft: '10px',
        marginRight: '5px',
        [theme.breakpoints.down('md')]: {
            margin: '0'
        },
    },
    listIconsRight: {
        display: 'flex',
        alignItems: 'center',
    },
    imageUser: {
        width: '29px',
        height: '29px',
        objectFit: 'cover',
        borderRadius: '50%'
    },
    userIcon: {
        marginRight: '5px',
        display: 'flex',
        padding: '3.5px 4px 3.5px ',
        borderRadius: '17px',
        transition: 'all 0.1s',
        '&:hover': {
            // backgroundColor: '#F2F2F2',
            backgroundColor: 'var(--bg-first)',
            cursor: 'pointer'
        },
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    text: {
        display: 'flex',
        marginRight: '10px',
        paddingLeft: '7px',
        alignItems: 'center',
    },
    iconMenu: {
        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/K75psRNo_n5.png)',
        backgroundPosition: '-44px -132px',
        backgroundSize: '190px 212px',
        width: '20px',
        height: '20px',
    },
    iconMn: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    iconItemRightDropdown: {
        width: '20px',
        // filter: 'invert(90%)',
        height: '20px',
        filter: 'red',
        userSelect: 'none',
        display: 'inline-block',
        backgroundSize: '189px 139px',
        backgroundImage: 'url(https://www.facebook.com/rsrc.php/v3/yp/r/8ohE3S_aSDG.png)',
        backgroundRepeat: ' no-repeat',
        backgroundPosition: '-63px -88px',
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '-9.5px',
            borderRadius: '50%',
            right: '-9.3px',
            width: '10px',
            height: '10.8px',
            backgroundColor: '#f02849',
        },
    },
    iconItemMobile: {
        display: 'none !important',
        [theme.breakpoints.down('xs')]: {
            display: 'block !important',
        },
    },
    iconContact: {
        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Xr6MLEZDZKD.png)',
        backgroundPosition: '0px -214px',
        backgroundSize: '26px 496px',
        width: '20px',
        height: '20px',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        position: 'relative',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    },
    boxSetting: {
        position: 'absolute',
        right: '30px',
        backgroundColor:"#FFFFFF",
        border: '1px solid #E3E5E8',
        boxShadow: '2px 2.2px 5px 2px rgb(32 32 36 / 17%)',
        width: '374px',
        top: '56px',
        padding: '9px 10px',
        borderRadius: '12px',
    },
    boxUser: {
        display: 'flex',
        alignItems: 'center',
        // padding: '10px 0',
        borderBottom: '1.3px solid #ccc',
        padding: '10px 10px',
        '&:hover': {
            borderRadius:'9px',
            backgroundColor:'var(--hover-bg-icon)'
        }
    },
    boxInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '15px'
    },
    boxUserImg: {
        width: '55px',
        height: '55px',
        borderRadius: '50%'
    },
    listIconSetting: {
        padding: '10px 10px',
        borderRadius:'9px',
        margin:'15px 0',
        '&:hover': {
            backgroundColor:'var(--hover-bg-icon)'
        }
    },
    iconSetting: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'var(--bg-icon)',
        display: 'flex',
    },
    textBoxContact: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '50px'
    },
    // Custom box setting
    itemSettingFooter: {
        padding: '7px 10px',
        borderRadius:'9px',
        display: "flex",
        alignItems: 'center',
        cursor:'pointer',
        '&:hover': {
            backgroundColor:'var(--hover-bg-icon)'
        }
    },
    iconWrapperFooter: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'var(--bg-icon)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '15px'
    },
    iconFooter: {
        width: '20px',
        height: '20px',
    },
    iconFooterSetting: {
        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/tBr7iKHYsZc.png)',
        backgroundPosition: '-22px -438px',
        backgroundSize: '50px 576px',
    },
    iconFooterHelp: {
        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/oi5hr35Fqqg.png)',
        backgroundPosition: '0px -808px',
        backgroundSize: '26px 1522px',
    },
    iconFooterScreen: {
        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/Xqj6PfAeyFb.png)',
        backgroundPosition: '0px -138px',
        backgroundSize: '34px 276px;',
    },
    iconFooterLogout: {
        backgroundImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/Xr6MLEZDZKD.png)',
        backgroundPosition: '0px -236px',
        backgroundSize: '26px 496px',
    }
}));