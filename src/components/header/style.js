import { makeStyles } from '@material-ui/core';
import '../../App.css'
import menuIcon from '../../images/menuIcon.png'
import dropdown from '../../images/dropdownIcon.png'
export const useStyles = makeStyles((theme) => ({
    header: {
        padding: '5px 15px',
        backgroundColor: 'var(--bg-first)',
        display: 'flex',
        height: '57px',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        borderBottom: '1px solid var(--border-header)',
        boxShadow: '0 0 6px 0 rgb(32 32 36 / 17%)',
        zIndex: 999
    },
    container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
    },
    headerLeft: {
        display: 'flex',
        width: '24%',
        alignItems: 'center',
    },
    headerCenter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        width: '58%',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
        },
    },
    headerRight: {
        width: '100%',
        width: '24%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
    },
    iconItem: {
        padding: '8px 42px',
        margin: '0 4px',
        transition: 'all 0.1s',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'var(--hover-bg-icon)',
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
            margin: '0 4px',
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
        backgroundColor: 'var(--button-bg)',
        transition: '.1s ease',
        '&:hover': {
            backgroundColor: 'var(--hover-icon-right-header)',
        }
    },
    iconItemFill: {
        fill: 'var(--fill-icon)',
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
        backgroundColor: 'var(--bg-input)',
        padding: '8.5px 18px 8.5px 5px',
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
        width: '175px',
        letterSpacing: '.3px',
        fontSize: '15px',
        backgroundColor: 'transparent',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        '&::placeholder': {
            color: 'var(--color-input)'
        }
    },
    searchIcon: {
        fontSize: '23px',
        color: 'var(--color-input)',
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
            backgroundColor: 'var(--bg-second)',
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
    iconItemMenu: {
        transition: '.1s ease',
        backgroundColor: 'var(--button-bg)',        
        '&:hover': {
            backgroundColor: 'var(--hover-icon-right-header)',
        }
    },
    men: {
        filter: 'invert(var(--invert))',
    },
    iconItemRightDropdown: {
        width: '20px',
        height: '20px',
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
            backgroundColor: '#f02849 !important',
        },
    },
    iconItemMobile: {
        display: 'none !important',
        [theme.breakpoints.down('xs')]: {
            display: 'block !important',
        },
    },

}));