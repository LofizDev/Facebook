import { Close } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import { useStyles } from '../style'
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import LoadingSearch from '../../notify/LoadingSearch'
// Google Api
import PlacesAutocomplete from "react-places-autocomplete"


function AdressBox({ setEdit }) {
    const classes = useStyles()
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
                <h3 style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid var(--media-inner-border)' }}>Chỉnh sửa chi tiết</h3>
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
                        <p className={clsx(classes.descH6, classes.titleCurrentLive)}>Thêm tỉnh/thành phố hiện tại</p>
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
                                            label="Tỉnh/Thành phố hiện tại"
                                            variant="outlined" />
                                        {loading ? <LoadingSearch /> : null}

                                        {/* List Suggestions */}
                                        <ul>
                                            {suggestions.map(suggestion => {
                                                const style = {
                                                    backgroundColor: suggestion.active ? 'red' : 'blue'
                                                }
                                                return (
                                                    <li {...getSuggestionItemProps(suggestion, { style })}>
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
                            <p className={clsx(classes.descH6, classes.titleCurrentLive)}>Thêm quê quán</p>
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
                                            label="Quê quán"
                                            variant="outlined" />
                                        {loading ? <LoadingSearch /> : null}

                                        {/* List Suggestions */}
                                        <ul>
                                            {suggestions.map(suggestion => {
                                                const style = {
                                                    backgroundColor: suggestion.active ? 'red' : 'blue'
                                                }
                                                return (
                                                    <li {...getSuggestionItemProps(suggestion, { style })}>
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
                        <p className={clsx(classes.descH6, classes.titleCurrentLive)}>Mối quan hệ</p>
                        <div>
                            <FormControl style={{ minWidth: '100%', marginTop: '22px' }} className={classes.formControl}>
                                {/* <InputLabel id="demo-controlled-open-select-label">Trạng thái</InputLabel> */}
                                <Select
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
                                    <MenuItem value={1}>Độc thân</MenuItem>
                                    <MenuItem value={2}>Hẹn hò</MenuItem>
                                    <MenuItem value={3}>Mẹ đơn thân</MenuItem>
                                    <MenuItem value={4}>Gà trống nuôi con</MenuItem>
                                    <MenuItem value={5}>Đã kết hôn</MenuItem>
                                    <MenuItem value={6}>Tìm hiểu</MenuItem>
                                    <MenuItem value={7}>Có mỗi quan hệ phức tạp</MenuItem>
                                    <MenuItem value={8}>Thôi chồng</MenuItem>
                                    <MenuItem value={9}>Thôi vợ</MenuItem>
                                    <MenuItem value={10}>Đồng tính</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                </div>
                {/* Footer */}
                <div style={{ width: '100%', padding: '0 15px', height: '60px', alignItems: 'center', border: '1px solid var(--media-inner-border)', position: 'absolute', bottom: '0', fontSize: '17px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: '500', fontSize: '15px' }}>Cập nhật thông tin</span>
                    <div className={classes.btnGroupCountDown}>
                        <button
                            style={{ padding: '7px 24px', backgroundColor: '#1b74e4', color: 'white' }}
                            className={classes.btnSave}>
                            Lưu
                        </button>
                        <button onClick={() => setEdit(false)} className={classes.btnCancel}>Hủy</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdressBox
