import { makeStyles } from '@material-ui/core';
import logout_contact from '../../images/logout_contact.png'
import setting from '../../images/settingIcon.png'
import help from '../../images/helpIcon.png'
import dark from '../../images/darkIcon.png'
export const useStyles = makeStyles((theme) => ({
     // Custom box setting
     iconContact: {
        backgroundImage: `url(${logout_contact})`,
        backgroundPosition: '0px -214px',
        backgroundSize: '26px 496px',
        width: '20px',
        height: '20px',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        position: 'relative',
        left: '50%',
        cursor:'pointer',
        filter: 'invert(var(--invert))',
        top: '50%',
        transform: 'translate(-50%,-50%)'
    },
     boxSetting: {
        position: 'fixed',
        right: '15px',
        backgroundColor:"var(--bg-first)",
        border: '1px solid var(--border-box-setting)',
        boxShadow: '2px 2.2px 5px 2px rgb(32 32 36 / 17%)',
        width: '374px',
        top: '56px',
        padding: '9px 10px',
        borderRadius: '12px',
        zIndex:'9999999999 !important'
    },
    boxUser: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1.3px solid var(--border-sidebar)',
        padding: '10px 10px',
        '&:hover': {
            borderRadius:'9px',
            backgroundColor:'var(--hover-bg-icon)'
        }
    },
    privacy: {
        marginTop:'5px',
        fontSize:'14px',
        padding:'12px 10px',
        color:'var(--secondary-text)'
    },
    titleSetting: {
        color:'var(--primary-text)',
        fontWeight:"500"
    },
    subTitleSetting: {
        color:'var(--secondary-text)'
    },
    boxInfo: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '15px'
    },
    boxUserImg: {
        width: '55px',
        height: '55px',
        borderRadius: '50%'
    },
    listIconSetting: {
        padding: '10px 10px 20px',
        borderRadius:'9px',
        margin:'15px 0 -10px',
        '&:hover': {
            backgroundColor:'var(--hover-bg-icon)'
        }
    },
    iconSetting: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        cursor:'pointer',
        display: 'flex',
        backgroundColor: 'var(--button-bg)',
    },
    textBoxContact: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '50px'
    },
    // Custom box setting
    itemSettingFooter: {
        padding: '7px 10px',
        borderRadius:'9px',
        display: "flex",
        alignItems: 'center',
        cursor:'pointer',
        '&:hover': {
            backgroundColor:'var(--hover-bg-icon)'
        }
    },
    iconWrapperFooter: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'var(--button-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '15px'
    },
    iconFooter: {
        width: '20px',
        height: '20px',
        filter: 'invert(var(--invert))',
    },
    iconFooterSetting: {
        backgroundImage: `url(${setting})`,
        backgroundPosition: '-22px -438px',
        backgroundSize: '50px 576px',
    },
    iconFooterHelp: {
        backgroundImage: `url(${help})`,
        backgroundPosition: '0px -808px',
        backgroundSize: '26px 1522px',
    },
    iconFooterScreen: {
        backgroundImage: `url(${dark})`,
        backgroundPosition: '0px -138px',
        backgroundSize: '34px 276px;',
    },
    iconFooterLogout: {
        backgroundImage: `url(${logout_contact})`,
        backgroundPosition: '0px -236px',
        backgroundSize: '26px 496px',
    },
    // custom language,darkmode


    settingLanguage: {
        display:'flex',
        flexDirection:'column',
        alignItems:'start',
        trasition:'.4s ease',
        overflow:'hidden',
        '&:hover': {
            backgroundColor:'var(--bg-first)'
        }
    },
    textChoose: {
        margin:'5px 0',
        padding:'10px 15px',
        marginLeft:'35px',
        borderRadius:'8px',
        width:'90%',
        '&:hover': {
            backgroundColor:'var(--hover-bg-icon)'
        }
    }
}))