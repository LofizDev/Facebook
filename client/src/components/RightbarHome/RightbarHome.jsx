import { CreateNewFolder, MoreHoriz, Search } from '@material-ui/icons';
import React from 'react'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
function RightbarHome() {
    const classes = useStyles();
    const{t} = useTranslation()

    return (
        <div className={classes.rightbarContainer}>
             {/* List Ads Box */}
            <p className={classes.textTop}>{t('duoctaitro')}</p>
            <div className={classes.listAdsBox}>
                <div className={classes.adsBox}>
                    <img className={classes.imgAds} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/194484182_23848002198700391_4322638678952833879_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_ohc=OZxphRCudjUAX_jze-g&_nc_ht=scontent.fsgn2-4.fna&oh=f1a983172b57cc6f6ecdc16b012511f2&oe=61990786" alt="adsbox" />
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
                            <CreateNewFolder className={classes.iconRightbar} style={{fontSize:'20px'}}/>
                        </span>
                        <span>
                            <Search className={classes.iconRightbar} style={{fontSize:'20px',margin:'0 17px'}}/>
                        </span>
                        <span>
                           <MoreHoriz className={classes.iconRightbar} style={{fontSize:'20px'}}/>
                        </span>
                    </p>
                </div>
                {/* User online */}
                <ul className={classes.userOnline}>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>    
                        <img className={classes.avatar} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/104985870_660962834631563_4186302528373793895_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=NGF8Ra5SrWUAX-FnACG&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-3.fna&oh=001c249894e4bec53b8b58e8df8a6989&oe=61B93188" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Nam</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/cp0/p56x56/247918301_589760292338491_1077570659839924630_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=qmlGIRI8c_cAX9OvrpV&_nc_ht=scontent.fsgn2-2.fna&oh=67432f4b17beb7063c625648cddf4ae5&oe=6199A9F7" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Phan Hoàng Huy</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/cp0/p56x56/245926013_3075617412758496_5474522531847828746_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ZSCIzRdw2bUAX-XTbyy&_nc_ht=scontent.fsgn2-5.fna&oh=ddde3e182e0b395d71fa5f39451e5856&oe=6199F7DE" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Nhu Y Tran</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/cp0/p56x56/245346970_1760554037477382_4514312245559366923_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Y6EhRDTYJpwAX8NW-yJ&_nc_ht=scontent.fsgn2-5.fna&oh=14912439346cd550e51733493a84be43&oe=6198FE7E" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Quốc Toàn</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/cp0/c0.22.56.56a/p56x56/241293611_380819726855079_2359189613324381125_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vVpFq3Ymc_IAX-ZUs3I&_nc_ht=scontent.fsgn2-4.fna&oh=dbafa44f4ed36e07fe61f16969004590&oe=61998EF4" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Kim Ngân</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/cp0/p56x56/240607145_1113486902516587_4371241483706920436_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ODiEXv4DCTEAX-qpPY8&_nc_ht=scontent.fsgn2-2.fna&oh=7911f818343fafc27493e8d5a1688854&oe=619A811A" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Huỳnh Huế Châm</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/cp0/p56x56/241193373_1235115156963550_2897690252561638361_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=yxiZLeLQmX8AX_D1053&_nc_ht=scontent.fsgn2-6.fna&oh=f4e943b3191c0f21008a9c632e94892b&oe=61991ED5" alt="avatar" />
                         </p>
                        <span className={classes.userName}>Kim Ngân</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/117435724_189532109228475_8055752153294700957_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nLYDKj_Mvh8AX8hii6E&_nc_ht=scontent.fsgn2-3.fna&oh=143ad320470cc90662bd4ddf468071e6&oe=61BBF5E9" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Phạm Khúc Mẫn Tú</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-1/cp0/p56x56/240707192_887604925439796_2785848046080319449_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=f1CtNSPq3uMAX-flS9m&_nc_ht=scontent.fsgn2-2.fna&oh=e6066a0f476b63e5d7c93f1c9d7c01af&oe=619A3C6E" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Ngọc Đàn</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default RightbarHome
