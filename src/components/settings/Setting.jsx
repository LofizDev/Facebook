import React, { useState } from 'react'
import clsx from 'clsx';
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import useDarkMode from './useDarkMode';

function Setting() {
  const [toggleLanguage, setToggleLanguage] = useState(false)
  const [toggleDarkMore,setToggleDarkMode] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState(false)
  const [activeDarkmode,setActiveDarkmode] = useState(false)
  const { t, i18n } = useTranslation()
  const classes = useStyles();
  const [darkMode,handleDarkMode,handleLightMode] = useDarkMode()


  // Translate to Vietnames
  function changeLanguageToVn(changes) {
    return function () {
      i18n.changeLanguage(changes)
      setActiveLanguage(false)
    }
  }
  // Translate to English
  function changeLanguageToEn(changes) {
    return function () {
      i18n.changeLanguage(changes)
      setActiveLanguage(true)
    }
  }



  return (
    <div className={classes.boxSetting}>
      <div className={classes.boxUser}>
        <img className={classes.boxUserImg} src="https:scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/p320x320/100105408_150159316623450_6233873745942079200_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=t09i6CYGXaAAX-BXlt0&_nc_ht=scontent.fsgn2-4.fna&oh=8ebcf97654b643e059ba7810954eaa5d&oe=618AD1D3" alt="user" />
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
              onClick={changeLanguageToEn("en")}
              style={activeLanguage
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { }}
              className={classes.textChoose}>
              English
            </p>
            <p
              onClick={changeLanguageToVn('vn')}
              style={activeLanguage === false
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { backgroundColor: 'var(--bg-first)' }}
              className={classes.textChoose}>
              Tiếng việt
            </p>
          </li>
          <li  onClick={() => setToggleDarkMode(!toggleDarkMore)} className={classes.itemSettingFooter}>
            <span className={classes.iconWrapperFooter}>
              <i className={clsx(classes.iconFooter, classes.iconFooterScreen)}></i>
            </span>
            <p className={classes.titleSetting}>{t('manhinhtronang')}</p>
          </li>
          <li
            style={toggleDarkMore ? { display: 'flex', height: 'auto' } : { display: 'none', height: '0' }}
            className={clsx(classes.itemSettingFooter, classes.settingLanguage)}>
            <p
              onClick={() => {setActiveDarkmode(true); handleDarkMode()}}
              style={activeDarkmode 
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { backgroundColor: 'var(--bg-first)' }}
              className={classes.textChoose}>
              {t('chedotoi')}
            </p>
            <p
              onClick={() => {setActiveDarkmode(false); handleLightMode()}}
              style={activeDarkmode === false
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { backgroundColor: 'var(--bg-first)' }}
              className={classes.textChoose}>
              {t('chedosang')}
            </p>
          </li>
          <li className={classes.itemSettingFooter}>
            <span className={classes.iconWrapperFooter}>
              <i className={clsx(classes.iconFooter, classes.iconFooterLogout)}></i>
            </span>
            <p className={classes.titleSetting}>{t('dangxuat')}</p>
          </li>
          <li className={classes.privacy}>{t('quyenriengtu')}</li>
        </ul>
      </div>
    </div>
  )
}

export default Setting
