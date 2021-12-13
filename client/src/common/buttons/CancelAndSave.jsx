import React from 'react'
import { useStyles } from './style'
function CancelAndSave({ setViewProfile }) {
    const classes = useStyles();
    return (
        <div className={classes.btnGroupCountDown}>
            <button
                style={{ padding: '7px 24px', backgroundColor: '#1b74e4', color: 'white' }}
                className={classes.btnSave}>
                Lưu
            </button>
            <button type='submit' onClick={() => setViewProfile(false)} className={classes.btnCancel}>Hủy</button>
        </div>
    )
}

export default CancelAndSave
