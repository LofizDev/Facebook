import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    sibarContainer: {
        padding:'20px 5px',
        backgroundColor:'var(--bg-second)',
        height:'calc(100vh - 56px)',
        position:'fixed',
        width:'24%',
        '&:hover': {
            overflowY:'scroll'
        }
    },
    itemSidebarHome: {
        display:'flex',
        cursor:'pointer',
        alignItems:'center',
        padding:'8px 8px',
        borderRadius:'12px',
        transition:'.1s all',
        '&:hover': {
            backgroundColor: 'var(--hover-bg-sidebar)'
        }
    },
    imgSbHome: {
        width:'36px',
        height:'36px',
    },
    iconMore: {
        width:'36px',
        height:'36px',
        borderRadius:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'var(--overlay-gray)'
    },
    textSbHome: {
        marginLeft:'15px'
    },
    titleFooterSbHome: {
        marginTop:'20px',
        color:'var(--secondary-text)',
        fontSize:'17.5px',
        padding:'20px 8px 10px',
        borderTop:'1px solid #ddd'
    },
    MoreIcon: {
      

    },
    // Custom scrollbar
    '@global': {
        '*::-webkit-scrollbar': {
            width: '8px'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset #a6afe0',
          borderRadius: '10px'
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '7px',
        //   height: '50px',
          backgroundColor: 'rgba(0,0,0,.1)',
          '-webkit-box-shadow': 'inset 0px 0px 6px rgba(160, 200, 241, 0.5)',
        }
      }
    
}))