import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    musicContainer: {
        position: 'absolute',
        bottom: '40px',
        width: '440px',
        height: '450px',
        boxShadow: ' 0 12px 28px 0 var(--shadow2),0 2px 4px 0 var(--shadow1),inset 0 0 0 1px var(--shadow-inset)',
        borderRadius: '12px',
        zIndex: 99,
        left: '-270px',
        backgroundColor: 'var(--bg-first)'
    },
    category: {
        display: 'flex',
        paddingTop: '25px'
    },
    coverCate: {
        borderRadius: '8px'
    },
    option: {
        fontSize: '15px',
        width: '20%',
        margin: '12px 7px',
        textAlign: 'center',
        justifyContent: 'center',
        borderBottom: '2px solid transparent',
        height: '36px',
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
        alignItems: 'center'
    },
    // listSongs
    listSongs: {
        marginTop: '40px',
        height: '325px',
        overflow: 'scroll',
    },
    singleSong: {
        display: 'flex',
        alignItems: 'center',
        padding: '6px 8px',
        justifyContent: 'space-between',
        marginLeft: '4px',
        borderRadius: '12px',

        '&:hover': {
            backgroundColor: 'var(--bg-input)',
        }
    },
    singleSongLeft: {
        display: 'flex',
        alignItems: 'center',
    },
    songTitle: {
        fontWeight: '500'
    },
    songAuthor: {
        color: 'var(--secondary-text)'
    },
    songRight: {
        marginLeft: '20px'
    },
    chooseSong: {
        width: '23px',
        color: 'var(--border-img-user)'
    }
}))