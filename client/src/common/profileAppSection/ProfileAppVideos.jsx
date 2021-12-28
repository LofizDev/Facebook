import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '../../components/profile/tabs/style'
import { Link } from 'react-router-dom'
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
        [theme.breakpoints.down('xs')]: {
            width: 'calc(50% - 8px)'
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
    image: {
        height: '160px',
        width: '100%',
        borderRadius: '8px',
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
            height: '190px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '190px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '200px',
        },
    }
}));
const itemData = [
    {
        img: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/213653083_358231988992534_8114434424586311993_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=ACJ8S47RwHgAX_7O7hf&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8QwY2ZGnUJEwmAlyz6Bb9v63S0yz3WNkLcCny_KM8itg&oe=61CFA9AE',
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/179652526_316401386508928_7538676970790677697_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=DACUPAs5SVAAX9Pz0O5&tn=STC5MD_hBMuwowqS&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-jvk74eMJVslHbCJr2iVc9TxnaRMrOlD0yAElwi7pCyA&oe=61F1F076',
        title: 'Image',
        author: 'author',
        cols: 2,
    },

];
function ProfileAppPhotos({ user }) {
    const { t } = useTranslation()
    const classes = useStyles()
    const classed = useStyled()

    return (
        <div className={classes.profileBottom}>
            <div className={classes.followers}>
                {/* Followers Title */}
                <h3 className={classes.followersTop}>
                    <h4 className={classes.title}>{t('video')}</h4>
                </h3>
                <div className={classes.followSelect}>
                    <div id='follow-active' className={classes.followOption}>
                        {t('videocuaban')}
                    </div>
                </div>
                <div className={classed.listImage}>
                    {itemData.slice(0, 10).map(img => (
                        <div className={classed.cardImage}>
                            <img className={classed.image} src={img.img} alt="img" />
                        </div>
                    ))}
                </div>
                {
                    itemData.length > 5 && (
                        <Link to={`/profile/${user?._id}/videos`} >
                            <div className={classed.seeFull}>
                                Xem tất cả
                            </div>
                        </Link>
                    )
                }
            </div>
        </div >
    )
}

export default ProfileAppPhotos
