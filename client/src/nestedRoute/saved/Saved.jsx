import React from 'react'
import SidebarWatch from '../../components/SidebarWatch/SidebarWatch'
import { useStyles } from './style'
function Saved() {
    const classes = useStyles();
    return (
        <div className={classes.savedContainer} >
            <SidebarWatch/>
            <div></div>
            
        </div>
    )
}

export default Saved
