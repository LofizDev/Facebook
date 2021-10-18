import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    newFeed: {
        width:'100%',
        margin:'0 auto',
    },
    containerFeed: {
        maxWidth:'75%',
        margin:'0 auto',
        padding:'25px 0px'
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
        border:'4px solid #fff'
 
    },
    createStory: {
        padding:'25px 0 8px 0',
        textAlign:'center',
        position:'relative'
    },
    paper: {
        borderRadius:'9px',
        cursor:'pointer',
        boxShadow:'0px 1px 2px rgba(0, 0, 0, 0.2)',
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
        border:'4px solid var(--color-primary)',
    },
    userNameStory:{
        position:'absolute',
        bottom:'2px',
        color:'#fff',
        fontSize:'13px',
        padding:'5px 12px',
        lineHeight:'18px',
        fontWeight:'bold',
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