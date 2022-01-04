import React, { useState, useEffect } from 'react'
import { Close, Search, SearchOutlined } from '@material-ui/icons'
import { HobbiesData } from '../HobbiesData'
import { useTranslation } from 'react-i18next'
import { useStyles } from './styleBox'
import hobbies from '../../../images/bg-hobbies.png'
import { useSelector } from 'react-redux'
import LoadingButton from '../../notify/loadingButton/LoadingButton'
import SearchNotFound from '../../../common/searchNotFound/SearchNotFound'
function HobbiesBox({ setShowHobbiesBox, handleSubmit, setListHobbie }) {
    const classes = useStyles()
    const { t } = useTranslation()
    const [checked, setChecked] = useState([])
    const { alert } = useSelector(state => state)
    const [otherHobbies, setOtherHobbies] = useState(false)
    const [keySearch, setKeySearch] = useState('')
    const [filterDataHobbies, setFilterDataHobbies] = useState([])

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
    // Handle Search Hobbies
    useEffect(() => {
        var newFilter = HobbiesData.filter((value) => {
            return value.hoobie.toLowerCase().includes(keySearch.toLowerCase())
        })
        setFilterDataHobbies(newFilter)

    }, [keySearch])

    // Set Hobbies
    setListHobbie(checked)


    return (
        <form onSubmit={handleSubmit}>
            <div onClick={() => setShowHobbiesBox(false)} className={classes.overlayHobbies}></div>
            <div className={classes.hobbies}>
                {/* Banner */}
                <div className={otherHobbies ? 'otherHobbies-active' : 'otherHobbies'}>
                    <div className={classes.bannerHobbies}>
                        <img className={classes.imgHobbies} height='100%' width='374px' style={{ objectFit: 'cover' }} src={hobbies} alt="hobbies" />
                    </div>
                    {/* Close Icon */}
                    <div onClick={() => setShowHobbiesBox(false)} className={classes.closeIcon}>
                        <Close />
                    </div>
                    {/* Title */}
                    <div className={classes.titleHobbies}>
                        <h3 style={{ fontSize: '22px' }}>{t('themsothich')}</h3>
                        <p style={{ fontSize: '14px', fontWeight: '500', marginTop: '3px', color: "var(--secondary-text)" }}>{t('tieudesothich')}</p>
                    </div>
                    <div>
                        <p className={classes.recomendHobbies} >{t('sothichduocdexuat')}</p>
                    </div>
                    {/* Hobbies - Find other Hobbies Button */}
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
                        <div onClick={() => setOtherHobbies(true)} className={classes.searchHobbies} >
                            <Search fontSize="small" />
                            <p>{t('timkimsothichkhac')}</p>
                        </div>
                    </div>
                </div>
                {/* Tab Looking for other Hobbies */}
                <div className={otherHobbies ? 'otherHobbiesTab show-Hobbies' : 'otherHobbiesTab hide-Hobbies'}>
                    <h3 style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid var(--media-inner-border)' }}>{t('themsothich')}</h3>
                    {/* Close Icon */}
                    <div onClick={() => setShowHobbiesBox(false)} className={classes.closeIcon}>
                        <Close />
                    </div>
                    <div className={classes.searchOtherHobbie}>
                        <SearchOutlined fontSize='small' className={classes.iconSearchOtherHobbies} />
                        <input onChange={e => setKeySearch(e.target.value)} className={classes.inputSearchOtherHobbies} type="text" placeholder={t('banlamgidegiaitri')} />
                    </div>
                    {/* Result for */}
                    <div className={classes.alertSearchHobies}>
                        {keySearch.length > 0 && (
                            <p className={classes.descAlert}>{t('ketquacho')} "{keySearch}" </p>
                        )}
                        {/* Search not found */}

                    </div>
                    {/* List searched */}
                    <div className={classes.listFilteredHobbies}>
                        {keySearch.length > 0 && filterDataHobbies.map((hobbie, index) => (
                            <label key={index} className='tag-hobbies'>
                                <input onChange={() => handleCheck(hobbie.hoobie)} type="checkbox" />
                                <p
                                    className={classes.hobbieSingle}>
                                    {t(hobbie.hoobie)}
                                </p>
                            </label>
                        ))}
                    </div>
                    {/* Check Search not found */}
                    {filterDataHobbies.length === 0 && keySearch.length > 0 && (
                        <div className={classes.searchNotFound}>
                            <SearchNotFound />
                            <p className={classes.errSearchNotFound}>{t('khongtimthayhobbie')}</p>
                        </div>
                    )}
                </div>
                {/* End Tab Looking for other Hobbies */}


                {/* Public-- Footer Save Data */}
                <div style={{ width: '100%', padding: '0 15px', height: '60px', alignItems: 'center', border: '1px solid var(--media-inner-border)', position: 'absolute', bottom: '0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
                    <span className={classes.publicHobbiesText}>{t('sothichhienthicongkhai')}</span>
                    {alert.loadingSecondary ? (
                        <button
                            style={{ padding: '7px 17px', backgroundColor: '#E4E6EB' }}
                            className={classes.btnSave} >
                            {alert.success ? t('luu') : <LoadingButton />}
                        </button>
                    ) : (
                        <>
                            {/* Allow submit when checked(list hobbies) > 0 */}
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
                        </>
                    )}
                </div>
            </div>
        </form>
    )
}

export default HobbiesBox