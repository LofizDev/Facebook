import React, { useState, useRef } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { useStyles } from './styleBox'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import { Close } from '@material-ui/icons';
import CancelAndSave from '../../../common/buttons/CancelAndSave';
import getCroppedImg from '../../../utils/cropImage';
import { checkImage } from '../../../utils/imageUpload'
import Error from '../../../common/buttons/Error';
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileUsers } from '../../../redux/actions/profileAction'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'

function ChangesAvatarBox({ viewProfile, setViewProfile, setSelectionViewProfile }) {
    const classes = useStyles();
    const { t } = useTranslation()
    const [image, setImage] = useState(null)
    const [croppedArea, setCroppedArea] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const inputRef = useRef()
    const [isError, setIsError] = useState(false)
    // Redux
    const dispatch = useDispatch()
    const { auth, alert } = useSelector(state => state)


    // Cropped image
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };


    // Select file
    const onSelectFile = async (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setImage(reader.result);
            });
        }
        // Handle Error(just file image)
        const file = event.target.files[0]
        const err = checkImage(file)
        err ? setIsError(true) : setIsError(false)
        if (err) return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } })
    };

    // Update avatar
    const onUpload = async (e) => {
        const canvas = await getCroppedImg(image, croppedArea)
        const avatar = canvas.toDataURL("image/jpeg");

        e.preventDefault()
        dispatch(updateProfileUsers({ avatar, auth }))
    }

    // Show Error 
    if (alert.error && isError) {
        return (
            <Error setIsError={setIsError} setViewProfile={setViewProfile} />
        )
    } else {
        return (
            <Dialog
                open={viewProfile}
                onClose={() => { setViewProfile(false); setSelectionViewProfile(false) }}
            >
                <form onSubmit={onUpload} className={classes.changeAvatarContainer}>
                    <div className={classes.title}>{t('capnhatanhdaidien')}</div>
                    <div onClick={() => setViewProfile(false)} className={classes.closeIcon}>
                        <Close />
                    </div>
                    {/* Choose Img */}
                    {image === null && (
                        <label id='update-avatar' className={classes.upload}>+ {t('taianhlen')}
                            <input type="file" ref={inputRef} onChange={onSelectFile} accept="image/*" />
                        </label>
                    )}
                    {image && (
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
                            </div>
                        </React.Fragment>
                    )}
                    {/* Save and cancel */}
                    {image && (
                        <div className={classes.footerPreview}>
                            <CancelAndSave setViewProfile={setViewProfile} />
                        </div>
                    )}
                </form>
            </Dialog>
        )
    }
}

export default ChangesAvatarBox
