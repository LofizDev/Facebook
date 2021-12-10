import React, { useState, useEffect, useRef, useCallback } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { useStyles } from './styleBox'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { getOrientation } from 'get-orientation/browser'
import { useTranslation } from 'react-i18next'
import ImgDialog from './ImgDialog'
import { Close } from '@material-ui/icons';
import CancelAndSave from '../../../common/buttons/CancelAndSave';
import getCroppedImg from '../../../utils/cropImage';
// Redux
import { useDispatch } from 'react-redux'
import { updateProfileUsers } from '../../../redux/actions/profileAction'


function ChangesAvatarBox({ viewProfile, setViewProfile, setSelectionViewProfile }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [image, setImage] = useState(null)
    const [imageSrc, setImageSrc] = React.useState(null)
    const [croppedArea, setCroppedArea] = useState(null)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const inputRef = useRef()
    const [croppedImage, setCroppedImage] = useState(null)
    const [avatar, setAvatar] = useState(null)


    const ORIENTATION_TO_ANGLE = {
        '3': 180,
        '6': 90,
        '8': -90,
    }
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };

    const onClose = useCallback(() => {
        setCroppedImage(null)
    }, [])

    const onSelectFile = async (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setImage(reader.result);
            });
        }
        // if (rotation) {
        //     setImage = await getRotatedImage(imageDataUrl, rotation)
        // }
    };


    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                image, croppedAreaPixels, rotation
            )
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [imageSrc, croppedAreaPixels, rotation])


    const onUpload = async (e) => {
        const canvas = await getCroppedImg(image, croppedArea)
        console.log('canvas Image', canvas);
        const canvasDataUrl = canvas.toDataURL("image/jpeg");
        console.log('convert canvas to Base64', canvasDataUrl);

        setAvatar(canvasDataUrl)
        e.preventDefault()
        dispatch(updateProfileUsers(avatar))
    }



    return (
        <Dialog
            open={viewProfile}
            onClose={() => { setViewProfile(false); setSelectionViewProfile(false) }}
        >
            <form onSubmit={onUpload} className={classes.changeAvatarContainer}>
                {/* {imageSrc ? ( */}
                <div className={classes.title}>{t('capnhatanhdaidien')}</div>
                <div onClick={() => setViewProfile(false)} className={classes.closeIcon}>
                    <Close />
                </div>
                {/* Choose Img */}
                {/* {imageSrc === null && ( */}
                <label id='update-avatar' className={classes.upload}>+ {t('taianhlen')}
                    <input type="file" ref={inputRef} onChange={onSelectFile} accept="image/*" />
                </label>
                {/* )} */}
                {/* {imageSrc && ( */}
                <React.Fragment>
                    <div className={classes.cropContainer}>
                        <Cropper
                            image={image}
                            crop={crop}
                            rotation={rotation}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onRotationChange={setRotation}
                            cropShape="round"
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            showGrid={false}
                        />
                    </div>
                    <div className={classes.controls}>
                        <div className={classes.sliderContainer}>
                            <Typography
                                variant="overline"
                                classes={{ root: classes.sliderLabel }}
                            >
                                ZOOM
                            </Typography>
                            <Slider
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                id='sliderMUI'
                                aria-labelledby="Zoom"
                                classes={{ root: classes.slider }}
                                onChange={(e, zoom) => setZoom(zoom)}
                            />
                        </div>
                        <div className={classes.sliderContainer}>
                            <Typography
                                variant="overline"
                                classes={{ root: classes.sliderLabel }}
                            >
                                ROTATION
                            </Typography>
                            <Slider
                                value={rotation}
                                min={0}
                                max={360}
                                step={1}
                                aria-labelledby="Rotation"
                                classes={{ root: classes.slider }}
                                onChange={(e, rotation) => setRotation(rotation)}
                            />
                        </div>
                        <Button
                            onClick={showCroppedImage}
                            variant="contained"
                            color="primary"
                            size='small'
                            classes={{ root: classes.cropButton }}
                        >
                            {t('xemtruoc')}
                        </Button>
                    </div>
                    <ImgDialog img={croppedImage} onClose={onClose} />
                </React.Fragment>
                {/* )} */}
                {/* Save and cancel */}
                {/* {imageSrc && ( */}
                <div className={classes.footerPreview}>
                    <CancelAndSave setViewProfile={setViewProfile} />
                </div>
                {/* )} */}
                {/* <button onClick={onUpload}>UPload</button> */}
            </form>
        </Dialog>
    )
}

export default ChangesAvatarBox
