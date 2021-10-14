import { makeStyles } from '@material-ui/core';
import '../../App.css'
export const useStyles = makeStyles((theme) => ({
    header: {
        padding: '5px 15px',
        backgroundColor: '#fff',
        display: 'flex',
        height: '57px',
        borderBottom: '1px solid #E3E5E8',
        boxShadow: '0 0 5px 0 rgb(32 32 36 / 17%)',
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
        alignItems: 'start',
        flex: 6,
    },
    headerRight: {
        width: '100%',
        flex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
    },
    iconItem: {
        padding: '8px 42px',
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
            display: 'none'
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
        backgroundColor: '#e4e6eb'
    },
    listIcons: {
        display: 'flex'
    },
    iconImage: {
        width: '25px',
        height: '25px',
        fill: '#1877f2'
    },
    iconImageContact: {
        width: '18px',
        height: '18px',
    },
    searchBar: {
        display: 'flex',
        backgroundColor: '#F0F2F5',
        padding: '9px 18px 9px 5px',
        display: 'flex',
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
        width: '190px',
        fontSize: '17px',
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
            backgroundColor: '#F2F2F2',
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
        alignItems: 'center'
    },
    iconItemRightDropdown: {
        width: '20px',
        filter: 'invert(90%)',
        height: '20px',
        filter: 'red',
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


}));