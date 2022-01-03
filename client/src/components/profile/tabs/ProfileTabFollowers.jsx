import { useState } from 'react';
import ProfileAppFollowers from '../../../common/profileAppSection/ProfileAppFollowers';
import ProfileAppPhotos from '../../../common/profileAppSection/ProfileAppPhotos';
import ProfileAppVideos from '../../../common/profileAppSection/ProfileAppVideos';



function ProfileTabFollowers({ user }) {
    const [hideSeeAll] = useState(true)
    return (
        <div style={{ marginBottom: '24px' }}>
            <ProfileAppFollowers user={user} />
            <ProfileAppPhotos user={user} hideSeeAll={hideSeeAll} />
            <ProfileAppVideos user={user} />
        </div>
    )
}

export default ProfileTabFollowers