import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    showsContainer: {
        marginTop:'56px',
        display:'flex'
    },
    showsSidebar: {
        width:'24%'
    },
    showsContent: {
        width:'76%',
        height:'100vh',
        color:'white'
    }
}))