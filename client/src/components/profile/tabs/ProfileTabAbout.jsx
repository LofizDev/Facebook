import React from 'react'
import { useStyles } from './style'
function ProfileTabAbout() {
    const classes = useStyles()
    return (
        <div className={classes.profileBottom}>
            <div className={classes.introduceLeft}>
                <h2>Gioi thieu</h2>
            </div>
            <div className={classes.introduceRight}>
                Content
            </div>
        </div>
    )
}

export default ProfileTabAbout
