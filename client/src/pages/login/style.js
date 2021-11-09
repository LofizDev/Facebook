import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor:'var(--bg-second)',
        width:'100%',
        height:'100vh'
    },
    loginContainer: {
        display:'flex',
        position:'absolute',
        top:'25%',
        left:'50%',
        transform:'translate(-50%)',
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',
            top:'5%',
        },
    },
    logo: {
        width:'301px',
        marginTop:'20px',
        marginLeft:'-28px',
        [theme.breakpoints.down('md')]: {
            marginLeft:'28px',
            marginTop:'20px',
        },
    },
    introduce: {
        display:'flex',
        flexDirection:'column',
    },
    slogan: {
        fontSize: '27.5px',
        width:'500px',
        lineHeight:'32px',
        marginTop:'-5px',
        fontWeight:'400',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px',
            fontWeight:'400',
            width:'390px',
            textAlign:'center',
            marginTop:'-10px',
            marginBottom:'40px'
        },
    },

    formLogin: {
        boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
        padding:'20px 28px',
        backgroundColor:'var(--bg-first)',
        display:'flex',
        borderRadius:'9px',
        flexDirection:'column',
        marginLeft:'50px',
        [theme.breakpoints.down('md')]: {
            marginLeft:'0px',
        },
    },
    form: {
        display:'flex',
        borderRadius:'9px',
        flexDirection:'column'
    },
    password: {
        width:'350px',
        margin:'13px 0',
        '& label.Mui-focused': {
            color: '#1877f2',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ddd',
            },
            '&:hover fieldset': {
              borderColor: '#ddd',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1877f2',
            },
          },
    },
    email: {
        width:'350px',
        '& label.Mui-focused': {
            color: '#1877f2',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ddd',
            },
            '&:hover fieldset': {
              borderColor: '#ddd',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1877f2',
            },
          },
    },
    login:{
        padding:'11px',
        fontSize:'20px',
        borderRadius:'6px',
        color:'white',
        lineHeight:'32px',
        border:'0',
        backgroundColor:'#1877f2',
        transition:'.1s all',
        '&:hover': {
            backgroundColor:'#166FE5',
            cursor:'pointer'
        }
    },
    recorved: {
        color:'#1877f2',
        fontSize:'15px',
        textAlign:'center',
        fontWeight:'500',
        margin:'15px 0 20px',
    },
    create: {
        color:'white',
        fontSize:'18px',
        margin:'0 auto',
        lineHeight:'32px',
        width:'200px',
        padding:'7px',
        transition:'.1s all',
        backgroundColor:'#42b72a',
        border:'1px solid #42b72a',
        borderRadius:'6px',

        '&:hover': {
            backgroundColor:'#36A420',
            cursor:'pointer'
        }

    }

}))