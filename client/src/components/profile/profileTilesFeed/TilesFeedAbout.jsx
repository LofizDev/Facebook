import React, { useEffect, useState } from 'react'
import { useStyles } from '../style'
import { useTranslation } from 'react-i18next'
import HobbiesBox from '../dialogs/HobbiesBox'
import BioBox from '../dialogs/BioBox'
import AdressBox from '../dialogs/AdressBox'
import LoadingUpdate from '../../notify/loadingUpdate/LoadingUpdate'

//  Redux
import { useSelector, useDispatch } from 'react-redux'
import { updateProfileUsers } from '../../../redux/actions/profileAction'
import ListInfoAbout from './ListInfoAbout'

function TilesFeedAbout({ user }) {
    const classes = useStyles()
    const { t } = useTranslation()
    // Show box
    const [showBioBox, setShowBioBox] = useState(false)
    const [showHobbiesBox, setShowHobbiesBox] = useState(false)
    const [showEditDetail, setShowEditDetail] = useState(false)

    // Current City, Hometown, Relationship, Hobbies
    const [currentCity, setCurrentCity] = useState(user?.liveAt)
    const [relationship, setRelationship] = useState(user?.relationship)
    const [hometown, setHometown] = useState(user?.from)
    const [listHobbie, setListHobbie] = useState(user?.hobbies)

    const initialState = { from: '', liveAt: '', bio: '', relationship: 'Độc thân', hobbies: [] }
    const [userData, setUserData] = useState(initialState)

    // Redux
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()

    // Get value from input
    const handleChangeValue = (e) => {
        const value = e.target.value
        setUserData({ ...userData, [e.target.name]: value })
    }

    // User Data
    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user, user])

    // Get and set suggestions adress
    useEffect(() => {
        setUserData({
            ...userData, from: hometown, bio: userData.bio,
            liveAt: currentCity, relationship: relationship, hobbies: listHobbie
        })
    }, [hometown, currentCity, listHobbie, relationship])

    // Update info
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProfileUsers({ userData, auth }))
    }

    // Hide Bio, Hobbies, EditDetail box when submit
    useEffect(() => {
        if (alert.success) {
            setShowBioBox(false)
            setShowEditDetail(false)
            setShowHobbiesBox(false)
        }
    }, [alert.success])

    return (
        <>
            <div className={classes.tilesFeedAbout}>
                <h2 style={{ fontSize: '21.5px', marginBottom: '10px' }}> {t('gioithieu')} </h2>
                {/* Loading bio */}
                {alert.loadingSecondary && (
                    <LoadingUpdate />
                )}
                {/* Add Bio */}
                {showBioBox === false && (
                    <p style={{ textAlign: 'center', margin: '1px 0 -1px' }}>{user?.bio}</p>
                )}
                {/* text decoration */}
                {user.bio && auth?.user?._id !== user?._id && (
                    <div className={classes.textDec}></div>
                )}
                {showBioBox === false && auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setShowBioBox(true)}
                        className={classes.label}>
                        {t('themtieusu')}
                    </span>
                )}

                {/* Bio box */}
                {showBioBox && (
                    <BioBox
                        handleSubmit={handleSubmit}
                        handleChangeValue={handleChangeValue}
                        setShowBioBox={setShowBioBox}
                        userData={userData.bio}
                        setUserData={userData.bio}
                    />
                )}

                {/* List info */}
                <ListInfoAbout user={user} />

                {/* Adjust Detail */}
                {showEditDetail &&
                    (<AdressBox
                        hometown={hometown}
                        setHometown={setHometown}
                        currentCity={currentCity}
                        setCurrentCity={setCurrentCity}
                        setRelationship={setRelationship}
                        relationship={relationship}
                        handleChangeValue={handleChangeValue}
                        handleSubmit={handleSubmit}
                        alert={alert}
                        setShowEditDetail={setShowEditDetail} />
                    )}
                {auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setShowEditDetail(true)}
                        className={classes.label}>
                        {t('chinhsuachitiet')}
                    </span>
                )}

                {/* Add Hobbies */}
                {auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setShowHobbiesBox(true)}
                        className={classes.label}>
                        {t('themsothich')}
                    </span>
                )}
                {/*Edit the notable part  */}
                {auth?.user?._id === user?._id && (
                    <span className={classes.label}> {t('chinhsuaphandangchuy')} </span>
                )}
            </div>

            {/* Overlay Add Hobbies */}
            {showHobbiesBox && (
                <HobbiesBox
                    setShowHobbiesBox={setShowHobbiesBox}
                    handleSubmit={handleSubmit}
                    setListHobbie={setListHobbie}
                />
            )}
        </>
    )
}

export default TilesFeedAbout