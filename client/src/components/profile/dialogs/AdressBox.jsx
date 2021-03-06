import { Close } from '@material-ui/icons'
import React, { useState } from 'react'
import { useStyles } from './styleBox'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import LoadingSearch from '../../notify/loadingSearch/LoadingSearch'

// Google Api
import PlacesAutocomplete from "react-places-autocomplete"
import LoadingButton from '../../notify/loadingButton/LoadingButton';


function AdressBox({ setShowEditDetail, setCurrentCity, setHometown, hometown, currentCity, handleSubmit, relationship, setRelationship, alert }) {
    const classes = useStyles()
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)


    // Handle Changes input (current address,live At)
    const handleSelectCurrentAdress = async value => {
        setCurrentCity(value)
    }
    const handleSelectCountry = async value => {
        setHometown(value)
    }

    // Handle change Select Options Relationship
    const handleChange = (event) => {
        setRelationship(event.target.value);
    }



    return (
        <div>
            <div onClick={() => setShowEditDetail(false)} className={classes.overlayHobbies}></div>
            <form onSubmit={handleSubmit} className={clsx(classes.hobbies, classes.editUserInfo)}>
                {/* Title */}
                <h3 style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid var(--media-inner-border)' }}>{t('chinhsuachitiet')}</h3>
                {/* Close Icon */}
                <div onClick={() => setShowEditDetail(false)} className={classes.closeIcon}>
                    <Close />
                </div>
                {/* Body */}
                <div className={classes.editUserWrapper}>
                    <div className={classes.work}></div>
                    <div className={classes.currentLive}>
                        <p className={clsx(classes.descH6, classes.titleCurrentLive)}>{t('themtinh/thanhpho')}</p>
                        <PlacesAutocomplete
                            value={currentCity}
                            onChange={setCurrentCity}
                            onSelect={handleSelectCurrentAdress}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <>
                                    <TextField
                                        {...getInputProps()}
                                        className={classes.inputCurrentLive}
                                        label={t('themtinh/thanhpho')}
                                        variant="outlined" />
                                    {loading ? <LoadingSearch /> : null}

                                    {/* List Suggestions */}
                                    <ul className={classes.listSuggestions}>
                                        {suggestions.map((suggestion, index) => {
                                            const style = {
                                                backgroundColor: suggestion.active ? 'var(--bg-search-hover)' : 'var(--bg-first)',
                                            }
                                            return (
                                                <li className={classes.suggestionItem} key={index} {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </>
                            )}
                        </PlacesAutocomplete>
                    </div>
                    <div className={classes.country}>
                        <p className={clsx(classes.descH6, classes.titleCurrentLive)}>{t('themquequan')}</p>
                        <PlacesAutocomplete
                            value={hometown}
                            onChange={setHometown}
                            onSelect={handleSelectCountry}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <>
                                    <TextField
                                        {...getInputProps()}
                                        className={classes.inputCurrentLive}
                                        label={t('themquequan')}
                                        variant="outlined" />
                                    {loading ? <LoadingSearch /> : null}

                                    {/* List Suggestions */}
                                    <ul className={classes.listSuggestions}>
                                        {suggestions.map((suggestion, index) => {
                                            const style = {
                                                backgroundColor: suggestion.active ? 'var(--bg-search-hover)' : 'var(--bg-first)',
                                            }
                                            return (
                                                <li className={classes.suggestionItem} key={index} {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </>
                            )}
                        </PlacesAutocomplete>
                    </div>
                    <div className={classes.relationships}>
                        <p className={clsx(classes.descH6, classes.titleCurrentLive)}>{t('moiquanhe')}</p>
                        <div>
                            <FormControl style={{ minWidth: '100%', marginTop: '22px' }} className={classes.formControl}>
                                {/* <InputLabel id="demo-controlled-open-select-label">Tr???ng th??i</InputLabel> */}
                                <Select
                                    className={classes.select}
                                    MenuProps={{
                                        style: { zIndex: 35001, width: '400px' }
                                    }}
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    value={relationship}
                                    onChange={handleChange}
                                >
                                    <MenuItem value='?????c th??n'>{t('docthan')}</MenuItem>
                                    <MenuItem value='H???n h??'>{t('henho')}</MenuItem>
                                    <MenuItem value='M??? ????n th??n'>{t('medonthan')}</MenuItem>
                                    <MenuItem value='G?? tr???ng nu??i con'>{t('gatrongnuoicon')}</MenuItem>
                                    <MenuItem value='???? k???t h??n'>{t('dakethon')}</MenuItem>
                                    <MenuItem value='T??m hi???u'>{t('timhieu')}</MenuItem>
                                    <MenuItem value='C?? m???i quan h??? ph???c t???p'>{t('comoiquanhephuctap')}</MenuItem>
                                    <MenuItem value='Th??i ch???ng'>{t('thoichong')}</MenuItem>
                                    <MenuItem value='Th??i v???'>{t('thoivo')}</MenuItem>
                                    <MenuItem value='?????ng t??nh'>{t('dongtinh')}</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                </div>
                {/* Footer */}
                <div style={{ width: '100%', padding: '0 15px', height: '60px', alignItems: 'center', border: '1px solid var(--media-inner-border)', position: 'absolute', bottom: '0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '500', fontSize: '15px' }}>{t('capnhatthongtin')}</span>
                    <div className={classes.btnGroupCountDown}>
                        {/* Loading update adress */}
                        {alert.loadingSecondary ? (
                            <button
                                style={{ padding: '7px 17px', backgroundColor: '#E4E6EB' }}
                                type='submit'
                                className={classes.btnSave} >
                                {alert.success ? t('luu') : <LoadingButton />}
                            </button>
                        ) : (
                            <button
                                style={{ padding: '7px 24px', backgroundColor: '#1b74e4', color: 'white' }}
                                type='submit'
                                className={classes.btnSave}>
                                {t('luu')}
                            </button>
                        )}
                        {/* Close Box */}
                        <button onClick={() => setShowEditDetail(false)} className={classes.btnCancel}>{t('huy')}</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default AdressBox
