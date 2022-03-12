import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next'
import textEffect from '../../../images/textEffect.png'
import Tooltip from '@material-ui/core/Tooltip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { checkImage } from '../../../utils/imageUpload';
import PublicIcon from '@material-ui/icons/Public';
import CameraIcon from '@material-ui/icons/Camera';
import { Gif, LinkedCamera, PhotoLibrary, SentimentSatisfiedAlt } from '@material-ui/icons';
import { useStyles } from './createPostStyle';
import clsx from 'clsx'
import Picker from 'emoji-picker-react';
// Redux
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';
import { useSelector, useDispatch } from 'react-redux'
import { createPost } from '../../../redux/actions/postAction';

const styles = (theme) => ({
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
        padding: theme.spacing(0),
    },
}))(MuiDialogContent);



export default function CreatePostsBox() {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation()
    const classes = useStyles()
    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [imagesSelected, setImagesSelected] = useState([])

    // Redux
    const { status, auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const sliceUserName = auth.user.fullname.split(' ').slice(-1)
    const videoRef = useRef()
    const canvasRef = useRef()
    const [tracks, setTracks] = useState('')
    const [stream, setStream] = useState(false)



    // Show Emoji
    const onEmojiClick = (event, emojiObject) => {
        setInputStr(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    // Show box
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
        const newImages = []
        files.forEach(file => {
            let error = checkImage(file)
            if (error) return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: error } })
            return newImages.push(file)
        })
        setImagesSelected([...imagesSelected, ...newImages])
    }
    // Get media stream
    const hanldeStream = () => {
        setStream(true)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(mediaStream => {
                    videoRef.current.srcObject = mediaStream
                    videoRef.current.play()
                    const track = mediaStream.getTracks()
                    setTracks(track[0])
                }).catch(err => console.log(err))
        }
    }
    // Capture image from camera
    const takePicture = () => {
        const width = videoRef.current.clientWidth
        const height = videoRef.current.clientHeight

        canvasRef.current.setAttribute("width", width)
        canvasRef.current.setAttribute("height", height)

        // Create canvas
        const ctx = canvasRef.current.getContext('2d')
        ctx.drawImage(videoRef.current, 0, 0, width, height)

        // Create image from the canvas
        let URL = canvasRef.current.toDataURL()

        setImagesSelected([...imagesSelected, { camera: URL }])
    }


    // Closing camera
    const handleStopStream = () => {
        tracks.stop()
        setStream(false)
    }

    // Send value to Post action
    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(createPost({ inputStr, imagesSelected, auth }))
    }


    return (
        <form onSubmit={handleSubmit}>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {t('taobaiviet')}
                </DialogTitle>
                <DialogContent dividers>
                    {/* Info */}
                    <div className={classes.info} >
                        <img className={classes.avatar} src={auth.user.avatar} />
                        <div style={{ marginLeft: '15px', fontWeight: '500' }}>
                            <p >{auth.user.fullname}</p>
                            <div className={classes.publicIcons}>
                                <PublicIcon style={{ fontSize: '16.5px' }} />
                                <p className={classes.textPublic} >Public</p>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className={classes.content}>
                        <textarea
                            cols="45"
                            value={inputStr}
                            onChange={e => setInputStr(e.target.value)}
                            id={imagesSelected.length > 0 || stream ? 'smallSize' : 'bigSize'}
                            className='text-area'
                            placeholder={`${sliceUserName} ${t('bandangnghigithe')}`}
                            style={{
                                height: `${imagesSelected.length > 0 || stream ? '50px' : '100px'}`,
                                border: '0', outline: 0, resize: 'none',
                            }} >
                        </textarea>
                        <div className="picker-container">
                            {showPicker && <Picker
                                disableSearchBar={true}
                                pickerStyle={{ width: '100%' }}
                                onEmojiClick={onEmojiClick} />}
                        </div>
                        {/* Type post image */}
                        {imagesSelected.length <= 0 && stream === false && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <img width='38px' src={textEffect} alt="textEffect" />
                                <Tooltip onClick={() => setShowPicker(val => !val)} title="Emoji" placement="top-start">
                                    <SentimentSatisfiedAlt style={{ color: '#ddd', cursor: 'pointer' }} />
                                </Tooltip>
                            </div>
                        )}
                        {/* List images selected */}
                        <div
                            style={{
                                padding: imagesSelected.length > 0 ? '6px' : '0px',
                                border: imagesSelected.length > 1 ? '1px solid var(--divider)' : '',
                            }}
                            className={classes.imagelist}>
                            {imagesSelected.map((img, index) => (
                                <img
                                    key={index}
                                    className={classes.image}
                                    src={img.camera ? img.camera : URL.createObjectURL(img)}
                                    alt="selected"
                                />
                            ))}
                            <div onClick={() => setImagesSelected([])} className={classes.deleteListImages}>
                                <IconButton aria-label="close" className={classes.closeButton}>
                                    <CloseIcon fontSize='small' />
                                </IconButton>
                            </div>
                        </div>
                        {/* Upload from Camera */}
                        {stream && (
                            <div className={classes.stream}>
                                <div className={classes.VideoStream}>
                                    <video className={classes.frameCamera} autoPlay muted ref={videoRef}></video>
                                    <div className={classes.takePhotos}>
                                        <CameraIcon onClick={takePicture} fontSize='large' />
                                    </div>

                                </div>
                                <canvas ref={canvasRef} style={{ display: 'none' }} />
                                <div onClick={handleStopStream} className={classes.deleteListImages}>
                                    <IconButton aria-label="close" className={classes.closeButton}>
                                        <CloseIcon fontSize='small' />
                                    </IconButton>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Select type post */}
                    <div className={classes.navigation}>
                        <div> Add to your post</div>
                        <div className={classes.groupIcons}>
                            <LinkedCamera onClick={hanldeStream} className={clsx(classes.iconsCommon, classes.iconCamera)} />
                            {/* <LinkedCamera onClick={hanldeStream} className={clsx(classes.iconsCommon, classes.iconCamera)} /> */}
                            <label id='update-cover'>
                                <input onChange={handleChangeImage} type='file' multipleid='file' accept='image/*' />
                                <PhotoLibrary className={clsx(classes.iconsCommon, classes.iconPhotos)} />
                            </label>
                            <SentimentSatisfiedAlt className={clsx(classes.iconsCommon, classes.iconSatis)} />
                            <LocationOnIcon className={clsx(classes.iconsCommon, classes.iconLocation)} />
                            <Gif className={clsx(classes.iconsCommon, classes.iconGif)} />
                        </div>
                    </div>
                    {/* Submit */}
                    <div onClick={handleSubmit} className={classes.submit}>Post</div>
                </DialogContent>
            </Dialog >
        </form >
    );
}
