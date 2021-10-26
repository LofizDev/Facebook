import { makeStyles } from '@material-ui/core';
import typeIcon from '../../images/createPostIcon.png'
export const useStyles = makeStyles((theme) => ({
    createPost: {
        maxWidth:'75%',
        margin:'0 auto',
        padding:'12px 16px',
        backgroundColor:'var(--bg-first)',
        borderRadius:'8px',
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.2)',
        [theme.breakpoints.down('xs')]: {
            maxWidth:'100%',
        },
    },
    yourThink: {
        display:'flex',
        alignItems:'center',
        paddingBottom:'12px',
        borderBottom:'1px solid var(--border-sidebar)'
    },
    avartar: {
        width:'40px',
        height:'40px',
        borderRadius:'50%'
    },
    submit: {
        marginLeft:'8px',
        width:'100%',
        border:'0',
        outline:'0',
        padding:'10px 12px 8px',
        fontSize:'18px',
        borderRadius:'30px',
        backgroundColor:'var(--bg-input)',
        '&::placeholder': {
            color: 'var(--secondary-text)'
          }
    },
    // List type post 
    listTypeCreate : {
        display:'flex',
        justifyContent:'space-around',
        marginTop:'8px',
    },
    typeCreate: {
        position:'relative',
        display:'flex',
        alignItems:'center',
        cursor:'pointer',
        borderRadius:'9px',
        padding:'2px 18px 0',
        color:'var(--secondary-text)',
        '&:hover': {
            backgroundColor: 'var(--bg-input)'
        },
    },
    typeCreateFeel: {
        [theme.breakpoints.down('md')]: {
            display:'none',
        },
    },
    iconLive: {
        backgroundImage: `url(${typeIcon})`,
        backgroundPosition: '0 0',
        backgroundSize:' 26px 558px',
        width: '24px',
        height: '24px',
    },
    iconImage: {
        backgroundImage: `url(${typeIcon})`,
        backgroundPosition: '0 -234px',
        backgroundSize:' 26px 558px',
        width: '24px',
        height: '24px',
    },
    iconFeel: {
        backgroundImage: `url(${typeIcon})`,
        backgroundPosition: '0 -26px',
        backgroundSize:' 26px 558px',
        width: '24px',
        height: '24px',
    },
    text : {
        padding:'10px 8px'
    }

}))