import { makeStyles } from '@material-ui/core';
import createIcon from '../../images/roomIcon.png'
export const useStyles = makeStyles((theme) => ({
    createMeetContainer: {
        maxWidth:'75%',
        margin:'0 auto',
        padding:'11.5px 16px 7.5px',
        backgroundColor:'var(--bg-first)',
        borderRadius:'8px',
        marginTop:'15.5px',
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.2)',
        [theme.breakpoints.down('xs')]: {
            maxWidth:'100%',
        },
    },
    createMeet: {
        display:'flex',
        fontWeight:'600',
        alignItems:'center',
        padding:'7px 14px',
        border:'2px solid var(--border-meet)',
        borderRadius:'20px',
        cursor:'pointer',
    },
    createMeetIcon: {
        backgroundImage: `url(${createIcon})`,
        backgroundPosition: '0 -220px',
        backgroundSize:' 502px 246px',
        width: '24px',
        height: '24px',
    },
    text: {
        padding:'0 10px',
        color:'var(--text-meet-light)'

    },
    imageUser: {
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        objectFit:'cover'
    },
    boxInfo: {
        cursor:'pointer'
    },
    user: {
        position:"relative"
    },
    status: {
        position:'absolute',
        bottom:'0px',
        width:'11.2px',
        height:'11.2px',
        backgroundColor:'var(--color-online)',
        zIndex:'8',
        borderRadius:'50%',
        border:'2.3px solid var(--bg-second)',
        right:'0px'
    }

}))