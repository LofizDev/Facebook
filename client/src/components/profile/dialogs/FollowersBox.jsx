import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { useStyles } from './styleBox'
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


function FollowersBox({ setFollowersBox, followersBox, currentInfoUser }) {
    const classes = useStyles();
    const handleClose = () => {
        setFollowersBox(false)
    };


    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={followersBox}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Followers
                </DialogTitle>
                <DialogContent dividers>
                    <div className={classes.listFollow}>
                        {currentInfoUser.followers.map((user) => (
                            <div key={user._id} className={classes.user}>
                                <div className={classes.userInfo}>
                                    <img className={classes.avatarUser} src={user.avatar} alt="avatar" />
                                    <p className={classes.fullnameUser}>{user.fullname}</p>
                                </div>
                                <div className={classes.btnFollow}>Follow</div>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default FollowersBox
