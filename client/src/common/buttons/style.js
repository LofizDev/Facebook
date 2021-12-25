import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    follow: {
        display: 'flex',
        alignItems: 'center',
        height: '36px',
        padding: '7px 12px',
        borderRadius: '6px',
        cursor: 'pointer',
        backgroundColor: 'var(--secondary-button-background)',
        '&:hover': {
            backgroundColor: 'var(--hover-overlay-gray)'
        }
    },
    followIcon: {
        width: '16px',
        height: '16px',
        filter: 'var(--filter-primary-icon)',
    },
    messageIcon: {
        width: '16px',
        height: '16px',
        marginRight: '6px',
        filter: 'invert(100%)'
    },
    text: {
        marginLeft: '6px',
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
        color: '#fff',
        backgroundColor: '#1b74e4',
        '&:hover': {
            backgroundColor: 'var(--hover-overlay-blue)',
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
        padding: '15px 18px',
        zIndex: '9999',
        opacity: '1',
        left: '100%',
        borderRadius: '8px',
        top: '0%',
        transform: 'translate(-50%, -60%)',
        width: '550px',
        backgroundColor: 'var(--bg-first)',
        boxShadow: ' 0 12px 28px 0 var(--shadow2),0 2px 4px 0 var(--shadow1),inset 0 0 0 1px var(--shadow-inset)',
        [theme.breakpoints.down('md')]: {
            left: '50%',
            width: '100%',
            top: '50%'
        },
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
    },
    // Cancel and Save
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
        padding: '7px 13px',
        borderRadius: '6px',
        border: '0',
        outline: '0',
        fontSize: '17px',
        cursor: 'pointer',
        fontWeight: '500',
        float: 'right',
        backgroundColor: 'transparent',
        color: "var(--color-primary)",
        '&:hover': {
            backgroundColor: 'var(--secondary-button-background)'
        }
    },

}))