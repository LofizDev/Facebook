import { useStyles } from '../style'
import { Link, useParams } from 'react-router-dom'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import { useTranslation } from 'react-i18next'
function ProfileTabs({ tabs, setTabs }) {
    const { t } = useTranslation()
    const classes = useStyles();
    const { id } = useParams()



    return (
        <div className={classes.profileTabs}>
            <ul className={classes.listTabs}>
                <Link to={`/profile/${id}`} onClick={() => setTabs('post')} id={tabs === 'post' ? 'tabs-active' : ''} className={classes.tabLink}>{t('baiviet')}</Link>
                <Link to={`/profile/${id}/about`} onClick={() => setTabs('about')} id={tabs === 'about' ? 'tabs-active' : ''} className={classes.tabLink}>{t('gioithieu')}</Link>
                <Link to={`/profile/${id}/followers`} onClick={() => setTabs('follow')} id={tabs === 'follow' ? 'tabs-active' : ''} className={classes.tabLink}>{t('banbe')}</Link>
                <Link to={`/profile/${id}/photos`} onClick={() => setTabs('photos')} id={tabs === 'photos' ? 'tabs-active' : ''} className={classes.tabLink}>{t('anh')}</Link>
                <Link to={`/profile/${id}/archive`} onClick={() => setTabs('archive')} id={tabs === 'archive' ? 'tabs-active' : ''} className={classes.tabLink}>{t('kholuutrutin')}</Link>
                <Link to={`/profile/${id}/videos`} onClick={() => setTabs('videos')} id={tabs === 'videos' ? 'tabs-active' : ''} className={classes.tabLink}>{t('video')}</Link>
                <li onClick={() => setTabs('seemore')} id={tabs === 'seemore' ? 'tabs-active' : ''} className={classes.tabLink}>{t('xemthem')}</li>
            </ul>
            <div className={classes.archive}>
                <MoreHoriz />
            </div>
        </div>
    )
}

export default ProfileTabs
