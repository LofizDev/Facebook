import React, { useState } from 'react'
import { logo } from '../../common/icon/Icons'
import { useStyles } from './style'
import { Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import Tooltip from "@material-ui/core/Tooltip";
import { NavLink } from 'react-router-dom'
import { HeaderData } from './HeaderData'
import clsx from 'clsx';
import Setting from '../settings/Setting'
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next'
function Header() {
  const [showSetting, setShowSetting] = useState(false)
  const [activeIcon, setActiveIcon] = useState('')
  const classes = useStyles();
  const { t } = useTranslation()
  const BlueOnGreenTooltip = withStyles({
    tooltip: {
      color: "#fff",
      backgroundColor: "#4e4e52",
      padding: '8px 15px',
      borderRadius: '8px',
      marginTop: '8px',
      fontSize: '12px',
      letterSpacing: '.5px',
    }
  })(Tooltip);

  console.log(activeIcon);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>
          {/* Header left: logo, search input  */}
          <div className={classes.headerLeft}>
            <NavLink to='/'>
              <img width='40px' height='40px' src={logo} alt="logo" />
            </NavLink>
            <div className={classes.searchBar}>
              <Search className={classes.searchIcon} />
              <input className={classes.searchInput} placeholder={t('timkiem')} />
            </div>
          </div>
          <div id='header-center' className={classes.headerCenter}>
            {/* Header link center: home,watch,marketplace,group,game  */}
            <ul className={classes.listIcons}>
              {HeaderData.map((link) => (
                <NavLink exact={link.active} to={link.path}>
                  <BlueOnGreenTooltip className={classes.vl} title={link.tooltip}>
                    <li className={clsx(classes.iconItem)}>
                      {link.icon}
                    </li>
                  </BlueOnGreenTooltip>
                </NavLink>
              ))}
              <NavLink to='/Different'>
                <BlueOnGreenTooltip className={classes.vl} title='Khác'>
                  <li className={clsx(classes.iconItemMobile, classes.iconItem)}>
                    <svg viewBox="0 0 28 28" height="28" width="28"><path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path></svg>
                  </li>
                </BlueOnGreenTooltip>
              </NavLink>
            </ul>
          </div>
          {/* Header right: user,message,bell,setting */}
          <div className={classes.headerRight}>
            <ul className={classes.listIconsRight}>
              <li className={classes.userIcon}>
                <img className={classes.imageUser}
                  src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/100105408_150159316623450_6233873745942079200_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=t09i6CYGXaAAX-BXlt0&_nc_ht=scontent.fsgn2-4.fna&oh=8ebcf97654b643e059ba7810954eaa5d&oe=618AD1D3' alt="icon" />
                <Typography className={classes.text} component="p">Khôi</Typography>
              </li>
              <BlueOnGreenTooltip className={classes.iconMn} title='Menu'>
                <li
                  onClick={() => setActiveIcon('menu')}
                  id={activeIcon === 'menu' ? 'activeIcon' : ''}
                  className={clsx(classes.iconItemRight, classes.iconItemMenu)}>
                  <svg className={classes.men} viewBox="0 0 44 44" width="20" height="20" ><circle cx="7" cy="7" r="6"></circle><circle cx="22" cy="7" r="6"></circle><circle cx="37" cy="7" r="6"></circle><circle cx="7" cy="22" r="6"></circle><circle cx="22" cy="22" r="6"></circle><circle cx="37" cy="22" r="6"></circle><circle cx="7" cy="37" r="6"></circle><circle cx="22" cy="37" r="6"></circle><circle cx="37" cy="37" r="6"></circle></svg>
                </li>
              </BlueOnGreenTooltip>
              <BlueOnGreenTooltip title='Messenger'>
                <li
                  onClick={() => setActiveIcon('messenger')}
                  id={activeIcon === 'messenger' ? 'activeIcon' : ''}
                  className={clsx(classes.iconItemRight, classes.iconItemFill)}>
                  <svg viewBox="0 0 28 28" height="20" width="20"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path></svg>
                </li>
              </BlueOnGreenTooltip>
              <BlueOnGreenTooltip title='Thông báo'>
                <li
                  onClick={() => setActiveIcon('alert')}
                  id={activeIcon === 'alert' ? 'activeIcon' : ''}
                  className={clsx(classes.iconItemRight, classes.iconItemFill)}>
                  <svg viewBox="0 0 28 28" height="20" width="20"><path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path></svg>
                </li>
              </BlueOnGreenTooltip>
              <li onClick={() => { setShowSetting(!showSetting); setActiveIcon('setting') }}
                id={activeIcon === 'setting' ? 'activeIcon' : ''}
                className={clsx(classes.iconItemRight, classes.iconItemFill)}>
                <div className={classes.iconItemRightDropdown}>
                  <svg viewBox="0 0 20 20" width="20" height="20" ><path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path></svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Box setting */}
      {showSetting && (
        <Setting />
      )}
    </>
  )
}

export default Header
