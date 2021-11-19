import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import penIcon from '../../images/penIcon.png'
import addIcon from '../../images/addStoryIcon.png'
import { useStyles } from './style'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import clsx from 'clsx';
function Info() {
    const [userData, setUserData] = useState([])
    const classes = useStyles();
    const { id } = useParams()
    const { auth } = useSelector(state => state)
    console.log(userData);
    // Get data of user
    useEffect(() => {
        if (id === auth?.user?._id) {
            setUserData([auth.user])
        } else {
        }
    }, [id, auth.user])

    return (
        <>
            {/* Cover image */}
            <div className={classes.coverImage}>
                <img className={classes.coverImage} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/187720804_182424740430572_2886129554968541568_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=pvbHRS8tvyYAX8uPFBD&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-4.fna&oh=2783b6e8140c8b8918a4678db76abff0&oe=61BE988A" alt="cover" />
                <div className={classes.btnAddCoverImage}>
                    <PhotoCameraIcon className={classes.iconCamera} />
                    <p className={classes.textCover}>Thêm ảnh bìa</p>
                </div>
            </div>
            {/* Info */}
            <div className={classes.info}>
                <div className={classes.infoLeft}>
                    <div className={classes.userImg}>
                        <img className={classes.avartar} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/100105408_150159316623450_6233873745942079200_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=pwZcE0rcxTcAX8dP6Uh&_nc_ht=scontent.fsgn2-4.fna&oh=a28aa24d4598adfff5ce24df73e19df7&oe=61BE3C53" alt="avartar" />
                        <p className={classes.changeAvartar}>
                          <PhotoCameraIcon className={clsx(classes.iconCamera, classes.iconCameraCustom)} />
                        </p>
                    </div>
                    <div className={classes.infoUser}>
                        <div className={classes.fullname}>
                            <h1>Khôi Lâm</h1>
                            <div class="tooltip" id='verify'>
                                <span class="tooltiptext">Facebook đã xác nhận đây là trang cá nhân thật của người của công chúng này.
                                </span>
                            </div>
                        </div>
                        <p className={classes.follow}>
                            <span className={classes.followin}>88 người theo dõi</span>
                            <span> • </span>
                            <span className={classes.follower}>  9 đang theo dõi</span>
                        </p>
                    </div>
                </div>
                <div className={classes.infoRight}>
                    <div className={classes.addStory}>
                        <img className={classes.iconAdd} width='16px' height='16px' src={addIcon} alt="icon" />
                        <span>Thêm vào tin</span>
                    </div>
                    <div className={classes.adjustProfile}>
                        <img className={classes.iconAdjust} width='16px' height='16px' src={penIcon} alt="icon" />
                        <span>Chỉnh sửa</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Info
