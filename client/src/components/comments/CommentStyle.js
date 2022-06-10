import { makeStyles } from '@material-ui/core';
import setting from '../../images/posts/settingComment.png'

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
        maxWidth: '90%',
        backgroundColor: 'var(--bg-input)',
        borderRadius: '18px',
        padding: '9px 14px',
        position: 'relative',
        paddingRight: '45px'
    },
    iconSetting: {
        display: 'flex',
        alignItems: 'center',
        width: '30px',
        justifyContent: 'center',
        marginleft: '80px',
        height: '30px',
        borderRadius: '50%',
        '&:hover': {
            backgroundColor: 'var(--hover-bg-sidebar)'
        }
    },
    settingComment: {
        backgroundImage: `url(${setting})`,
        backgroundPosition: '-126px -118px',
        backgroundSize: ' 190px 154px',
        width: '16px',
        height: '16px',
        cursor: 'pointer'
    },
    visible: {
        opacity: '0'
    },
    likeAnimation: {
        position: 'absolute',
        right: '-47px',
        bottom: '-7px',
        cursor: 'pointer',
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
        marginTop: '5px',
        fontSize: '13.6px',
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