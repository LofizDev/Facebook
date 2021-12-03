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
    // Error Toastify
    overlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        zIndex: '999',
        backgroundColor: 'var(--overlay-box)',
        opacity: '.85',
    },
    dislog: {
        position: 'absolute',
        padding: '25px 18px',
        zIndex: '9999',
        opacity: '1',
        left: '50%',
        borderRadius: '8px',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '550px',
        backgroundColor: 'var(--bg-first)',
        boxShadow: ' 0 12px 28px 0 var(--shadow2),0 2px 4px 0 var(--shadow1),inset 0 0 0 1px var(--shadow-inset)'
    },
    title: {
        fontSize: '20px',
        marginBottom: '25px'
    },
    close: {
        float: 'right',
        color: 'white',
        backgroundColor: 'var(--bg-icon-search)',
        padding: '7px 12px',
        borderRadius: '6px',
        fontWeight: '500',
        marginTop: '25px',
        cursor: 'pointer'
    }
}))