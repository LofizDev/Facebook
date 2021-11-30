import React, { useState, useEffect } from 'react'
import { useStyles } from '../style'
function BioBox({ setAddBio, handleChangeValue, updateProfile }) {
    const classes = useStyles()
    const [countDown, setCountDown] = useState(101)
    const [allowedToSave, setAllowedToSave] = useState(false)


    // Check Allow To Save
    useEffect(() => {
        setCountDown(101 - updateProfile.length)
        if (updateProfile.length > 0 && updateProfile.length < 102) {
            setAllowedToSave(true)
        } else {
            setAllowedToSave(false)
        }
    }, [updateProfile])

    return (
        <div className={classes.bio}>
            <textarea
                onChange={handleChangeValue}
                name="bio"
                className={classes.inputBio}
                placeholder='Mô tả về bạn'>
            </textarea>
            <div className={classes.countDown}>
                <span className={classes.textCountDown}>Còn {countDown} ký tự</span>
                <div className={classes.btnGroupCountDown}>
                    <button
                        id={allowedToSave ? 'allow-to-save' : 'cant-save'}
                        style={{ opacity: allowedToSave ? '1' : '.6' }}
                        className={classes.btnSave}>
                        Lưu
                    </button>
                    <button onClick={() => setAddBio(false)} className={classes.btnCancel}>Hủy</button>
                </div>
            </div>
        </div>
    )
}

export default BioBox
