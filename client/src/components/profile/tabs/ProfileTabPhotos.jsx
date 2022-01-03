import { useState } from 'react'
import ProfileAppArchive from '../../../common/profileAppSection/ProfileAppArchive'
import ProfileAppPhotos from '../../../common/profileAppSection/ProfileAppPhotos'
import ProfileAppVideos from '../../../common/profileAppSection/ProfileAppVideos'

function ProfileTabPhotos({ user }) {
    const [showSeeAll] = useState(true)

    return (
        // <ProfileTabPhotos />
        <div style={{ marginBottom: '24px' }}>
            <ProfileAppPhotos user={user} />
            <ProfileAppArchive user={user} showSeeAll={showSeeAll} />
            <ProfileAppVideos />
        </div>
    )
}

export default ProfileTabPhotos
