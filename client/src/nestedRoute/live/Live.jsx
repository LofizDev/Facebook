import React from 'react'
import SidebarWatch from '../../components/SidebarWatch/SidebarWatch'
import { useStyles } from './style'
function Live() {
    const classes = useStyles();
    return (
        <div className={classes.liveContainer} >
            <SidebarWatch/>
            <div ></div>
            
        </div>
    )
}

export default Live
