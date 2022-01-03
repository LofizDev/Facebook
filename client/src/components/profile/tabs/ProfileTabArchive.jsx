import React from 'react'
import ProfileAppArchive from '../../../common/profileAppSection/ProfileAppArchive'
import ProfileAppVideos from '../../../common/profileAppSection/ProfileAppVideos'

function ProfileTabArchive({ user }) {
    return (
        <div style={{ marginBottom: '24px' }}>
            <ProfileAppArchive user={user} />
            <ProfileAppVideos />
        </div>
    )
}

export default ProfileTabArchive
