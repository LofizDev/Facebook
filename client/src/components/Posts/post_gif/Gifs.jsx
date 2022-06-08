import React from 'react'
import { useEffect, useState } from 'react'
import FetchGif from './FetchGif'
import ListOfGifs from './ListOfGifs'
import FormGifs from './FormGifs'
import LoadingButton from '../../notify/loadingButton/LoadingButton'

export default function Gifs({ setImage, setOpen }) {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
    const [keyword, setKeyword] = useState('ronaldo')

    useEffect(() => {
        setLoading(true)
        const getGif = async () => {
            const res = await FetchGif(keyword)
            saveGifs(res)
        }
        getGif()
    }, [keyword])

    const saveGifs = (n) => {

        const gifs = n.map((el) => {
            const { images, id, title } = el
            const { downsized_medium } = images
            const { url } = downsized_medium
            return { id, title, url }
        })
        setLoading(false)
        setGifs(gifs)
    }
    const changeKeyword = (n) => {
        setKeyword(n)
    }

    if (loading) {
        return (
            <div style={{ margin: '50% auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LoadingButton />
            </div>
        )
    }

    return (
        <div style={{ width: '400px', top: '15%', transform: 'translateX(-50%)', backgroundColor: 'var(--bg-first)', position: 'absolute', left: '50%' }}>
            <FormGifs changeKeyword={changeKeyword} />
            <div style={{ height: '450px', overflow: 'scroll' }}>
                {
                    gifs.map(({ url, id, title }) => {
                        return (
                            <div onClick={() => { setImage(url); setOpen(false) }}>
                                <ListOfGifs key={id} url={url} id={id} title={title} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
