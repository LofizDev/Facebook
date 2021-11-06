import { Search } from '@material-ui/icons';
import React, { useState } from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { PagesData } from './PagesData'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function SidebarWatch() {
    const classes = useStyles();
    const { t } = useTranslation()

    return (
        <div className={classes.sidebarContainer}>
            {/* Title */}
            <div className={classes.title}>
                <h2 className={classes.text}>Watch</h2>
            </div>
            {/* Input */}
            <div className={classes.searchBar}>
                <Search className={classes.searchIcon} />
                <input className={classes.searchInput} placeholder={t('timkiemvideo')} />
            </div>
            {/* List Link Icons */}
            <ul className={classes.listLinkIcon}>
                <NavLink to='/watch' exact={true} activeClassName="selected selected-home" >
                    <li className={classes.linkIcon}>
                        <div className={classes.commonIcon}>
                            <i
                                className={clsx(classes.iconHome, classes.iconCommonSize)}>
                            </i>
                        </div>
                        <p className={classes.titleLink}>{t('trangchu')}</p>
                    </li>
                </NavLink>
                <NavLink to='/watch/live' activeClassName="selected selected-live">
                    <li className={classes.linkIcon}>
                        <div className={classes.commonIcon}>
                            <i
                                className={clsx(classes.iconLive, classes.iconCommonSize)}>
                            </i>
                        </div>
                        <p className={classes.titleLink}>{t('tructiep')}</p>
                    </li>
                </NavLink>
                <NavLink to='/watch/shows' activeClassName="selected selected-shows">
                    <li className={classes.linkIcon}>
                        <div className={classes.commonIcon}>
                            <i
                                className={clsx(classes.iconShow, classes.iconCommonSize)}>
                            </i>
                        </div>
                        <p className={classes.titleLink}>{t('chuongtrinh')}</p>
                    </li>
                </NavLink>
                <NavLink to='/watch/saved' activeClassName="selected selected-saved">
                    <li className={classes.linkIcon}>
                        <div className={classes.commonIcon}>
                            <i
                                className={clsx(classes.iconSaved, classes.iconCommonSize)}>
                            </i>
                        </div>
                        <p className={classes.titleLink}>{t('videodaluu')}</p>
                    </li>
                </NavLink>
            </ul>
            {/* list Pages */}
            <div className={classes.listPagesContainer}>
                <div className={classes.titleListPages}>
                    <p className={classes.textleft}>{t('danhsachxemcuaban')}</p>
                </div>
                <ul className={classes.listPages}>
                    {
                        PagesData.map((page, index) => (
                            <li key={index} className={classes.page}>
                                <img className={classes.imgPage} src={page.img} alt="page-image" />
                                <div classes={classes.wrapperContent}>
                                    <p className={classes.titlePages}>{page.title}</p>
                                    <p style={{ display: 'flex', alignItems: 'center', marginTop: '1px' }}>
                                        <span className={classes.ignore}></span>
                                        <p className={classes.countNewVideo}>9+ {t('videomoi')}</p>
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SidebarWatch
