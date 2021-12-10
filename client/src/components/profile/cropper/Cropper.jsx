import React from 'react'

function Cropper() {

    const classes = useStyles();
    const { t } = useTranslation()
    const [image, setImage] = useState(null)
    const [croppedArea, setCroppedArea] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)



    const onCropComplete = () => {

    }

    const onSelectFile = (e) => {
        console.log(e);
    }




    // Handle Submit
    const handleSubmit = (e) => {
        // e.preventDefault()
        // dispatch(updateProfileUsers(avatar))
    }

    return (

        <Dialog
            open={viewProfile}
            onClose={() => { setViewProfile(false); setSelectionViewProfile(false) }}
        >
            <form onSubmit={handleSubmit} className={classes.changeAvatarContainer}>
                {/* {imageSrc ? ( */}
                <div className={classes.title}>{t('capnhatanhdaidien')}</div>
                <div onClick={() => setViewProfile(false)} className={classes.closeIcon}>
                    <Close />
                </div>
                {/* Choose Img */}
                {/* {imageSrc === null && ( */}
                <label id='update-avatar' className={classes.upload}>+ {t('taianhlen')}
                    <input type="file" onChange={onSelectFile} accept="image/*" />
                </label>
                {/* )} */}
                {/* {imageSrc && ( */}
                <React.Fragment>
                    <div className={classes.cropContainer}>
                        <Cropper
                            image={image}
                            crop={crop}
                            // rotation={rotation}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            // onRotationChange={setRotation}
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
                        {/* <div className={classes.sliderContainer}>
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
                            </div> */}
                        {/* <Button
                                onClick={showCroppedImage}
                                variant="contained"
                                color="primary"
                                size='small'
                                classes={{ root: classes.cropButton }}
                            >
                                {t('xemtruoc')}
                            </Button> */}
                    </div>
                    {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
                </React.Fragment>
                {/* )} */}
                {/* Save and cancel */}
                {/* {imageSrc && ( */}
                <div className={classes.footerPreview}>
                    <CancelAndSave setViewProfile={setViewProfile} />
                </div>
                {/* )} */}
            </form>
        </Dialog>
    )

}

export default Cropper
