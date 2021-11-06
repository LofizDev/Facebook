import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    watchContainer: {
        display:'flex',
        width:'100%',
        height:'900px',
        marginTop:'56px'
    },
    sidebarWatch: {
        width:'360px',
        [theme.breakpoints.down('sm')]: {
            display:'none'
        },
    },
    contentWatch: {
        width:'calc(100% - 360px)',  
        [theme.breakpoints.down('sm')]: {
            width:'100%'
        },   
    },
}))