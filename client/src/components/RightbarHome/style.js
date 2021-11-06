import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    rightbarContainer: {
        backgroundColor:'var(--bg-second)',
        width:'24%',
        right:'0',
        position:'fixed',
        height:'calc(100vh - 56px)',
        padding:'25px 5px',
        overflow: 'hidden',
        '&:hover': {
            overflowY:'scroll',
        },
        [theme.breakpoints.down('md')]: {
            width:'auto',
        },
    },
    imgAds: {
        width:'131px',
        height:'65px',
        objectFit:"cover",
        borderRadius:'12px',
    },
    textTop:{
        padding:'0 8px',
        color:'var(--secondary-text)',
        fontSize:'18px',
        lineHeight:'21px',
        fontWeight:'500'
    },
    title: {
        color:'var(--secondary-text)',
        fontSize:'18px',
        lineHeight:'21px',
        fontWeight:'500'

    },
    adsBox: {
        display:'flex',
        alignItems:'center',
        marginTop:'8px',
        fontWeight:'500',
        padding:'8px',
        borderRadius:'8px',
        '&:hover': {
            backgroundColor:'var(--hover-bg-sidebar)',
            cursor:'pointer'
        }
    },
    titleBox: {
        padding:'0 10px',
        display:'flex',
        flexDirection:'column',
    },
    linkAds: {
        marginTop:'3px',
        fontSize:'14px',
        color:'var(--secondary-text)'
    },
    listContactTitle: {
        display:'flex',
        margin:'8px 0 8px 8px',
        borderTop:'1px solid var(--border-sidebar)',
        padding:'17px 0px 0',
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconRightbar: {
        color:'var(--color-icon)'
    },
    listIcon: {
        paddingRight:'8px'
    },
    // List user contact online
    userOnline: {
        display:'flex',
        flexDirection:'column',
    },
    infoUser: {
        display:'flex',
        alignItems:'center',
        padding:'7.8px',
        borderRadius:'8px',
        cursor:'pointer',
        transition:'.11s ease-out',
        '&:hover' : {
            backgroundColor:'var(--hover-bg-sidebar)'
        }
    },
    avatar: {
        width:'36px',
        objectFit:'cover',
        height:'36px',
        borderRadius:'50%',
    },
    userName: {
        marginLeft:'12px',
        fontWeight:'500'
    },
    avatarTyof: {
        position:'relative',
        display:'flex'
    },
    status: {
        position:'absolute',
        bottom:'0px',
        width:'11.2px',
        height:'11.2px',
        backgroundColor:'var(--color-online)',
        zIndex:'8',
        borderRadius:'50%',
        border:'2px solid var(--bg-second)',
        right:'-3px'
    }
  
}))