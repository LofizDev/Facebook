import setting from '../../images/settingIcon.png'
import { makeStyles } from '@material-ui/core';
import iconsWatch from '../../images/iconsSibarWatch.png'
import savedWatch from '../../images/iconSavedSbWatch.png'
import watchLight from '../../images/watchLight.png'
export const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        height:'calc( 100vh - 56px)',
        position:'fixed',
        width:'24%',
        borderRight: '2px solid #E3E5E8',
        backgroundColor:'var(--bg-first)',
        boxShadow: '0 0 4px 0 rgb(32 32 36 / 17%)',
        overflow: 'hidden',
        '&:hover': {
            overflowY:'scroll',
        },
    },
    title: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'13px 16px 8px',
    },
    commonIcon: {
        width:'36px',
        height:'36px',
        backgroundColor:'var(--overlay-gray)',
        borderRadius:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    searchBar: {
        display: 'flex',
        backgroundColor: 'var(--bg-second)',
        padding: '8px 4px 5px 5px',
        alignItems: 'center',
        width:'290px',
        marginLeft:'16px',
        borderRadius: '28px',
        marginBottom:'15px'
    },
    searchInput: {
        border: '0',
        outline: '0',
        letterSpacing:'.3px',
        fontSize:'16px',
        backgroundColor: 'transparent',
    },
    searchIcon: {
        fontSize: '23px',
        color: '#71777F',
        marginLeft: '4px',
        marginRight: '5px',
    },
    // List Link Icons
    linkIcon: {
        display:"flex",
        alignItems:'center',
        padding:'8px 10px',
        borderRadius:'8px',
        margin:'0px 8px',
        cursor:'pointer',
        transition:'.1s ease-out',
        '&:hover': {
            backgroundColor:'var(--bg-second)'
        }
    },
    titleLink: {
        marginLeft:'12px',
        fontWeight:'500',
        fontSize:'16.2px'
    },
    iconCommonSize: {
        backgroundImage: `url(${iconsWatch})`, 
        width:'20px',
        height:'20px'
    },
    iconHome: {
        backgroundPosition: '0px -870px',
        backgroundSize:' 26px 1054px',
        backgroundImage: `url(${watchLight})`, 
        // filter:'invert(100%)',
    },
    iconLive: {
        backgroundPosition: '0px -66px',
        backgroundSize:' 22px 350px',
    },
    iconShow: {
        backgroundPosition: '0px -88px',
        backgroundSize:' 22px 350px',
    },
    iconSaved: {
        backgroundImage: `url(${savedWatch})`,
        backgroundPosition: '0px -96px',
        backgroundSize:'26px 538px',
    },
    // List pages
    listPagesContainer: {
        margin:'13px 10px',
        padding:'13px 0',
        borderTop:'1px solid #ddd'
    },
    titleListPages: {
        padding:'8px 6px',
        marginBottom:'5px'
    },
    textleft: {
        fontSize:'18px',
        fontWeight:'500',
    },
    imgPage: {
        width:"36px",
        height:'36px',
        objectFit:'cover',
        borderRadius:'50%',
    },
    page: {
        display:'flex',
        alignItems:'center',
        padding:'8px 6px',
        borderRadius:'9px',
        cursor:'pointer',
        '&:hover': {
            backgroundColor:'var(--bg-second)'
        }
    },
    titlePages: {
        marginLeft:'12px',
        fontWeight:'500'
    },
    countNewVideo: {
        fontSize:'14px',
        color:"var(--blue-link)",
        marginLeft:'8px',
    },
    ignore: {
        width:'8px',
        height:'8px',
        marginLeft:"12px",
        borderRadius:'50%',
        backgroundColor:'#1876F2'
    },
        // Custom scrollbar
        '@global': {
            '*::-webkit-scrollbar': {
                width: '6px',
            },
            '*::-webkit-scrollbar-track': {
              '-webkit-box-shadow': 'inset #a6afe0',
              borderRadius: '10px',
            },
            '*::-webkit-scrollbar-thumb': {
              borderRadius: '7px',
              backgroundColor: 'rgba(0,0,0,.1)',
              '-webkit-box-shadow': 'inset 0px 0px 6px rgba(160, 200, 241, 0.5)',
            }
          }


}))