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
                    <img className={classes.imgAds} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p960x960/234905665_23848293339020356_3302575557155411972_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=67cdda&_nc_ohc=TnvDNW4DDt8AX8qkfBw&_nc_ht=scontent.fsgn2-5.fna&oh=7c2a384379ca8c195c952e7caed602a0&oe=61701CA0" alt="adsbox" />
                    <p className={classes.titleBox}>
                        <span>Sacombank</span>
                        <span className={classes.linkAds}>sacombank.com.vn</span>
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
                        <img className={classes.avatar} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/163585031_2770770949840658_4097275933743315018_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=272-Rs70HQsAX92KrZb&_nc_ht=scontent.fsgn2-1.fna&oh=d5bb8f402530f67c9bc13452ff7b2e71&oe=61926FD5" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Nam</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/149829237_2970723659831754_7565316107636281036_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=PFvI83XtTJMAX8Ya-i7&_nc_ht=scontent.fsgn2-2.fna&oh=f286fa87f05c1004640d3e84d3ba0d84&oe=619274DF" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Phan Hoàng Huy</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/202310508_3034157593479486_6479080034705665019_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=v6pHL3oPtNwAX8iM63x&_nc_ht=scontent.fsgn2-1.fna&oh=ab61632b792483f7982b99061aeeb9de&oe=6192EFE9" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Nhu Y Tran</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/150523501_249573736798433_952841768081992693_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=HtzcIZYOP68AX91Q9HS&_nc_ht=scontent.fsgn2-1.fna&oh=0a59e7cb5ea5af9ba140b7b811da0dec&oe=619180F2" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Quốc Toàn</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/243228006_1508779259488538_6836902264214397387_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=-5Bu72KinkkAX-XapWJ&_nc_ht=scontent.fsgn2-5.fna&oh=bb0af5ab467dcbe6dddace9176e0ba04&oe=61918DBD" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Kim Ngân</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/245900925_861384471221304_7674195349813816768_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=zzQh3CUu-ewAX9mALV3&_nc_ht=scontent.fsgn2-5.fna&oh=fdf3aef2b3773a11f94a2e4a71b1a18a&oe=61903650" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Huỳnh Huế Châm</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/243228006_1508779259488538_6836902264214397387_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=-5Bu72KinkkAX-XapWJ&_nc_ht=scontent.fsgn2-5.fna&oh=bb0af5ab467dcbe6dddace9176e0ba04&oe=61918DBD" alt="avatar" />
                         </p>
                        <span className={classes.userName}>Kim Ngân</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/117435724_189532109228475_8055752153294700957_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=FIUDrihaBR8AX_ecYp0&_nc_ht=scontent.fsgn2-3.fna&oh=99b4ba9e2f6c6eb09a77d37d40b14336&oe=61907469" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Phạm Khúc Mẫn Tú</span>
                    </li>
                    <li className={classes.infoUser}>
                        <p className={classes.avatarTyof}>
                        <p className={classes.status}></p>   
                        <img className={classes.avatar} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/196284861_1128547094314495_58669642789748399_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=hkhx31LP5vkAX-8RJIc&_nc_ht=scontent.fsgn2-1.fna&oh=f91beaad6092c51e7b49879137e7964a&oe=618F47F4" alt="avatar" />
                        </p>
                        <span className={classes.userName}>Ngọc Đàn</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default RightbarHome
