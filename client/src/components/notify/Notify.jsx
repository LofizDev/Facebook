import React from 'react'
import Loading from './Loading'
import { useSelector } from 'react-redux'
function Notify() {
    const { alert } = useSelector(state => state)
    return (
        <div>
            {alert.loading && <Loading />}
        </div>
    )
}

export default Notify
