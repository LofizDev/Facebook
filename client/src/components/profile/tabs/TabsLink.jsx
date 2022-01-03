import { useStyles } from '../style'
import { NavLink, useParams } from 'react-router-dom'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
function TabsLink() {
    const { t } = useTranslation()
    const classes = useStyles();
    const { id } = useParams()
    const { auth } = useSelector(state => state)

    return (
        <div id='profile-tab' className={classes.profileTabs}>
            <ul className={classes.listTabs}>
                <NavLink exact={true} to={`/profile/${id}`} className={classes.tabLink}>{t('baiviet')}</NavLink>
                <NavLink to={`/profile/${id}/follows`} className={classes.tabLink}>{t('nguoitheodoiprofile')}</NavLink>
                <NavLink to={`/profile/${id}/photos`} className={classes.tabLink}>{t('anh')}</NavLink>
                {auth?.user?._id === id && (
                    <NavLink to={`/profile/${id}/archive`} className={classes.tabLink}>{t('kholuutrutin')}</NavLink>
                )}
                <NavLink to={`/profile/${id}/videos`} className={classes.tabLink}>{t('video')}</NavLink>
                <li className={classes.tabLink}>{t('xemthem')}</li>
            </ul>
            <div className={classes.archive}>
                <MoreHoriz />
            </div>
        </div>
    )
}

export default TabsLink
