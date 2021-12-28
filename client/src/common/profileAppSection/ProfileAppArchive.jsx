import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '../../components/profile/tabs/style'
import { Link } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings';
const useStyled = makeStyles((theme) => ({
    listImage: {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        marginTop: '16px'
    },
    cardImage: {
        width: 'calc(20% - 8px)',
        float: 'left',
        margin: '4px',
        [theme.breakpoints.down('md')]: {
            width: 'calc(25% - 8px)'
        },
        [theme.breakpoints.down('sm')]: {
            width: 'calc(33.3333% - 8px)'
        },
    },
    seeFull: {
        width: '100%',
        height: '40px',
        backgroundColor: 'var(--secondary-button-background)',
        textAlign: 'center',
        lineHeight: '40px',
        marginTop: '8px',
        cursor: 'pointer',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: 'var(--hover-overlay-gray)'
        }
    },
    attension: {
        fontSize: '14.5px',
        color: 'var(--secondary-text)',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center'
    },
    setting: {
        display: 'flex',
        alignItems: 'center',
        padding: '7px 15px',
        justifyContent: 'center',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: 'var(--secondary-button-background)',
        marginLeft: '8px',
        '&:hover': {
            backgroundColor: 'var(--hover-overlay-gray)'
        }
    },
    image: {
        height: '280px',
        width: '100%',
        borderRadius: '8px',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            height: '250px',
        },
    }
}));
const itemData = [
    {
        img: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/267897708_461277755511603_6624332542674402279_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nS04-E4YscIAX8oG7yq&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-tx1JSgq44mOg0o3EAIGSzTeKAwDxdeuo03OvXXSskoQ&oe=61CEF019',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/150250496_266206071685440_52984817503094327_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DpUYyi8sQ8oAX8cjj3w&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8BcUVz-zuJavPPWoAaemu-DEQ6_pEI3H_rWmAEmHWgXw&oe=61F06CB6',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/100094032_146337610338954_6924242160308977664_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_9FjXI8wW4EAX_rjFYd&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT8n4LPsNRCqKCkZyyMOvGSPD8riR-WH3p9A1l2M05_ppw&oe=61F0B0D5',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/269743429_3329743520586196_2272038347108935166_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Usvwxpplgl4AX-rS7_J&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT9n1msWowIJBo77FozMg4Q1PY-1Jg5-Q1q09fovORFnHQ&oe=61CF8911',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/196125896_3182143935346156_6860061682243980766_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UBM4vMgn7JEAX_DLwdQ&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT9yWHKa49NKkIeOpV192UyDA6XB0o8B8YBFMrefV-WvjQ&oe=61EF34EC',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/175175006_3136221196605097_7152489356365580256_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DaVpGpkbU2oAX9HIr08&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT89ROIP3gw6n9MPMd5Xxe96OsA5YNjgjxo-DQtZVpxHig&oe=61EF8253',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/150250496_266206071685440_52984817503094327_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DpUYyi8sQ8oAX8cjj3w&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8BcUVz-zuJavPPWoAaemu-DEQ6_pEI3H_rWmAEmHWgXw&oe=61F06CB6',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/150250496_266206071685440_52984817503094327_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DpUYyi8sQ8oAX8cjj3w&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8BcUVz-zuJavPPWoAaemu-DEQ6_pEI3H_rWmAEmHWgXw&oe=61F06CB6',
        title: 'Image',
        author: 'author',
        cols: 2,
    },

];
function ProfileAppArchive({ user, showSeeAll }) {
    const { t } = useTranslation()
    const classes = useStyles()
    const classed = useStyled()

    console.log('hi am user', user);
    return (
        <div className={classes.profileBottom}>
            <div className={classes.followers}>
                {/* Followers Title */}
                <h3 className={classes.followersTop} style={{ alignItems: 'center' }}>
                    <h4 className={classes.title}>{t('kholuutrutin')}</h4>
                    <div className={classed.attension}>
                        <p >Chỉ mình bạn xem được kho lưu trữ tin của mình</p>
                        <div className={classed.setting}>
                            <SettingsIcon fontSize='small' />
                        </div>
                    </div>
                </h3>
                <div className={classed.listImage}>
                    {itemData.slice(0, 10).map(img => (
                        <div className={classed.cardImage}>
                            <img className={classed.image} src={img.img} alt="img" />
                        </div>
                    ))}
                </div>
                {itemData.length > 5 && showSeeAll && (
                    <Link to={`/profile/${user?._id}/archive`} >
                        <div className={classed.seeFull}>
                            Xem tất cả
                        </div>
                    </Link>
                )}
            </div>
        </div >
    )
}

export default ProfileAppArchive
