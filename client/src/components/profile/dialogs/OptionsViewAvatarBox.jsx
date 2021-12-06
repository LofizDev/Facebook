import { useStyles } from './styleBox'


function OptionsViewAvatarBox({ setSelectionViewProfile, viewProfile, setViewProfile }) {
    const classes = useStyles();

    return (
        <>
            <div style={{ display: viewProfile ? 'none' : '' }} className={classes.options}>
                <div className={classes.select}>
                    <div className={classes.icon}>
                        <i className={classes.viewIcon}></i>
                    </div>
                    <p className={classes.text}>Xem ảnh đại diện</p>
                </div>
                <div className={classes.select}>
                    <div className={classes.icon}>
                        <i className={classes.updateIcon}></i>
                    </div>
                    <p onClick={() => setViewProfile(true)} className={classes.text}>Cập nhật ảnh đại diện</p>
                </div>
            </div>
            <div onClick={() => setSelectionViewProfile(false)} className={classes.overlay}> </div>
        </>
    )
}


export default OptionsViewAvatarBox
