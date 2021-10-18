import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    containerApp: {
        display:'flex',
        width:'100%',
        height:'900px',
        marginTop:'56px'
    },
    sidebarHome: {
        width:'24%',
        [theme.breakpoints.down('sm')]: {
            display:'none',
        },
    },
    newFeedHome: {
        width:'52%',
        [theme.breakpoints.down('sm')]: {
            flex:'1',
        },
    },
    rightbarHome: {
        width:'24%',
        [theme.breakpoints.down('sm')]: {
            display:'none',
        },
    },
}))