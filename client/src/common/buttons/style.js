import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    follow: {
        display: 'flex',
        alignItems: 'center',
        height: '36px',
        padding: '7px 12px',
        borderRadius: '6px',
        backgroundColor: '#1b74e4',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'var(--hover-overlay-blue)'
        }
    },
    followIcon: {
        width: '16px',
        height: '16px',
        filter: 'invert(100%)'
    },
    messageIcon: {
        width: '16px',
        height: '16px',
        marginRight: '6px',
        filter: 'var(--filter-primary-icon)'
    },
    text: {
        marginLeft: '6px',
        color: '#fff',
        fontWeight: '500'
    },
    textMsg: {
        fontWeight: '500'
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        height: '36px',
        marginLeft: '8px',
        padding: '7px 12px',
        cursor: 'pointer',
        borderRadius: '6px',
        backgroundColor: 'var(--secondary-button-background)',
        '&:hover': {
            backgroundColor: 'var(--hover-overlay-gray)'
        }
    },
}))