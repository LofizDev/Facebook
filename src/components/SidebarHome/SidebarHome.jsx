import React, { useState } from 'react'
import { useStyles } from './style'
import canthoImg from '../../images/khongsocho.jpg'
import reactImg from '../../images/depchanhxagr.jpg'
import { SidebarHomeData } from './SidebarHomeData'
import { KeyboardArrowDown } from '@material-ui/icons';
function SidebarHome() {
    const classes = useStyles();
    const [loadmore, setLoadmore] = useState(8)
    const [toogleLoad, setToggleLoad] = useState(false)

    // Handle Show more Sidebar
    function showItems() {
        setLoadmore(loadmore + 15)
        setToggleLoad(true)
    }
    // Handl Hide away Sidebar
    function hideItems() {
        setLoadmore(8)
        setToggleLoad(false)
    }

    return (
        <div className={classes.sibarContainer}>
            <ul className={classes.listItemSidebarHome}>
                <li className={classes.itemSidebarHome}>
                    <img style={{ borderRadius: '50%', objectFit: 'cover' }} className={classes.imgSbHome} src='https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/100105408_150159316623450_6233873745942079200_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=t09i6CYGXaAAX-BXlt0&_nc_ht=scontent.fsgn2-3.fna&oh=44832c0c15ae76f18c9b2c80f0433c16&oe=618E26F9' alt="icon" />
                    <p style={{fontWeight:'500'}} className={classes.textSbHome}>Khôi Lâm</p>
                </li>
                {SidebarHomeData.slice(0, loadmore).map((item, index) => (
                    <li key={index} className={classes.itemSidebarHome}>
                        <img className={classes.imgSbHome} src={item.icon} alt="icon" />
                        <p style={{fontWeight:'500'}} className={classes.textSbHome}>{item.title}</p>
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
                            <p style={{fontWeight:'500'}} className={classes.textSbHome}>Xem thêm</p>
                        </li>
                    )
                }
                {
                    toogleLoad === true && (
                        <li
                            onClick={hideItems}
                            className={classes.itemSidebarHome}>
                            <span className={classes.iconMore}>
                                <KeyboardArrowDown />
                            </span>
                            <strong style={{fontWeight:'500'}} className={classes.textSbHome}>Ẩn bớt</strong>
                        </li>
                    )
                }
            </ul>
            <div className={classes.footerSidebarHome}>
                <p style={{fontWeight:'500'}} className={classes.titleFooterSbHome}>Lối tắt của bạn</p>
                <li className={classes.itemSidebarHome}>
                    <img style={{ borderRadius: '8px', objectFit: 'cover' }} className={classes.imgSbHome} src={canthoImg} alt="icon" />
                    <p style={{fontWeight:'500'}} className={classes.textSbHome}>Hóng Hớt Cần Thơ</p>
                </li>
                <li className={classes.itemSidebarHome}>
                    <img style={{ borderRadius: '8px', objectFit: 'cover' }} className={classes.imgSbHome} src={reactImg} alt="icon" />
                    <p style={{fontWeight:'500'}} className={classes.textSbHome}>Đẹp Chanh Sả</p>
                </li>
                <p style={{ padding: '15px 8px', fontSize: '14px', color: '#65676b' }}>Quyền riêng tư  · Điều khoản  · Quảng cáo  · Lựa chọn quảng cáo   · Cookie  · xem thêm  · Facebook © 2021.</p>
            </div>
        </div>
    )
}

export default SidebarHome
