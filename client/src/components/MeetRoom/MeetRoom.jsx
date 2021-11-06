import React from 'react'
import Slider from "react-slick";
import { useStyles } from './style'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next'
function MeetRoom() {
    const classes = useStyles();
    const{t} = useTranslation()
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
                        <img className={classes.imageUser} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/178477965_1427806897582977_8634360171536141220_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=a_wdR-f-RsAAX_XeLLJ&_nc_ht=scontent.fsgn2-2.fna&oh=9bd1690c066c51d0f4d11ac4d16b0b0d&oe=6191C8B5" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/151702869_465832304604275_7145983656194075681_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=dqH5VFnFK-YAX-ZwqdW&tn=75wmVns5i9UCQ6Tk&_nc_ht=scontent.fsgn2-1.fna&oh=b0f6fbb2948333a710ff36a33cc19f6f&oe=6193943F" alt="avartar" />
                        <span className={classes.status}></span>   
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/244348835_1276860339412552_7048056767177081825_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=8XzuSyi_AC8AX-CnMrS&_nc_ht=scontent.fsgn2-6.fna&oh=bf89710f769617486217260c531b5b2f&oe=6194F9ED" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/241236571_2954300731457368_179193106496099546_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=VGHtQNuR6FEAX_XsNoa&_nc_ht=scontent.fsgn2-2.fna&oh=40a413f713bc402ceeecb0220a0fc299&oe=61942C1A" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/244293259_1059731594768846_855523148316127549_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=KTAy7L3W4ZUAX8JQUEx&_nc_ht=scontent.fsgn2-3.fna&oh=7ac3bee51880e1fcdb16a4f638a46168&oe=6194D704" alt="avartar" />
                        <span className={classes.status}></span>
                    </div>
                </div>
                <div className={classes.boxInfo} style={{ width: 40 }}>
                    <div className={classes.user}>
                        <img className={classes.imageUser} src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/243165868_1160872967649727_5009360654575135909_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=sduljC9EgFQAX8K6Sb9&tn=75wmVns5i9UCQ6Tk&_nc_ht=scontent.fsgn2-1.fna&oh=6e82c6a5ba1c213803ae8e6c1ca787e5&oe=61950582" alt="avartar" />
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
