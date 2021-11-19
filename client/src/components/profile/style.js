import { makeStyles } from '@material-ui/core';
import avatarIcon from '../../images/changeAvatarIcon.png'
export const useStyles = makeStyles((theme) => ({
    coverImage:{
        backgroundColor:'pink',
        height:'350px',
        position:'relative',
        width:'100%',
        objectFit:'cover',
        borderRadius:'8px'
    },
    btnAddCoverImage: {
        position:'absolute',
        right:'32px',
        bottom:'16px',
        padding:'8px 12px',
        display:'flex',
        alignItems:'flex-end',
        cursor:'pointer',
        fontWeight:"500",
        borderRadius:'8px',
        backgroundColor:'white',
        '&:hover': {
            backgroundColor:'#F2F2F2'
        }
    },
    iconCamera: {
        color:'black',
        fontSize:'18px',
        marginRight:'6px'
    },
    textCover: {
        color:'black'
    },
    // Info user
    info: {
        display:'flex',
        padding:'22px 30px',
        justifyContent:'space-between'
    },
    avartar: {
        width:'172px',
        height:'172px',
        border:'4px solid var(--bg-first)',
        borderRadius:"50%",
        transform:'translateY(-52px)',
    },
    iconCameraCustom: {
        fontSize:'23px',
        marginRight:'0'
    },
    changeAvartar: {
        right:'8px',
        bottom:'18px',
        transform:'translateY(-47px)',
        position:'absolute',
        display:'flex',
        alignItems:'center',
        cursor:'pointer',
        justifyContent:'center',
        width:'36px',
        height:'36px',
        borderRadius:'50%',
        backgroundColor:'var(--secondary-button-bg)'
    },
    userImg: {
        position:'relative'
    },
    infoLeft: {
        display:'flex',
    },
    infoUser: {
        paddingLeft:'16px'
    },
    fullname: {
        display:'flex',
        alignItems:'flex-end'
    },
    follow: {
        fontSize:'18.0625px',
        color:'var(--secondary-text)',
        fontWeight:'500',
        cursor:'pointer'
    },
    followin: {
        '&:hover': {
            textDecoration:'underline',
        }
    },
    follower: {
        '&:hover': {
            textDecoration:'underline',
        }
    },
    // Add story icon, adjust Icon
    infoRight: {
        display:'flex',
        marginTop:'23px'
    },
    addStory: {
        display:'flex',
        alignItems:'center',
        padding:'12px',
        backgroundColor:'var(--bg-icon-search)',
        color:'white',
        height:'38px',
        fontWeight:'500',
        borderRadius:'8px',
        '&:hover': {
            cursor:'pointer'
        }
    },
    adjustProfile: {
        display:'flex',
        alignItems:'center',
        padding:'12px',
        borderRadius:'8px',
        fontWeight:'500',
        height:'38px',
        backgroundColor:'var(--button-bg)',
        marginLeft:'10px',
        '&:hover': {
            cursor:'pointer'
        }

    },
    iconAdd: {
        filter: 'invert(100%)',
        marginRight:'7px'
    },
    iconAdjust: {
        filter: 'var(--filter-primary-icon)',
        marginRight:'7px'
    }
}))