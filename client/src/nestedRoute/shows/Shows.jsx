import React from 'react'
import SidebarWatch from '../../components/SidebarWatch/SidebarWatch'
import { useStyles } from './style'
function Shows() {
    const classes = useStyles();
    return (
        <div className={classes.showsContainer} >
            <div className={classes.showsSidebar}>
                <SidebarWatch />
            </div>
            <div className={classes.showsContent}>hidfdsfsd</div>

        </div>
    )
}

export default Shows
