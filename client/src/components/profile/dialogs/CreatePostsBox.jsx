
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
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { checkImage } from '../../../utils/imageUpload';
import PublicIcon from '@material-ui/icons/Public';
import CameraIcon from '@material-ui/icons/Camera';
import { Gif, LinkedCamera, PhotoLibrary, SentimentSatisfiedAlt } from '@material-ui/icons';
import { useStyles } from './createPostStyle';
import clsx from 'clsx'
import Paper from '@material-ui/core/Paper';
import { imageEffectData } from '../data/TextEffectData'
import EmojiModal from './EmojiModal';
import { Zoom } from '@material-ui/core';

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
    const [rendering, setRendering] = useState(false)
    const [checked, setChecked] = React.useState(false);

    const [imagesSelected, setImagesSelected] = useState([])
    const [optionTextEffect, setOptionsTextEffect] = useState('')
    const [otherTextEffect, setOtherTextEffect] = useState(false)

    // Redux
    const { status, auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const sliceUserName = auth.user.fullname.split(' ').slice(-1)
    const videoRef = useRef()
    const canvasRef = useRef()
    const [tracks, setTracks] = useState('')
    const [stream, setStream] = useState(false)



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
        dispatch(createPost({ inputStr, imagesSelected, auth }))
    }

    // Check Rendering textEffect
    useEffect(() => {
        if (imagesSelected.length <= 0 && stream === false && inputStr.length < 130 && optionTextEffect !== '') {
            setRendering(true)
        } else {
            setRendering(false)
        }
    }, [inputStr, optionTextEffect])



    return (
        <form onSubmit={handleSubmit}>
            <div className={otherTextEffect ? 'otherHobbies-active' : 'otherHobbies'}>
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle className={classes.createPostContainer} id="customized-dialog-title" onClose={handleClose}>
                        {t('taobaiviet')}
                    </DialogTitle>
                    <DialogContent className={classes.createPostContainer} dividers>
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
                        <div className={rendering ? classes.contentNotScroll : classes.content}>
                            {/* Rendering if textEffect running */}
                            {rendering && (
                                <div className={classes.textEffect1}>
                                    <textarea
                                        value={inputStr}
                                        onChange={e => setInputStr(e.target.value)}
                                        id={imagesSelected.length > 0 || stream ? 'smallSize' : 'bigSize'}
                                        className={classes.textArea}
                                        placeholder={`${sliceUserName} ${t('bandangnghigithe')}`}
                                        style={{
                                            height: `${imagesSelected.length > 0 || stream ? '50px' : '100px'}`,
                                            border: '0', outline: 0, resize: 'none',
                                        }} >
                                    </textarea>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '3px 16px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            {imagesSelected.length <= 0 && stream === false && inputStr.length < 130 && (
                                                <div onClick={() => setChecked(!checked)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                                    <img width='38px' src={textEffect} alt="textEffect" />
                                                </div>
                                            )}
                                            {/* Show Image Effect */}
                                            <div style={{ display: 'flex', }}>
                                                <Zoom onClick={() => setOptionsTextEffect('')} in={checked}>
                                                    <div style={{ margin: '0 8px' }} className={optionTextEffect === '' ? classes.wrapperTextEffect : classes.activeDefault}></div>
                                                </Zoom>
                                                {imageEffectData.map(item => (
                                                    <Zoom onClick={() => { setOptionsTextEffect(item.value) }} key={item.key}
                                                        style={{ marginRight: '8px', boxShadow: 'none', cursor: 'pointer' }} in={checked}>
                                                        <Paper className={classes.paper}>
                                                            <img className={item.value == optionTextEffect ? classes.active : classes.unActive}
                                                                src={item.image} style={{ borderRadius: '6px' }} width='30px' height='30px' alt="image" />
                                                        </Paper>
                                                    </Zoom>

                                                ))}
                                            </div>
                                        </div>
                                        <EmojiModal setInputStr={setInputStr} />
                                    </div>
                                </div>
                            )}

                            {/* Rendering if textEffect not run */}

                            {!rendering && (
                                <div >
                                    <textarea
                                        value={inputStr}
                                        onChange={e => setInputStr(e.target.value)}
                                        id={imagesSelected.length > 0 || stream ? 'smallSize' : 'bigSize'}
                                        className={classes.textArea1}
                                        placeholder={`${sliceUserName} ${t('bandangnghigithe')}`}
                                        style={{
                                            height: `${imagesSelected.length > 0 || stream ? '50px' : '100px'}`,
                                            border: '0', outline: 0, resize: 'none',
                                        }} >
                                    </textarea>
                                    {imagesSelected.length > 0 && (
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div></div>
                                            <EmojiModal setInputStr={setInputStr} />
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                        {imagesSelected <= 0 && stream === false && inputStr.length < 130 && (
                                            <>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div onClick={() => setChecked(!checked)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                                        <img width='38px' src={textEffect} alt="textEffect" />
                                                    </div>
                                                    {/* Show Image Effect */}
                                                    <div style={{ display: 'flex', }}>
                                                        <Zoom onClick={() => setOptionsTextEffect('')} in={checked}>
                                                            <div style={{ margin: '0 8px' }} className={optionTextEffect === '' ? classes.wrapperTextEffect : classes.activeDefault}></div>
                                                        </Zoom>
                                                        {imageEffectData.map(item => (
                                                            <Zoom onClick={() => { setOptionsTextEffect(item.value) }} key={item.key}
                                                                style={{ marginRight: '8px', boxShadow: 'none', cursor: 'pointer' }} in={checked}>
                                                                <Paper className={classes.paper}>
                                                                    <img className={item.value == optionTextEffect ? classes.active : classes.unActive}
                                                                        src={item.image} style={{ borderRadius: '6px' }} width='30px' height='30px' alt="image" />
                                                                </Paper>
                                                            </Zoom>

                                                        ))}
                                                    </div>
                                                </div>
                                                <EmojiModal setInputStr={setInputStr} />
                                            </>
                                        )}
                                    </div>
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
                        <div style={{ marginTop: rendering ? '16px' : '0px' }} className={classes.navigation}>
                            <div> Add to your post</div>
                            <div className={classes.groupIcons}>
                                {optionTextEffect === '' && (
                                    <>
                                        <LinkedCamera onClick={hanldeStream} className={clsx(classes.iconsCommon, classes.iconCamera)} />
                                        <label id='update-cover'>
                                            <input onChange={handleChangeImage} type='file' multipleid='file' accept='image/*' />
                                            <PhotoLibrary className={clsx(classes.iconsCommon, classes.iconPhotos)} />
                                        </label>
                                    </>
                                )}
                                {optionTextEffect !== '' && (
                                    <>
                                        <LinkedCamera style={{ cursor: 'not-allowed' }} className={clsx(classes.iconsCommon, classes.iconCamera)} />
                                        <label id='update-cover'>
                                            <PhotoLibrary style={{ cursor: 'not-allowed' }} className={clsx(classes.iconsCommon, classes.iconPhotos)} />
                                        </label>
                                    </>
                                )}

                                <SentimentSatisfiedAlt className={clsx(classes.iconsCommon, classes.iconSatis)} />
                                <LocationOnIcon className={clsx(classes.iconsCommon, classes.iconLocation)} />
                                <Gif className={clsx(classes.iconsCommon, classes.iconGif)} />
                            </div>
                        </div>

                        {/* Submit */}
                        <div onClick={handleSubmit} className={inputStr.length > 0 ? classes.submit : classes.cantSubmit}>Post</div>
                    </DialogContent>
                </Dialog >
            </div>
        </form >
    );
}
