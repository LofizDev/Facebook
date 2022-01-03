import React, { useState, memo } from 'react'
import { Close, Search } from '@material-ui/icons'
import { HobbiesData } from '../HobbiesData'
import { useTranslation } from 'react-i18next'
import { useStyles } from '../style'
import hobbies from '../../../images/bg-hobbies.png'
function HobbiesBox({ setShowHobbiesBox, handleSubmit, setListHobbie }) {
    const classes = useStyles()
    const { t } = useTranslation()
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
    setListHobbie(checked)

    return (
        <form onSubmit={handleSubmit}>
            <div onClick={() => setShowHobbiesBox(false)} className={classes.overlayHobbies}></div>
            <div className={classes.hobbies}>
                {/* Banner */}
                <div className={classes.bannerHobbies}>
                    <img className={classes.imgHobbies} height='100%' width='374px' style={{ objectFit: 'cover' }} src={hobbies} alt="hobbies" />
                </div>
                {/* Close Icon */}
                <div onClick={() => setShowHobbiesBox(false)} className={classes.closeIcon}>
                    <Close />
                </div>
                {/* Title */}
                <div style={{ textAlign: 'center', margin: '7px 0 28px', padding: '0 20px 27px', borderBottom: '1px solid var(--media-inner-border)' }} className={classes.titleHobbies}>
                    <h3 style={{ fontSize: '22px' }}>{t('themsothich')}</h3>
                    <p style={{ fontSize: '14px', fontWeight: '500', marginTop: '3px', color: "var(--secondary-text)" }}>{t('tieudesothich')}</p>
                </div>
                <div className={classes.recomendHobbies}>
                    <p style={{ textAlign: 'center', fontSize: '13.8px', fontWeight: '500', color: 'var(--secondary-text)' }}>{t('sothichduocdexuat')}</p>
                </div>
                {/* Hobbies */}
                <div className={classes.listHobbies}>
                    {HobbiesData.slice(0, 10).map((hobbie, index) => (
                        <label key={index} className='tag-hobbies'>
                            <input onChange={() => handleCheck(hobbie.hoobie)} type="checkbox" />
                            <p
                                className={classes.tagHobbie}>
                                {t(hobbie.hoobie)}
                            </p>
                        </label>
                    ))}
                    <div className={classes.searchHobbies} >
                        <Search fontSize="small" />
                        <p>{t('timkimsothichkhac')}</p>
                    </div>
                </div>
                {/* Public*/}
                <div style={{ width: '100%', padding: '0 15px', height: '60px', alignItems: 'center', border: '1px solid var(--media-inner-border)', position: 'absolute', bottom: '0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{t('sothichhienthicongkhai')}</span>
                    {checked.length > 0 && (
                        <div className={classes.btnGroupCountDown}>
                            <button
                                style={{ padding: '7px 24px', backgroundColor: '#1b74e4', color: 'white' }}
                                className={classes.btnSave}>
                                {t('luu')}
                            </button>
                            <button onClick={() => setShowHobbiesBox(false)} className={classes.btnCancel}>{t('huy')}</button>
                        </div>
                    )}
                </div>
            </div>
        </form>
    )
}

export default memo(HobbiesBox)