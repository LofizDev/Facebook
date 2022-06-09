import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    commentCard: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '11px'
    },
    avatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        objectFit: 'cover'
    },
    postCardLeft: {
        width: '32px',
    },
    postCardRight: {
        marginLeft: '10px',
        // width: '100%',
        backgroundColor: 'var(--bg-input)',
        borderRadius: '18px',
        padding: '10px 16px'
    },
    userName: {
        fontWeight: '500',
        color: 'var(--primary-text)'
    },
    action: {
        display: 'flex',
        alignItem: 'center',
        marginLeft: '42px',
        cursor: 'pointer',
        fontWeight: '500',
        marginTop: '4px',
        fontSize: '13px',
        color: 'var(--secondary-text)'
    },
    userAction: {
        marginRight: '16px'
    },
    imageContent: {
        height: '210px',
        width: '200px',
        borderRadius: '18px',
        objectFit: 'cover',
        marginLeft: '42px',
    }

}))