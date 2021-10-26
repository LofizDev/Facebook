import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    newFeed: {
        width:'100%',
        margin:'0 auto',
        height:'1900px'
    },
    containerFeed: {
        maxWidth:'75%',
        margin:'0 auto',
        padding:'25px 0px 23px',
        [theme.breakpoints.down('xs')]: {
            maxWidth:'100%',
        },
    },
    yourAvartar: {
        overflow:'hidden',
        borderTopLeftRadius:'9px',
        borderTopRightRadius:'9px',
        position:'relative'
    },
    imgStories:{
        height:'147px',
        width:'100%',
        objectFit:'cover'
    },
    createIcon: {
        width:'39.5px',
        height:'39.5px ',
        backgroundColor:'var(--color-primary)',
        color:'#fff',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:'-20px',
        left:'50%',
        transform:'translateX(-50%)',
        borderRadius:'50%',
        border:'4px solid var(--bg-first)'
 
    },
    createStory: {
        padding:'25px 0 8px 0',
        textAlign:'center',
        position:'relative',
        color:'var(--primary-text)',
        fontSize:'14px',
        borderBottomLeftRadius:'13px',
        borderBottomRightRadius:'13px',
        backgroundColor:'var(--bg-first)',
    },
    paper: {
        borderRadius:'9px',
        cursor:'pointer',
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.2)',
        backgroundColor:'var(--bg-first)'
    },
    // List user stories
    wrapperStories: {
        borderRadius:'9px',
        overflow:'hidden',
        position:'relative'
    },
    userImg: {
        width:'39px',
        height:'39px',
        borderRadius:'50%',
        position:'absolute',
        left:'12px',
        overflow:'hidden',
        top:'12px',
        border:'4px solid var(--border-img-user)',
    },
    userNameStory:{
        position:'absolute',
        bottom:'2.5px',
        color:'#fff',
        fontSize:'13.5px',
        letterSpacing:'.3px',
        padding:'5px 12px',
        fontWeight:'500'
    },
    storyUser: {
        position:'relative'
    },
    imageStory: {
        width:'100%',
        objectFit:'cover',
        height:'197px',
    },
    overLay : {
            content:'',
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
            backgroundImage: ' linear-gradient(0deg, rgba(0,0,0,0.4),transparent)'
    },
    overLayy : {
        content:'',
        position:'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height:'100%',
        backgroundImage: ' linear-gradient(0deg, rgba(0,0,0,0.24),transparent)'
}

}))