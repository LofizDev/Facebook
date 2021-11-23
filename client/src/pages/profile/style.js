import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles(() => ({
    profileTop: {
        backgroundColor:'var(--bg-first)'
    },
    infoContainer: {
         boxShadow:'0 1px 2px var(--shadow1)'
    },
    info: {
        maxWidth:'940px',
        margin:'56px auto 0'
    },
    profileBottom: {
        display:'flex',
        margin:'16px auto 0',
        maxWidth:'880px',
        justifyContent:'space-between'
    },
    profileBottomLeft: {
        width:'40%'
    },
    policy: {
        fontSize:'13.4px',
        color:'var(--secondary-text)',
        fontWeight:'500'
    },
    profileBottomRight: {
        width:'calc(60% - 16px)',
        marginLeft:'16px'
    },

}))