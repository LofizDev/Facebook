import React from 'react'
import Loading from './Loading'
import { useSelector, useDispatch } from 'react-redux'

function Notify() {
    const { notify } = useSelector(state => state)
    return (
        <div> 
            {notify.loading && <Loading />}
        </div>
    )
}

export default Notify
