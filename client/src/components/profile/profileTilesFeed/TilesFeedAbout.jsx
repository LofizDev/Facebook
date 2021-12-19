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
    const [addBio, setAddBio] = useState(false)
    const [addHobbies, setAddHobbies] = useState(false)
    const [edit, setEdit] = useState(false)
    const [currentAddress, setCurrentAddress] = useState(user.liveAt)
    const [country, setCountry] = useState(user.from)
    const initialState = { from: '', liveAt: '', bio: '', relationship: 'Độc thân' }
    const [relationship, setRelationship] = useState(user.relationship)
    const [userData, setUserData] = useState(initialState)

    // Redux
    const { auth, alert, profile } = useSelector(state => state)
    const dispatch = useDispatch()

    // Get value from input
    const handleChangeValue = (e) => {
        const value = e.target.value
        setUserData({ ...userData, [e.target.name]: value })
    }

    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user, user])

    // Get and set suggestions adress
    useEffect(() => {
        setUserData({ ...userData, from: country, bio: userData.bio, liveAt: currentAddress, relationship: relationship })
    }, [country, currentAddress, relationship, userData.bio])

    // Update info
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProfileUsers({ userData, auth }))

    }

    // Hide Bio box when submit
    useEffect(() => {
        if (alert.success) {
            setAddBio(false)
            setEdit(false)
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
                {addBio === false && (
                    <p style={{ textAlign: 'center', margin: '1px 0 -1px' }}>{user.bio}</p>
                )}
                {/* text decoration */}
                {user.bio && auth?.user?._id !== user?._id && (
                    <div className={classes.textDec}></div>
                )}
                {addBio === false && auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setAddBio(true)}
                        className={classes.label}>
                        {t('themtieusu')}
                    </span>
                )}

                {/* Bio box */}
                {addBio && (
                    <BioBox
                        handleSubmit={handleSubmit}
                        handleChangeValue={handleChangeValue}
                        setAddBio={setAddBio}
                        userData={userData.bio}
                        setUserData={userData.bio}
                    />
                )}

                {/* List info */}
                <ListInfoAbout user={user} />

                {/* Adjust Detail */}
                {edit &&
                    (<AdressBox
                        setCountry={setCountry}
                        currentAddress={currentAddress}
                        country={country}
                        handleChangeValue={handleChangeValue}
                        handleSubmit={handleSubmit}
                        relationship={relationship}
                        setRelationship={setRelationship}
                        setCurrentAddress={setCurrentAddress}
                        alert={alert}
                        setEdit={setEdit} />
                    )}
                {auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setEdit(true)}
                        className={classes.label}>
                        {t('chinhsuachitiet')}
                    </span>
                )}

                {/* Add Hobbies */}
                {auth?.user?._id === user?._id && (
                    <span
                        onClick={() => setAddHobbies(true)}
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
            {addHobbies && (
                <HobbiesBox setAddHobbies={setAddHobbies} />
            )}
        </>
    )
}

export default TilesFeedAbout
