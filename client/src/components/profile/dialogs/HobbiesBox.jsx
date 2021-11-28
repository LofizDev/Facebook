import React, { useState } from 'react'
import { Close, Search } from '@material-ui/icons'
import { HobbiesData } from '../HobbiesData'
import { useStyles } from '../style'
import hobbies from '../../../images/bg-hobbies.png'
function HobbiesBox({ setAddHobbies }) {
    const classes = useStyles()
    const [checked, setChecked] = useState([])

    // Check value exists
    const handleCheck = (hobbie) => {
        setChecked(prev => {
            const isChecked = checked.includes(hobbie)
            if (isChecked) {
                return checked.filter(item => item !== hobbie)
            } else {
                return [...prev, hobbie]
            }
        })
    }

    return (
        <div>
            <div onClick={() => setAddHobbies(false)} className={classes.overlayHobbies}></div>
            <div className={classes.hobbies}>
                {/* Banner */}
                <div className={classes.bannerHobbies}>
                    <img className={classes.imgHobbies} height='100%' width='374px' style={{ objectFit: 'cover' }} src={hobbies} alt="hobbies" />
                </div>
                {/* Close Icon */}
                <div onClick={() => setAddHobbies(false)} className={classes.closeIcon}>
                    <Close />
                </div>
                {/* Title */}
                <div style={{ textAlign: 'center', margin: '7px 0 28px', padding: '0 20px 27px', borderBottom: '1px solid var(--media-inner-border)' }} className={classes.titleHobbies}>
                    <h3 style={{ fontSize: '22px' }}>Thêm sở thích</h3>
                    <p style={{ fontSize: '14px', fontWeight: '500', marginTop: '3px', color: "var(--secondary-text)" }}>Bạn thích làm gì? Hãy chọn các sở thích phổ biến dưới đây hoặc thêm sở thích khác nhé.</p>
                </div>
                <div className={classes.recomendHobbies}>
                    <p style={{ textAlign: 'center', fontSize: '13.8px', fontWeight: '500', color: 'var(--secondary-text)' }}>SỞ THÍCH ĐƯỢC ĐỀ XUẤT</p>
                </div>
                {/* Hobbies */}
                <div className={classes.listHobbies}>
                    {HobbiesData.slice(0, 10).map((hobbie, index) => (
                        <label key={index} className='tag-hobbies'>
                            <input onChange={() => handleCheck(hobbie.hoobie)} type="checkbox" />
                            <p
                                className={classes.tagHobbie}>
                                {hobbie.hoobie}
                            </p>
                        </label>
                    ))}
                    <div className={classes.searchHobbies} >
                        <Search fontSize="small" />
                        <p>Tìm kiếm sở thích khác</p>
                    </div>
                </div>
                {/* Public*/}
                <div style={{ width: '100%', padding: '17px 15px', border: '1px solid var(--media-inner-border)', position: 'absolute', bottom: '0', fontSize: '17px' }}>
                    Sở thích hiển thị công khai
                </div>
            </div>
        </div>
    )
}

export default HobbiesBox
