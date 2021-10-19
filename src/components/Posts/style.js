import { makeStyles } from '@material-ui/core';
import reacts from '../../images/reactIcon.png'
export const useStyles = makeStyles((theme) => ({
    postContainer: {
        maxWidth:'75%',
        margin:'0 auto',
        backgroundColor:'var(--bg-first)',
        borderRadius:'8px',
        marginTop:'15.5px',
        padding:'10px 0',
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.2)',
        [theme.breakpoints.down('xs')]: {
            maxWidth:'100%',
        },
    },
    userPost: {
        display:'flex',
        justifyContent:'space-between',
        padding:'0px 16px 0px',
    },
    timeSince: {
      color:'var(--secondary-text)' ,
      fontSize:'14px',
      display:'flex',
      alignItems:'center',
      opacity:'.9',
      fontWeight:'500'
    },
    nameUser : {
        fontSize:'16px',
        fontWeight:'500',
        letterSpacing:'.3px',
    },
    userPostLeft: {
        display:'flex',
        alignItems:'center'
    },
    imgUser : {
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        objectFit:'cover'
    },
    textContent: {
        padding:'0px 16px 13px',
    },
    detailUser: {
        marginLeft:'8px'
    },
    contentPost:{
        marginTop:'6px',
        maxHeight:'630px',
        overflow:'hidden'
    },
    interactPost: {
        padding:'20px 16px 15px',
        display:'flex',
        borderBottom:'1px solid #ddd',
        justifyContent:'space-between',
        color:'var(--secondary-text)'
    },
    reactIcons: {
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'6px 8px',
        borderBottom:'1px solid #ddd'
    },
    commonIcons: {
        display:'flex',
        alignItems:'flex-end',
        color:'var(--secondary-text)',
        padding:'7px 53px',
        cusor:'pointer',
        borderRadius:'8px',
        '&:hover' : {
            backgroundColor:'var(--hover-bg-icon)'
        }
    },
    commonIcon: {
        backgroundImage: `url(${reacts})`,     
        width: '18px',
        height: '18px',  
    },
    tsIcon: {
        position:'relative'
    },
    publicIcon: {
        width:'16px'
    },
    likeIcon: {
        backgroundPosition: '0px -354px',
        backgroundSize: '34px 772px',
    },
    commentIcon: {
        backgroundPosition: '0px -314px',
        backgroundSize: '34px 772px',
    },
    textCommon: {
        fontWeight:'500',
        marginLeft:'8px',
        fontSize:'16px',
        opacity:'.9'
    },
    shareIcon: {
        backgroundPosition: '0px -374px',
        backgroundSize: '34px 772px',

    }
}))