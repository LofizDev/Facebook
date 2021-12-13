import React, { usesState, useState } from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'
function Error({ setIsError, setViewProfile }) {
    const classes = useStyles()
    const { alert } = useSelector(state => state)
    const [overlay, setOverlay] = useState(true)
    return (
        <>
            {setIsError && (
                <div className={classes.errorContainer}>
                    {overlay &&
                        <div onClick={() => { setIsError(false); setOverlay(false); setViewProfile(false) }} className={classes.overlay}></div>
                    }
                    <div className={classes.dislog}>
                        <h4 className={classes.title}>Can't read files</h4>
                        <div className={classes.err}>{alert.error}</div>
                        <div onClick={() => { setIsError(false); setOverlay(false); setViewProfile(false) }} className={classes.close}>
                            Đóng
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}

export default Error
