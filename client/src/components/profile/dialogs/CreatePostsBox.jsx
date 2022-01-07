import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';
import textEffect from '../../../images/textEffect.png'
import Tooltip from '@material-ui/core/Tooltip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { checkImage } from '../../../utils/imageUpload';
import PublicIcon from '@material-ui/icons/Public';
import { Gif, LinkedCamera, PhotoLibrary, SentimentSatisfiedAlt } from '@material-ui/icons';
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
            <Typography align='center' variant="h6">{children}</Typography>
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




export default function CreatePostsBox() {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { status, auth } = useSelector(state => state)
    const sliceUserName = auth.user.fullname.split(' ').slice(-1)
    const [content, setContent] = useState('')

    useEffect(() => {
        if (status) { setOpen(true) }
    }, [dispatch, alert])

    const handleClose = () => {
        setOpen(false);
        dispatch({ type: GLOBALTYPES.STATUS, payload: false })
    };

    // Handle change image
    const handleChangeImage = e => {
        const files = [...e.target.files]
        let newImages = []
        files.forEach(file => {
            let error = checkImage(file)
            if (error) return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error } })
            return newImages.push(file)
        })
    }

    return (
        <form>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {t('taobaiviet')}
                </DialogTitle>
                <DialogContent dividers>
                    {/* Info */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ objectFit: 'cover', borderRadius: '50%' }} width='40px' src={auth.user.avatar} />
                        <div style={{ marginLeft: '15px', fontWeight: '500' }}>
                            <p >{auth.user.fullname}</p>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px', padding: '5px 6px', borderRadius: '6px', width: '75px', backgroundColor: 'var(--bg-input)' }}>
                                <PublicIcon style={{ fontSize: '16.5px' }} />
                                <p style={{ backgroundColor: 'var(--bg-input)', marginLeft: '3px', fontSize: '14px' }}>Public</p>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <textarea
                        onChange={e => setContent(e.target.value)}
                        cols="45"
                        className='text-area'
                        placeholder={`${sliceUserName} ${t('bandangnghigithe')}`}
                        style={{
                            minHeight: '100px', marginTop: '15px',
                            border: '0', outline: 0, resize: 'none'
                        }} >
                    </textarea>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img width='38px' src={textEffect} alt="textEffect" />
                        <Tooltip title="Emoji" placement="top-start">
                            <SentimentSatisfiedAlt style={{ color: '#ddd', cursor: 'pointer' }} />
                        </Tooltip>
                    </div>
                    {/* Select type post */}
                    <div
                        style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', marginTop: '20px', padding: '12px', border: '1.3px solid var(--media-inner-border',
                            borderRadius: '12px'
                        }}>
                        <p>Add to your post</p>
                        <div style={{ cursor: 'pointer' }}>
                            <LinkedCamera style={{ fontSize: '26px', marginLeft: '14px', color: '#1771E6' }} />
                            <label style={{ cursor: 'pointer' }} id='update-cover'>
                                <input
                                    onChange={handleChangeImage}
                                    type='file'
                                    multiple
                                    id='file'
                                    accept='image/*'
                                />
                                <PhotoLibrary style={{ fontSize: '26px', marginLeft: '14px', color: '#41B35D' }} />
                            </label>
                            <SentimentSatisfiedAlt style={{ fontSize: '26px', marginLeft: '14px', color: '#EAB026' }} />
                            <LocationOnIcon style={{ fontSize: '26px', marginLeft: '14px', color: '#E84F3A' }} />
                            <Gif style={{ fontSize: '26px', marginLeft: '14px', color: '#1771E6' }} />
                        </div>
                    </div>
                    {/* Submit */}
                    <div
                        style={{
                            textAlign: 'center', marginTop: '16px', padding: '8px 0', cursor: 'pointer',
                            color: '#fff', fontWeight: '500',
                            backgroundColor: "var(--primary-button-background)", borderRadius: '8px'
                        }}>
                        Post
                    </div>
                </DialogContent>
            </Dialog>
        </form>
    );
}
