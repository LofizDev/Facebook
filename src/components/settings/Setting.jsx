import React,{useState} from 'react'
import clsx from 'clsx';
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'

function Setting() {
    const [toggleLanguage,setToggleLanguage] = useState(false)
    const [activeLanguage,setActiveLanguage] = useState(false)
    const{t,i18n} = useTranslation()
    const classes = useStyles();

    // Change Languages
    function changeLanguageToVn(changes) {
      return function() {
        i18n.changeLanguage(changes)
        setActiveLanguage(false)
      }
    }
    function changeLanguageToEn(changes) {
      return function() {
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
                   <p style={{fontWeight:'500'}}>{t('donggopykien')}</p>
                   <span style={{ marginTop: '5px', fontSize: '14px' }}>{t('gopphancaithien')}</span>
                 </div>
               </li>
             </ul>
             {/* Icon box setting footer */}
             <ul style={{ marginTop: '10px' }} className={classes.listSettingFooter}>
               <li className={classes.itemSettingFooter}>
                 <span className={classes.iconWrapperFooter}>
                   <i className={clsx(classes.iconFooter, classes.iconFooterSetting)}></i>
                 </span>
                 <p style={{fontWeight:'500'}}>{t('caidacquyenriengtu')}</p>
               </li>
               <li
                  onClick={() => setToggleLanguage(!toggleLanguage)}
                  className={classes.itemSettingFooter}>
                 <span className={classes.iconWrapperFooter}>
                   <i className={clsx(classes.iconFooter, classes.iconFooterHelp)}></i>
                 </span>
                 <p style={{fontWeight:'500',userSelect:"none"}}>{t('ngonngu')}</p>
               </li>
               <li
                   style={toggleLanguage ? {display:'flex',height:'auto'} : {display:'none',height:'0'}}
                   className={clsx(classes.itemSettingFooter, classes.settingLanguage)}>
                       <p 
                          onClick={changeLanguageToEn("en")}
                          style={activeLanguage ? {backgroundColor:'#e7f3ff',color:'var(--color-primary)'}: {backgroundColor:'var(--bg-first)'}}
                          className={classes.textChoose}>
                            English
                        </p>
                       <p
                          onClick={changeLanguageToVn('vn')} 
                          style={activeLanguage === false 
                             ? {backgroundColor:'#e7f3ff',color:'var(--color-primary)'}
                             : {backgroundColor:'var(--bg-first)'}}
                          className={classes.textChoose}>
                            Tiếng việt
                        </p>
              </li>
               <li className={classes.itemSettingFooter}>
                 <span className={classes.iconWrapperFooter}>
                   <i className={clsx(classes.iconFooter, classes.iconFooterScreen)}></i>
                 </span>
                 <p style={{fontWeight:'500'}}>{t('manhinhtronang')}</p>
            
               </li>
               <li className={classes.itemSettingFooter}>
                 <span className={classes.iconWrapperFooter}>
                   <i className={clsx(classes.iconFooter, classes.iconFooterLogout)}></i>
                 </span>
                 <p style={{fontWeight:'500'}}>{t('dangxuat')}</p>
               </li>
               <li style={{ marginTop: '5px', fontSize: '14px', padding: '12px 10px' }}>{t('quyenriengtu')}</li>
             </ul>
           </div>
         </div>
    )
}

export default Setting
