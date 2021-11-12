import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({ 
    registerContainer: {
        position:'relative',
        width:'100%',
        height:'100vh',
        backgroundColor:'var(--bg-second)'
    },
    form: {
        display:'flex',
        flexDirection:'column',
        // maxWidth:'400px',
        backgroundColor:'var(--bg-first)',
        boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
        padding:'20px 28px',
        borderRadius:'9px',
        position:'absolute',
        left:'50%',
        top:'50% !important',
        transform:'translate(-50% , -50%)',
    },
    create: {
        color:'white',
        fontSize:'18px',
        lineHeight:'32px',
        position:"relative",
        margin:'10px 0',
        left:'50%',
        transform:'translate(-50%)',
        padding:'7px',
        transition:'.1s all',
        backgroundColor:'#42b72a',
        border:'1px solid #42b72a',
        borderRadius:'6px',
        '&:hover': {
            backgroundColor:'#36A420',
            cursor:'pointer'
        }
    },
    input : {
        margin:'8px 0',
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
    
}))