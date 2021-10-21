import React from 'react'
import ContentWatch from '../../components/ContentWatch/ContentWatch';
import SidebarWatch from '../../components/SidebarWatch/SidebarWatch';
import { useStyles } from './style'

function Watch() {
    const classes = useStyles();
    return (
        <div className={classes.watchContainer}>
            <div className={classes.sidebarWatch}>
                <SidebarWatch/>
            </div>
            <div className={classes.contentWatch}>
                <ContentWatch/>
            </div>
        </div>
    )
}

export default Watch
