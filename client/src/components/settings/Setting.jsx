import React, { useState, memo } from 'react'
import clsx from 'clsx';
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import { Link, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/authAction'

function Setting({ setShowSetting, setActiveIcon, activeLanguage, setIsLanguage, activeDarkmode, setActiveDarkmode, setDarkMode }) {
  const { t } = useTranslation()

  const [toggleLanguage, setToggleLanguage] = useState(false)
  const [toggleDarkMore, setToggleDarkMode] = useState(false)
  const classes = useStyles();

  // Redux
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className={classes.boxSetting}>
      <div className={classes.boxUser}>
        <Link to={`/profile/${auth.user._id}`}>
          <img className={classes.boxUserImg} src={auth?.user?.avatar} alt="avatar" />
        </Link>
        <div className={classes.boxInfo}>
          <strong style={{ fontSize: '18px' }}>Khôi Lâm</strong>
          <span style={{ marginTop: '4px', fontSize: '15px', letterSpacing: '.5px' }}>{t('xemtrangcanhancuaban')}</span>
        </div>
      </div>
      <div className={classes.boxContact}>
        {/* Icon box setting header */}
        <ul className={classes.listIconSetting}>
          <li className={classes.iconSetting}>
            <span className={classes.iconContact}></span>
            <div className={classes.textBoxContact}>
              <p className={classes.titleSetting}>{t('donggopykien')}</p>
              <span className={classes.subTitleSetting} style={{ marginTop: '5px', fontSize: '14px' }}>{t('gopphancaithien')}</span>
            </div>
          </li>
        </ul>
        {/* Icon box setting footer */}
        <ul style={{ marginTop: '10px' }} className={classes.listSettingFooter}>
          <li className={classes.itemSettingFooter}>
            <span className={classes.iconWrapperFooter}>
              <i className={clsx(classes.iconFooter, classes.iconFooterSetting)}></i>
            </span>
            <p className={classes.titleSetting}>{t('caidacquyenriengtu')}</p>
          </li>
          <li
            onClick={() => setToggleLanguage(!toggleLanguage)}
            className={classes.itemSettingFooter}>
            <span className={classes.iconWrapperFooter}>
              <i className={clsx(classes.iconFooter, classes.iconFooterHelp)}></i>
            </span>
            <p className={classes.titleSetting}>{t('ngonngu')}</p>
          </li>
          <li
            style={toggleLanguage ? { display: 'flex', height: 'auto' } : { display: 'none', height: '0' }}
            className={clsx(classes.itemSettingFooter, classes.settingLanguage)}>
            <p
              onClick={() => { setIsLanguage("en"); localStorage.setItem('language', 'en') }}
              style={activeLanguage
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : {}}
              className={classes.textChoose}>
              English
            </p>
            <p
              onClick={() => { setIsLanguage('vn'); localStorage.setItem('language', 'vn') }}
              style={activeLanguage === false
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { backgroundColor: 'var(--bg-first)' }}
              className={classes.textChoose}>
              Tiếng việt
            </p>
          </li>
          <li onClick={() => setToggleDarkMode(!toggleDarkMore)} className={classes.itemSettingFooter}>
            <span className={classes.iconWrapperFooter}>
              <i className={clsx(classes.iconFooter, classes.iconFooterScreen)}></i>
            </span>
            <p className={classes.titleSetting}>{t('manhinhtronang')}</p>
          </li>
          <li
            style={toggleDarkMore ? { display: 'flex', height: 'auto' } : { display: 'none', height: '0' }}
            className={clsx(classes.itemSettingFooter, classes.settingLanguage)}>
            <p
              onClick={() => { setActiveDarkmode(true); setDarkMode(true) }}
              style={activeDarkmode
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { backgroundColor: 'var(--bg-first)' }}
              className={classes.textChoose}>
              {t('chedosang')}
            </p>
            <p
              onClick={() => { setActiveDarkmode(false); setDarkMode(false) }}
              style={activeDarkmode === false
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { backgroundColor: 'var(--bg-first)' }}
              className={classes.textChoose}>
              {t('chedotoi')}
            </p>
          </li>
          <Link to='/' onClick={() => dispatch(logout())}>
            <li className={classes.itemSettingFooter}>
              <span className={classes.iconWrapperFooter}>
                <i className={clsx(classes.iconFooter, classes.iconFooterLogout)}></i>
              </span>
              <p className={classes.titleSetting}>{t('dangxuat')}</p>
            </li>
          </Link>
          <span style={{ display: 'flex', justifyContent: 'center', margin: '5px 0 10px', color: "var(--secondary-text)" }}>
            Development by <span style={{ fontWeight: '500', color: 'rgb(246 104 95' }}>
              &nbsp;Khoi Lam&nbsp;
            </span>with 🧡 © 2022
          </span>
        </ul>
      </div>
      <div onClick={() => { setShowSetting(false); setActiveIcon('') }} className={classes.overLayModal}></div>
    </div>
  )
}

export default memo(Setting)
