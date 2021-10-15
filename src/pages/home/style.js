import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    containerApp: {
        display:'flex',
        width:'100%',
        height:'900px',
        marginTop:'56px'
    },
    sidebarHome: {
        flex:'3',
    },
    newFeedHome: {
        flex:'4',
    },
    rightbarHome: {
        flex:'3',
    },
}))