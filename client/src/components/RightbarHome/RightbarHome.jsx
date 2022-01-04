import { CreateNewFolder, MoreHoriz, Search } from '@material-ui/icons';
import React from 'react'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
function RightbarHome() {
    const classes = useStyles();
    const { t } = useTranslation()

    return (
        <div className={classes.rightbarContainer}>
            {/* List Ads Box */}
            <p className={classes.textTop}>{t('duoctaitro')}</p>
            <div className={classes.listAdsBox}>
                <div className={classes.adsBox}>
                    <img className={classes.imgAds} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t45.1600-4/p285x285/236884838_23848163416440690_3538450119692581249_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=UXWriw1kc1sAX8wyIG8&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT9QXk40sVWT1712gA0RxmI2MuAB9Btix0dtSe6GPoGOlw&oe=61C87E98" alt="adsbox" />
                    <p className={classes.titleBox}>
                        <span>Get Git and Get Going</span>
                        <span className={classes.linkAds}>backlog.com</span>
                    </p>
                </div>
            </div>
            {/* List Contact friends */}
            <div className={classes.listUserContact}>
                <div className={classes.listContactTitle}>
                    <p className={classes.title}>{t('nguoilienhe')}</p>
                    <p className={classes.listIcon}>
                        <span>
                            <CreateNewFolder className={classes.iconRightbar} style={{ fontSize: '20px' }} />
                        </span>
                        <span>
                            <Search className={classes.iconRightbar} style={{ fontSize: '20px', margin: '0 17px' }} />
                        </span>
                        <span>
                            <MoreHoriz className={classes.iconRightbar} style={{ fontSize: '20px' }} />
                        </span>
                    </p>
                </div>
                {/* User online */}
                <ul className={classes.userOnline}>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/246491254_1850271718494097_2991996296997918836_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EDF8bo_OxWEAX_JYPe9&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT__cyT7_sAWKB0uyIzxjEkanvLLY_WJ2nibkSNi0paRAw&oe=61C6F786" alt="avatar" />
                        </p>
                        <span className={classes.userName}>To Anh</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/118084635_1508580382663234_2757051787973960493_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=o-NRKQpA9tcAX_AlBn4&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-goaiAPZvNi318KLbKqvg16G3L2RYrfP1NQ0vG_QlQzg&oe=61E7FBC1" alt="avatar" />
                        </p>
                        <span className={classes.userName}>P.Dung</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/267880417_1933094926892378_7658695945201344728_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qBv0jugtFXMAX-tLkWy&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT_VmtgnxFnazIGbluNnNrweWUmQDQMixWv9bXG2mjSUPQ&oe=61C8777E" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Trung Pham</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/64621780_849565512089290_7999629205891448832_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=UrMOC3BHzqUAX-0Imlq&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT9KIu7ZsiyC_RaCjg69SjPOHX5xQ5qcwLBGk8Qf8THZqw&oe=61E8D481" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Loan Em</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/77314676_958610104518163_3466990595963092992_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=fj72VTNRe-4AX_KvYaI&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT_zwH-xaU3Cr7JwbGjU4aqHk3fd4ltSNtfcve0dMBiedg&oe=61EA3B57" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Kim Ngân</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/55443352_2176599052654420_1937021338438860800_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=qXo3J57n7iMAX9na-ci&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT9essbWouiEWVrMLnubT6o-D3bsWrMdQLBzpQA7j_xW-Q&oe=61E7C09A" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Pham Kiem Trung</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/95568889_677914116370380_6441851572723908608_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=3B95TnMWr_kAX__3Jav&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT93qH7Xb1bvo_l25CGgMPMFXUmVHXJottWKgYyGqSHDJA&oe=61E6F319" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Ngô Kiều Trang</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/246013927_3074140129483094_6192919697512282112_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RQzK7Kds2IkAX_8flmD&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_Zzqqsk6n2Kbu_nKkmbmDcqdJzcAqnxbciApI68cnQhw&oe=61C707D0" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Thái Quỳnh</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                            <p className={classes.status}></p>
                            <img className={classes.avatar} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/257917381_3071858313097742_4470194902454936057_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rStyGpP3lsAAX9MU0K6&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-oCyAbGNKcEnIORcpvYaIexhbxKmpdmXjrzKxagJHEOw&oe=61C74548" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Ngọc Dương</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default RightbarHome
