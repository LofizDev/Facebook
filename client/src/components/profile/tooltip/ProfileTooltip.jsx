import { useTranslation } from 'react-i18next'
import { useStyles } from '../tabs/style'
import { followTooltip, liveAT } from '../../../common/icon/Icons'
export const ProfileTooltip = ({ user }) => {
    const classes = useStyles()
    const { t } = useTranslation()
    return (
        <div style={{ backgroundColor: 'var(--bg-first)', maxWidth: 'none !important', display: 'flex', alignItems: 'center', }}>
            <div className={classes.tooltipLeft}>
                <img style={{ width: '90px', height: '90px', borderRadius: '50%' }}
                    src={user.avatar}
                    alt="avatar" />
            </div>
            <div className={classes.tooltipRight}>
                <h3 className={classes.fullnameTooltip}>
                    {user.fullname}
                </h3>
                {
                    user.liveAt && (
                        <div className={classes.labelAboutInfo} >
                            <img className={classes.iconAboutProfile} src={liveAT} alt="icon" />
                            <span style={{ display: 'flex' }} className={classes.titleInfo}>
                                <p>Sống tại&nbsp;</p>
                                <p className={classes.from}>{user.liveAt}</p>
                            </span>
                        </div>
                    )
                }
                <div className={classes.labelAboutInfo} >
                    <img className={classes.iconAboutProfile} src={followTooltip} alt="icon" />
                    <span style={{ display: 'flex' }} className={classes.titleInfo}>
                        <p>{t('co')}&nbsp;</p>
                        <p className={classes.from}>{user.followers.length}</p>
                        <p> &nbsp;{t('nguoitheodoiTT')} </p>
                    </span>
                </div>
            </div>
        </div>
    )
}
