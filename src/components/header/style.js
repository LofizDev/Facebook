import { makeStyles } from '@material-ui/core';
import '../../App.css'
import menuIcon from '../../images/menuIcon.png'
import logout_contact from '../../images/logout_contact.png'
import dropdown from '../../images/dropdownIcon.png'
import setting from '../../images/settingIcon.png'
import help from '../../images/helpIcon.png'
import dark from '../../images/darkIcon.png'
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
        width:'24%',
        alignItems: 'center',
    },
    headerCenter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        width:'58%',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
        },
    },
    headerRight: {
        width: '100%',
        width:'24%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
    },
    iconItem: {
        padding: '8px 42px',
        margin:'0 4px',
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
        [theme.breakpoints.up('xl')]: {
            padding: '8px 51px',
            margin:'0 4px',
        },
    },
    iconItemRight: {
        width: '40px',
        height: '40px',
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 4px',
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
            backgroundColor: 'var(--bg-first)',
            cursor: 'pointer'
        },
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    text: {
        display: 'flex',
        marginRight: '8px',
        paddingLeft: '7px',
        alignItems: 'center',
    },
    iconMenu: {
        backgroundImage: `url(${menuIcon})`,
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
        height: '20px',
        filter: 'red',
        userSelect: 'none',
        display: 'inline-block',
        backgroundSize: '189px 139px',
        backgroundImage: `url(${dropdown})`,
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
        backgroundImage: `url(${logout_contact})`,
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
        position: 'fixed',
        right: '30px',
        backgroundColor:"#FFFFFF",
        border: '1px solid #E3E5E8',
        boxShadow: '2px 2.2px 5px 2px rgb(32 32 36 / 17%)',
        width: '374px',
        top: '56px',
        padding: '9px 10px',
        borderRadius: '12px',
        zIndex:'23'
    },
    boxUser: {
        display: 'flex',
        alignItems: 'center',
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
        display: 'flex',
        backgroundColor: 'var(--overlay-gray)',
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
        backgroundColor: 'var(--overlay-gray)',
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
        backgroundImage: `url(${setting})`,
        backgroundPosition: '-22px -438px',
        backgroundSize: '50px 576px',
    },
    iconFooterHelp: {
        backgroundImage: `url(${help})`,
        backgroundPosition: '0px -808px',
        backgroundSize: '26px 1522px',
    },
    iconFooterScreen: {
        backgroundImage: `url(${dark})`,
        backgroundPosition: '0px -138px',
        backgroundSize: '34px 276px;',
    },
    iconFooterLogout: {
        backgroundImage: `url(${logout_contact})`,
        backgroundPosition: '0px -236px',
        backgroundSize: '26px 496px',
    }
}));