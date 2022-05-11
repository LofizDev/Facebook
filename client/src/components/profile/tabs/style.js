import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({

    profileBottom: {
        display: 'flex',
        margin: '16px auto 0',
        maxWidth: '1040px',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    profileBottomLeft: {
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            width: '60%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        },
    },
    policy: {
        fontSize: '13.4px',
        color: 'var(--secondary-text)',
        fontWeight: '500'
    },
    profileBottomRight: {
        width: 'calc(60% - 16px)',
        marginLeft: '16px',
        [theme.breakpoints.down('sm')]: {
            margin: '15px 0'
        },
        [theme.breakpoints.down('xs')]: {
            width: '95%'
        },
    },


    // Profiile Tabs Followers
    paper: {
        boxShadow: '0 0 2px var(--media-inner-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        borderRadius: '8px',
    },
    followersTop: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: '21px'
    },
    followers: {
        width: '100%',
        backgroundColor: 'var(--bg-first)',
        boxShadow: '0 1px 2px var(--shadow2)',
        padding: '18px 16px',
        borderRadius: '8px',
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '8px'
    },
    info: {
        display: 'flex',
        alignItems: 'center'
    },
    fullname: {
        marginLeft: '16px',
        fontWeight: '500',
        fontSize: '18px',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    followSelect: {
        marginTop: '8px',
        display: 'flex',
        marginBottom: '16px'
    },
    followOption: {
        padding: '24px 16px',
        color: 'var(--secondary-text)',
        cursor: 'pointer',
        fontWeight: '500',
        position: 'relative'
    },
    button: {
        padding: '7px 12px',
        backgroundColor: 'var(--primary-deemphasized-button-background)',
        color: 'var(--color-primary)',
        fontWeight: '500',
        borderRadius: '6px',
        cursor: 'pointer',
        border: '0',
        fontWeight: '500',
        outline: '0'
    },
    searching: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg-input)',
        width: '220px',
        height: '35px',
        borderRadius: '50px',
        padding: '0 10px'

    },
    searchIcon: {
        color: 'var(--secondary-text)',
    },
    searchInput: {
        border: '0',
        outline: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent'
    },
    // List Hobbie

    fullnameTooltip: {
        fontSize: '20px'
    },
    tooltipRight: {
        marginLeft: '16px',
    },
    labelAboutInfo: {
        display: 'flex',
        margin: '13px 0 0px'
    },
    titleInfo: {
        marginLeft: '12px',
    },
    from: {
        fontWeight: '600',
        // fontSize: '17px'
    },
    iconAboutProfile: {
        width: '20px',
        height: '20px',
        filter: 'var(--filter-placeholder-icon)'
    },
    // Err Data 
    errData: {
        margin: '50px auto',
        fontSize: '22px',
        color: 'var(--secondary-tex)',
        fontWeight: '500'
    },


}))