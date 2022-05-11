import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    profileTop: {
        backgroundColor: 'var(--bg-first)'
    },
    infoContainer: {
        boxShadow: '0 1px 2px var(--shadow1)'
    },
    info: {
        maxWidth: '1100px',
        margin: '56px auto 0'
    },
}))