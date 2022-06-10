import React, { useState, useEffect } from 'react'
import { useStyles } from './musicModalStyle'
import musicLoading from '../../../images/posts/musicLoading.gif'
import { SongsData } from './SongsData'

function MusicModal() {
    const classes = useStyles();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [renderingSongs, setRenderingSongs] = useState()
    const [currentTopSongs, setCurrentTopSongs] = useState('Nhạc Trẻ')


    useEffect(() => {
        const getAllMusic = async () => {
            setLoading(true)
            await fetch('https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR0WGpSqnYR-rtXcdoH48kMqBwMhgtcjzjExN7e_EiCs5BZfdDqXkMz5SbI')
                .then(res => res.json())
                .then(data => setData(data.songs.top100_VN))
            setLoading(false)
        }
        getAllMusic()
    }, [])


    useEffect(() => {
        if (data && currentTopSongs === 'Nhạc Trẻ') setRenderingSongs(data[0])
        if (data && currentTopSongs === 'Trữ Tình') setRenderingSongs(data[1])
        if (data && currentTopSongs === 'Nhạc Trịnh') setRenderingSongs(data[2])
        if (data && currentTopSongs === 'EDM Việt') setRenderingSongs(data[5])
        if (data && currentTopSongs === 'Rap Việt') setRenderingSongs(data[4])
    }, [currentTopSongs, data])


    return (
        <div className={classes.musicContainer}>
            {loading && (
                <img style={{ marginTop: '30px', userSelect: 'none' }} src={musicLoading} alt="loading" />
            )}
            {!loading && renderingSongs && (
                <>
                    <ul className={classes.category}>
                        {SongsData.map((item, index) => (
                            <li onClick={() => setCurrentTopSongs(item.name)} className={classes.option}
                                key={index}>
                                <img className={classes.coverCate} src={item.url} alt="song" />
                                <p style={{ fontWeight: '500' }}>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                    {/* list musics */}
                    <div className={classes.listSongs}>
                        {renderingSongs.songs.slice(0, 70).map((item, index) => (
                            <div key={index} className={classes.singleSong}>
                                <div className={classes.songLeft}>
                                    <img style={{ width: '45px', height: '45px', borderRadius: '12px', objectFit: 'cover' }}
                                        src={item.avatar}
                                        alt="song" />
                                </div>
                                <div className={classes.songRight}>
                                    <div className={classes.songTitle}>{item.title}</div>
                                    <div className={classes.songAuthor}>{item.creator}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default MusicModal