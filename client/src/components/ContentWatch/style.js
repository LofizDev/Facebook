import { makeStyles } from '@material-ui/core';
import reactIcons from '../../images/reactIcon.png'
export const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "flex",
        marginTop: '18px',
        alignItems: 'center',
        flexDirection: 'column',
    },
    card: {
        backgroundColor: 'var(--bg-first)',
        width: '80%',
        marginBottom: '15px',
        borderRadius: '8px',
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    cardAvatar: {
        display: 'flex',
        cursor: 'pointer',
        padding: '12px',
        alignItems: 'center'
    },
    image: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        overflow: 'hidden',
        objectFit: 'cover'
    },
    page: {
        padding: '0 12px'
    },
    cardIcons: {
        padding: '12px'
    },
    pageName: {
        fontWeight: '500'
    },
    cardTitle: {
        fontWeight: '500',
        padding: '0 12px 9px',
    },
    cardVideo: {
        overflow: 'hidden'
    },
    follow: {
        color: 'var(--color-primary)'
    },
    timeSince: {
        fontSize: '14px',
        color: 'var(--secondary-text)'
    },
    reactIcons: {
        display: 'flex',
        alignItems: 'center',
        padding: '4px 0px 5px',
    },
    commonIcons: {
        display: 'flex',
        alignItems: 'flex-end',
        color: 'var(--secondary-text)',
        padding: '7px 23px',
        cusor: 'pointer',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: 'var(--hover-bg-icon)'
        }
    },
    commonIcon: {
        backgroundImage: `url(${reactIcons})`,
        width: '18px',
        height: '18px',
    },

    likeIcon: {
        backgroundPosition: '0px -354px',
        backgroundSize: '34px 772px',
        filter: 'invert(39%)'
    },
    commentIcon: {
        backgroundPosition: '0px -314px',
        backgroundSize: '34px 772px',
        filter: 'invert(39%)'
    },
    textCommon: {
        fontWeight: '500',
        marginLeft: '8px',
        fontSize: '15px',
    },
    shareIcon: {
        backgroundPosition: '0px -374px',
        backgroundSize: '34px 772px',
        filter: 'invert(39%)'
    }
}))