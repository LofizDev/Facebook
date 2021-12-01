import { Close } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useStyles } from '../style'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import LoadingSearch from '../../notify/LoadingSearch'
// Google Api
import PlacesAutocomplete from "react-places-autocomplete"


function AdressBox({ setEdit }) {
    const classes = useStyles()
    const { t } = useTranslation()
    const [currentAddress, setCurrentAddress] = useState('')
    const [country, setCountry] = useState('')
    const [age, setAge] = useState('1');
    const [open, setOpen] = useState(false)


    // Results the Address
    const handleSelectCurrentAdress = async value => {
        setCurrentAddress(value)
    }
    const handleSelectCountry = async value => {
        setCountry(value)
    }

    // Handle change Select Options
    const handleChange = (event) => {
        setAge(event.target.value);
    }

    return (
        <div>
            <div onClick={() => setEdit(false)} className={classes.overlayHobbies}></div>
            <div className={clsx(classes.hobbies, classes.editUserInfo)}>
                {/* Title */}
                <h3 style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid var(--media-inner-border)' }}>{t('chinhsuachitiet')}</h3>
                {/* Close Icon */}
                <div onClick={() => setEdit(false)} className={classes.closeIcon}>
                    <Close />
                </div>
                {/* Body */}
                <div className={classes.editUserWrapper}>
                    {/* Description */}
                    {/* <div className={classes.desc}>
                        <p className={classes.descH6}>Chỉnh sửa phần giới thiệu</p>
                        <p className={classes.descP}>Chi tiết bạn chọn sẽ hiển thị công khai</p>
                    </div> */}
                    {/* Input */}
                    <div className={classes.work}></div>
                    <div className={classes.currentLive}>
                        <p className={clsx(classes.descH6, classes.titleCurrentLive)}>{t('themtinh/thanhpho')}</p>
                        <form className={classes.root} noValidate autoComplete="off">
                            <PlacesAutocomplete
                                value={currentAddress}
                                onChange={setCurrentAddress}
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
                        </form>
                    </div>
                    <div className={classes.country}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <p className={clsx(classes.descH6, classes.titleCurrentLive)}>{t('themquequan')}</p>
                            <PlacesAutocomplete
                                value={country}
                                onChange={setCountry}
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
                        </form>
                    </div>
                    <div className={classes.relationships}>
                        <p className={clsx(classes.descH6, classes.titleCurrentLive)}>{t('moiquanhe')}</p>
                        <div>
                            <FormControl style={{ minWidth: '100%', marginTop: '22px' }} className={classes.formControl}>
                                {/* <InputLabel id="demo-controlled-open-select-label">Trạng thái</InputLabel> */}
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
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>{t('docthan')}</MenuItem>
                                    <MenuItem value={2}>{t('henho')}</MenuItem>
                                    <MenuItem value={3}>{t('medonthan')}</MenuItem>
                                    <MenuItem value={4}>{t('gatrongnuoicon')}</MenuItem>
                                    <MenuItem value={5}>{t('dakethon')}</MenuItem>
                                    <MenuItem value={6}>{t('timhieu')}</MenuItem>
                                    <MenuItem value={7}>{t('comoiquanhephuctap')}</MenuItem>
                                    <MenuItem value={8}>{t('thoichong')}</MenuItem>
                                    <MenuItem value={9}>{t('thoivo')}</MenuItem>
                                    <MenuItem value={10}>{t('dongtinh')}</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                </div>
                {/* Footer */}
                <div style={{ width: '100%', padding: '0 15px', height: '60px', alignItems: 'center', border: '1px solid var(--media-inner-border)', position: 'absolute', bottom: '0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '500', fontSize: '15px' }}>{t('capnhatthongtin')}</span>
                    <div className={classes.btnGroupCountDown}>
                        <button
                            style={{ padding: '7px 24px', backgroundColor: '#1b74e4', color: 'white' }}
                            className={classes.btnSave}>
                            {t('luu')}
                        </button>
                        <button onClick={() => setEdit(false)} className={classes.btnCancel}>{t('huy')}</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdressBox
