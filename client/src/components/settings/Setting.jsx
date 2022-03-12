import React, { useState, useEffect, memo } from 'react'
import clsx from 'clsx';
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import useDarkMode from './useDarkMode';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
function Setting() {
  // Toggle language
  const [toggleLanguage, setToggleLanguage] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState(false)
  const { t, i18n } = useTranslation()

  // Toggle Dark mode
  const [toggleDarkMore, setToggleDarkMode] = useState(false)
  const [activeDarkmode, setActiveDarkmode] = useState(false)
  const [darkMode, handleDarkMode, handleLightMode] = useDarkMode()
  const classes = useStyles();
  const history = useHistory()

  // Redux
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth.token) history.push('/')
  }, [auth.token, history])

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
              onClick={changeLanguageToEn("en")}
              style={activeLanguage
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : {}}
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
              onClick={() => { setActiveDarkmode(true); handleDarkMode() }}
              style={activeDarkmode
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { backgroundColor: 'var(--bg-first)' }}
              className={classes.textChoose}>
              {t('chedotoi')}
            </p>
            <p
              onClick={() => { setActiveDarkmode(false); handleLightMode() }}
              style={activeDarkmode === false
                ? { backgroundColor: 'var(--bg-active)', color: 'var(--color-primary)' }
                : { backgroundColor: 'var(--bg-first)' }}
              className={classes.textChoose}>
              {t('chedosang')}
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
    </div>
  )
}

export default memo(Setting)
