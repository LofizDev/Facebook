import React, { useState, useEffect } from 'react'
import Info from '../../components/profile/Info'
import { useStyles } from './style'
import Loading from '../../components/notify/Loading'
import { Switch, useParams, Route } from 'react-router-dom'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getProfileUsers } from '../../redux/actions/profileAction'
import About from './tabs/About'
import Photos from './tabs/Photos'
import Post from './tabs/Post'
import Followers from './tabs/Followers'
import NewsArchive from './tabs/NewsArchive'
import Videos from './tabs/Videos'

function Profile() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState([])
    const { id } = useParams()
    const { auth, profile } = useSelector(state => state)

    // Tabs Changes page
    const [tabs, setTabs] = useState('posts')
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
    }, [id, dispatch, profile.users, auth])





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
                                        <Info user={user} tabs={tabs} setTabs={setTabs} />
                                    </div>
                                </div>
                            </div>
                            <Switch>
                                <Route path={`/profile/${id}/photos`} component={Photos} />
                                <Route path={`/profile/${id}/followers`} component={Followers} />
                                <Route path={`/profile/${id}/archive`} component={NewsArchive} />
                                <Route path={`/profile/${id}/about`} exact component={About} />
                                <Route path={`/profile/${id}/videos`} exact component={Videos} />
                                <Route path={`/profile/${id}`}>
                                    <Post user={user} />
                                </Route>
                            </Switch>

                        </div>
                    ))}
                </>
            }
        </>
    )






}

export default Profile
