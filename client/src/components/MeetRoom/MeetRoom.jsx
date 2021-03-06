import React from 'react'
import Slider from "react-slick";
import { useStyles } from './style'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next'
function MeetRoom() {
    const classes = useStyles();
    const { t } = useTranslation()
    const settings = {
        className: "slider variable-width",
        dots: false,
        draggable: true,
        infinite: false,
        variableWidth: true,
        slidesToScroll: 3,
        arrows: false,
    };
    return (
        <div className={classes.createMeetContainer}>
            <Slider {...settings}>
                <div className={classes.boxCreate} style={{ width: 225 }}>
                    <div className={classes.createMeet}>
                        <i className={classes.createMeetIcon}></i>
                        <p className={classes.text}>{t('taophong')}</p>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/32974710_424174041343609_7333713132444975104_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=_L6WpTRL2hQAX8uEmsf&_nc_ht=scontent.fsgn2-2.fna&oh=008086e867c171ff0b8392393a659f84&oe=61BBAC8B" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/246013927_3074140129483094_6192919697512282112_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RQzK7Kds2IkAX_8flmD&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT_Zzqqsk6n2Kbu_nKkmbmDcqdJzcAqnxbciApI68cnQhw&oe=61C707D0" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.18169-9/20620994_555200261478499_154991268837208315_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=rxKENZMCFUAAX99udjA&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT8f6r4jH4z5jUnlSz3j-wWQejZ4kP1Lwft3FckhswT1_Q&oe=61E7D0C0" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/57062115_733195417076735_4118227991610261504_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=3oqPxC41tY0AX-tnlNR&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT9SMiVeChqPaC60DQiUQOuLwI07Qd42KfXjnmSZi4NYUg&oe=61E7E0EF" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/32974710_424174041343609_7333713132444975104_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=_L6WpTRL2hQAX8uEmsf&_nc_ht=scontent.fsgn2-2.fna&oh=008086e867c171ff0b8392393a659f84&oe=61BBAC8B" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/p843x403/208438592_950405292464633_3306198301647822569_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YzrSkttH66YAX88MLCI&_nc_oc=AQkyKudy4zZxe4j_Q36G2YR_A6Z981l3cWJtzZkchPSAUOrAuq_8HhWfzZ4Xh4-iIG8&_nc_ht=scontent.fsgn2-4.fna&oh=c565b8c614d5f17906a518e98113a7ec&oe=61BC06D5" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/cp0/p56x56/236215242_2944259012481991_6014635419925665434_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=mREbG4Kv0vEAX9981uH&_nc_ht=scontent.fsgn2-5.fna&oh=5cd6918182d4c2cd6c3379af8c8b8574&oe=61716F8F" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/178477965_1427806897582977_8634360171536141220_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=a_wdR-f-RsAAX_XeLLJ&_nc_ht=scontent.fsgn2-2.fna&oh=9bd1690c066c51d0f4d11ac4d16b0b0d&oe=6191C8B5" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className='boxInfo' style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/151702869_465832304604275_7145983656194075681_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=dqH5VFnFK-YAX-ZwqdW&tn=75wmVns5i9UCQ6Tk&_nc_ht=scontent.fsgn2-1.fna&oh=b0f6fbb2948333a710ff36a33cc19f6f&oe=6193943F" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className='boxInfo' style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/244348835_1276860339412552_7048056767177081825_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=8XzuSyi_AC8AX-CnMrS&_nc_ht=scontent.fsgn2-6.fna&oh=bf89710f769617486217260c531b5b2f&oe=6194F9ED" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default MeetRoom
