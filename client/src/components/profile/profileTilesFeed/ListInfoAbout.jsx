import React from 'react'
import { useTranslation } from 'react-i18next'
import { useStyles } from '../style'
import { join, follow, From, liveAT, relationshipIcon } from '../../../common/icon/Icons'
function ListInfoAbout({ user }) {

    const { t } = useTranslation()
    const classes = useStyles()

    return (
        <div className={classes.listInfo}>
            <div className={classes.labelAboutInfo} >
                <img className={classes.iconAboutProfile} src={join} alt="icon" />
                <span className={classes.titleInfo}>  {t('thamgiavao')} Tháng 1 năm 2021</span>
            </div>
            <div className={classes.labelAboutInfo} >
                <img className={classes.iconAboutProfile} src={liveAT} alt="icon" />
                <span style={{ display: 'flex' }} className={classes.titleInfo}>
                    <p>Sống tại  &nbsp; </p>
                    <p className={classes.from}>{user.liveAt}</p>
                </span>
            </div>
            <div className={classes.labelAboutInfo} >
                <img className={classes.iconAboutProfile} src={From} alt="icon" />
                <span style={{ display: 'flex' }} className={classes.titleInfo}>
                    <p>Đến từ  &nbsp; </p>
                    <p className={classes.from}>{user.from}</p>
                </span>
            </div>
            <div className={classes.labelAboutInfo} >
                <img className={classes.iconAboutProfile} src={relationshipIcon} alt="icon" />
                <span style={{ display: 'flex' }} className={classes.titleInfo}>
                    <p >{user.relationship}</p>
                </span>
            </div>
            <div className={classes.labelAboutInfo} >
                <img className={classes.iconAboutProfile} src={follow} alt="icon" />
                <span className={classes.titleInfo}>Có <label className={classes.followCount}>284</label> người theo dõi</span>
            </div>
            {/* List Hobbies */}
            <div className={classes.listInfoHobbies}>
                {user.hobbies.map((item, index) => (
                    <div key={index} className={classes.hobbie}>
                        {item}
                    </div>
                ))}


            </div>
        </div>
    )
}

export default ListInfoAbout
