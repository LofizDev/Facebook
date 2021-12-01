import React, { useState, useEffect } from 'react'
import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'
import TilesFeedAbout from '../../components/profile/TilesFeedAbout'
import ProfileComposer from '../../components/profile/ProfileComposer'
import TilesFeedPhotos from '../../components/profile/TilesFeedPhotos'
import TilesFeedFriends from '../../components/profile/TilesFeedFriends'
import { useStyles } from './style'
import { useTranslation } from 'react-i18next'
import Loading from '../../components/notify/Loading'
import { useParams } from 'react-router-dom'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getProfileUsers } from '../../redux/actions/profileAction'

function Profile() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState([])
    const { id } = useParams()
    const { auth, profile } = useSelector(state => state)

    // Profile Data 
    useEffect(() => {
        // Current user
        if (auth.user?._id === id) {
            setUserData([auth.user])
        } else {
            // Another user
            dispatch(getProfileUsers({ users: profile.users, id }))
            const newUserData = profile.users.filter(user => user._id === id)
            setUserData(newUserData)

            // History search
            const history = newUserData.map(his => ({ img: his.avatar, fullname: his.fullname, url: his._id }))


            // const oldData = JSON.parse(localStorage.getItem("Search History"))
            // const filterData = oldData && oldData.map(user => user.url)

            const existingSearchHistory = JSON.parse(localStorage.getItem("Search History") || "[]")


            // if (existingSearchHistory !== filterData) {
            existingSearchHistory.push(...history)
            // }
            localStorage.setItem("Search History", JSON.stringify(existingSearchHistory));

            // console.log(existingSearchHistory, filterData);
        }
    }, [id, dispatch, profile.users])



    return (
        <>
            {profile.loading
                ? <Loading />
                : <>
                    {userData.map((user) => (
                        <div key={user._id}>
                            <div className={classes.profileTop}>
                                <div className={classes.infoContainer}>
                                    <div className={classes.info}>
                                        <Info user={user} />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.profileBottom}>
                                <div className={classes.profileBottomLeft}>
                                    <TilesFeedAbout user={user} />
                                    <TilesFeedPhotos />
                                    <TilesFeedFriends />
                                    <span style={{ display: 'flex', justifyContent: 'center', color: "var(--secondary-text)" }}>
                                        Development by <span style={{ fontWeight: '500', color: 'rgb(246 104 95' }}>
                                            &nbsp;Khoi Lam&nbsp;
                                        </span>with 🧡 © 2022
                                    </span>
                                </div>
                                <div className={classes.profileBottomRight}>
                                    <ProfileComposer user={user} />
                                    <Posts user={user} />
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            }
        </>
    )






}

export default Profile
