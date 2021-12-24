import React from 'react'
function Cropper() {

    const classes = useStyles();
    const { t } = useTranslation()
    const [image, setImage] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)


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
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
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
                <div className={classes.footerPreview}>
                    <CancelAndSave setViewProfile={setViewProfile} />
                </div>
            </form>
        </Dialog>
    )

}

export default Cropper
