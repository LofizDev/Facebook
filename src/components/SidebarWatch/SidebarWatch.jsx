import { Search } from '@material-ui/icons';
import React, { useState } from 'react'
import { useStyles } from './style'
import clsx from 'clsx';
import { PagesData } from './PagesData'
import { TabsData } from './TabsData'

function SidebarWatch() {
    const classes = useStyles();
    const [tabs, setTabs] = useState('home')

    console.log(tabs);
    return (
        <div className={classes.sidebarContainer}>
            {/* Title */}
            <div className={classes.title}>
                <h2 className={classes.text}>Watch</h2>
            </div>
            {/* Input */}
            <div className={classes.searchBar}>
                <Search className={classes.searchIcon} />
                <input className={classes.searchInput} placeholder='Tìm kiếm video' />
            </div>
            {/* List Link Icons */}
            <ul className={classes.listLinkIcon}>
                <li
                   id={tabs === 'home' ? 'bg-active' : ''}
                    onClick={() => setTabs('home')}
                    className={classes.linkIcon}>
                    <div
                        id={tabs === 'home' ? 'bg-home-active' : ''}
                        className={classes.commonIcon}>
                        <i
                            className={clsx(classes.iconHome, classes.iconCommonSize)}
                            id={tabs === 'home' ? 'home' : ''}>
                        </i>
                    </div>
                    <p className={classes.titleLink}>Trang chủ</p>
                </li>
                <li
                    id={tabs === 'live' ? 'bg-active' : ''}
                    onClick={() => setTabs('live')}
                    className={classes.linkIcon}>
                    <div
                        className={classes.commonIcon}
                        id={tabs === 'live' ? 'bg-live-active' : ''}>
                        <i
                            className={clsx(classes.iconLive, classes.iconCommonSize)}
                            id={tabs === 'live' ? 'live' : ''}>
                        </i>
                    </div>
                    <p className={classes.titleLink}>Trực tiếp</p>
                </li>
                <li
                    id={tabs === 'show' ? 'bg-active' : ''}         
                    onClick={() => setTabs('show')}
                    className={classes.linkIcon}>
                    <div
                        className={classes.commonIcon}
                        id={tabs === 'show' ? 'bg-show-active' : ''} >
                        <i
                            className={clsx(classes.iconShow, classes.iconCommonSize)}
                            id={tabs === 'show' ? 'show' : ''}>
                        </i>
                    </div>
                    <p className={classes.titleLink}>Chương trình</p>
                </li>
                <li 
                    id={tabs === 'saved' ? 'bg-active' : ''}
                    onClick={() => setTabs('saved')}
                    className={classes.linkIcon}>
                    <div
                        className={classes.commonIcon}
                        id={tabs === 'saved' ? 'bg-saved-active' : ''}>
                        <i
                            className={clsx(classes.iconSaved, classes.iconCommonSize)}
                            id={tabs === 'saved' ? 'saved' : ''}>
                        </i>
                    </div>
                    <p className={classes.titleLink}>Video đã lưu</p>
                </li>
            </ul>
            {/* list Pages */}
            <div className={classes.listPagesContainer}>
                <div className={classes.titleListPages}>
                    <p className={classes.textleft}>Danh sách xem của bạn</p>
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
                                        <p className={classes.countNewVideo}>9+ video mới</p>
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
