import React, { useState } from 'react'
import { useStyles } from './style'
import canthoImg from '../../images/khongsocho.jpg'
import reactImg from '../../images/depchanhxagr.jpg'
import { SidebarHomeData } from './SidebarHomeData'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
function SidebarHome() {

    const classes = useStyles();
    const [loadmore, setLoadmore] = useState(8)
    const [toogleLoad, setToggleLoad] = useState(false)
    const { t } = useTranslation()
    const { auth } = useSelector(state => state)

    // Show more Sidebar
    function showItems() {
        setLoadmore(loadmore + 15)
        setToggleLoad(true)
    }
    // Handle Hide away Sidebar
    function hideItems() {
        setLoadmore(8)
        setToggleLoad(false)
    }

    return (
        <div className={classes.sibarContainer}>
            <ul className={classes.listItemSidebarHome}>
                <li className={classes.itemSidebarHome}>
                    <img style={{ borderRadius: '50%', objectFit: 'cover' }} className={classes.imgSbHome} src={auth.user.avatar} alt="icon" />
                    <p style={{ fontWeight: '500' }} className={classes.textSbHome}>{auth.user.fullname}</p>
                </li>

                {SidebarHomeData.slice(0, loadmore).map((item, index) => (
                    <li key={index} className={classes.itemSidebarHome}>
                        <img className={classes.imgSbHome} src={item.icon} alt="icon" />
                        <p
                            style={{ fontWeight: '500' }}
                            className={classes.textSbHome}>
                            {t(item.title)}
                        </p>
                    </li>
                ))}

                {
                    toogleLoad === false && (
                        <li
                            onClick={showItems}
                            className={classes.itemSidebarHome}>
                            <span className={classes.iconMore}>
                                <KeyboardArrowDown />
                            </span>
                            <p style={{ fontWeight: '500' }} className={classes.textSbHome}>{t('xemthem')}</p>
                        </li>
                    )
                }
                {
                    toogleLoad === true && (
                        <li
                            onClick={hideItems}
                            className={classes.itemSidebarHome}>
                            <span className={classes.iconMore}>
                                <KeyboardArrowUp />
                            </span>
                            <strong style={{ fontWeight: '500' }} className={classes.textSbHome}>{t('anbot')}</strong>
                        </li>
                    )
                }
            </ul>
            <div className={classes.footerSidebarHome}>
                <p style={{ fontWeight: '500' }} className={classes.titleFooterSbHome}>{t('loitatcuaban')}</p>
                <li className={classes.itemSidebarHome}>
                    <img style={{ borderRadius: '8px', objectFit: 'cover' }} className={classes.imgSbHome} src={canthoImg} alt="icon" />
                    <p style={{ fontWeight: '500' }} className={classes.textSbHome}>Hóng Hớt Cần Thơ</p>
                </li>
                <li className={classes.itemSidebarHome}>
                    <img style={{ borderRadius: '8px', objectFit: 'cover' }} className={classes.imgSbHome} src={reactImg} alt="icon" />
                    <p style={{ fontWeight: '500' }} className={classes.textSbHome}>Đẹp Chanh Sả</p>
                </li>
            </div>
        </div>
    )
}

export default SidebarHome
