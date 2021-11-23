import { makeStyles } from '@material-ui/core';
import filterIcon from '../../images/filterIcon.png'
import manaIcon from '../../images/settingProfileIcon.png'
import eventIcon from '../../images/eventLife.png'
export const useStyles = makeStyles(() => ({
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
        padding:'22px 30px 0',
        justifyContent:'space-between',
        // height:'180px'
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
        marginTop:'24px'
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
    },
    // Profle Tabs
    profileTabs : {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        margin:'0 30px',
        marginTop:'-35px',
        borderTop:'1px solid #ced0d4'
    },
    listTabs: {
        display:'flex',
    },
    tabLink: {
        margin:'4px 0',
        padding:'16px 16px',
        cursor:'pointer',
        color:'var(--secondary-text)',
        fontWeight:'500',
        position:'relative',
        '&:hover': {
            borderRadius:'8px',
            backgroundColor:'var(--hover-bg-icon)'
        }
    },
    archive: {
        padding:'5px 13px',
        cursor:'pointer',
        borderRadius:'8px',
        display:'flex',
        alignItems:'center',
        backgroundColor:'var(--button-bg)',
    },
    // Profile bottom
    tilesFeedAbout: {
        backgroundColor:'var(--bg-first)',
        borderRadius:'8px',
        padding:'15px 16px 9px',
        display:'flex',
        flexDirection:'column',
        boxShadow:'0 1px 2px var(--shadow2)'
    },
    label: {
        width:'100%',
        margin:'11px 0',
        fontWeight:'600',
        textAlign:'center',
        padding:'7px 0',
        borderRadius:'8px',
        backgroundColor:'var(--secondary-button-bg)',
        cursor:'pointer',
        transition:'.1s ease',
        '&:hover': {
            backgroundColor:'var(--bg-icon)'
        }
    },
    tilesFeedPhotos: {
        backgroundColor:'var(--bg-first)',
        borderRadius:'8px',
        padding:'16px 16px 20px',
        margin:'16px 0',
        boxShadow:'0 1px 2px var(--shadow2)'
    },
    photosTitle: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    seeAll: {
        color:'var(--blue-link)',
        fontWeight:'500',
        fontSize:'17px'
    },
    // Composer
    // ComposerTop
    composerTop: {
        borderRadius:'8px',
        backgroundColor:'var(--bg-first)',
        boxShadow:'0 1px 2px var(--shadow2)',
        padding:'12px 16px 10px',
        marginBottom:'16px'
    },
    composerBottom: {
        borderRadius:'8px',
        padding:'8px 16px 0',
        backgroundColor:'var(--bg-first)',
        boxShadow:'0 1px 2px var(--shadow2)'
    },
    createPost: {
        display:'flex',
        borderBottom:'1px solid var(--secondary-button-bg)',
        paddingBottom:'12px'
    },
    avartarCreatePost: {
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        objectFit:'cover'
    },
    inputCreatePost: {
        width:'100%',
        backgroundColor:'var(--bg-input)',
        border:'0',
        outline:'0',
        borderRadius:'20px',
        marginLeft:'8px',
        padding:'12px'
    },
    typeCreate: {
        marginTop:'10px',
        display:'flex',
        justifyContent:'space-around'
    },
    typeCreateButton: {
        borderRadius:'8px',
        display:'flex',
        // alignItems:'center',
        padding:'8px',
        '&:hover': {
            cursor:'pointer',
            backgroundColor:'var(--bg-input)'
        }
    },
    live: {
        filter:'#f3425f',
    },
    eventIcon: {
        backgroundImage: `url(${eventIcon})`,
        backgroundPosition:'0px -148px',
        backgroundSize:'26px 714px',
        width:'20px',
        position:'absolute',
        height:'20px',
    },
    iconType: {
        marginRight:'5px',
    },
    textType: {
        fontWeight:'500',
        color:'var(--secondary-text)'
    },
    // Composer Bottom
    managerPost: {
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:'8px',
        borderBottom:'1px solid var(--secondary-button-bg)',

    },
    buttomCommon: {
        padding:'9px 12px 7px',
        borderRadius:'8px',
        border:'0',
        cursor:"pointer",
        fontSize:'17px',
        fontWeight:'500',
        outline:'0',
        backgroundColor:'var(--secondary-button-bg)'
    },
    mana: {
        fontWeight:'500',
        marginLeft:'8px',
        boxShadow:'0 1px 2px var(--shadow2)'
    },
    iconFilter: {
        backgroundImage: `url(${filterIcon})`,
        backgroundPosition:'0px -496px',
        backgroundSize:'26px 690px',
        width:'16px',
        height:'16px',
        position:'absolute',
    },
    iconMana: {
        backgroundImage: `url(${manaIcon})`,
        backgroundPosition:'0px -658px',
        backgroundSize:'26px 690px',
        width:'16px',
        height:'16px',
        position:'absolute',
    },
    textComposerBot: {
        paddingLeft:'21px',
    },
    viewMode: {
        padding:'4px 0 4px',
        justifyContent:'space-around',
        display:'flex',
        color:'var(--secondary-text)'
    },
    titleViewMode: {
        padding:'5px 45px',
        borderRadius:'8px',
        '&:hover': {
            cursor:"pointer",
            backgroundColor:'var(--bg-input)'
        }
    }

}))