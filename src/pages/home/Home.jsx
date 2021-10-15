import React from 'react'
import Header from '../../components/header/Header'
import NewFeed from '../../components/NewFeed/NewFeed'
import SidebarHome from '../../components/SidebarHome/SidebarHome'
import RightbarHome from '../../components/RightbarHome/RightbarHome'
import { useStyles } from './style'
function Home() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.containerApp}>
        <div className={classes.sidebarHome}>
          <SidebarHome />
        </div>
        <div className={classes.newFeedHome}>
          <NewFeed />
        </div>
        <div className={classes.rightbarHome}>
          <RightbarHome />
        </div>
      </div>
    </>
  )
}

export default Home
