import React, { useState, useEffect } from 'react'
import { Search } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import { getDataAPI } from '../../utils/fetchData'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { Link } from 'react-router-dom'
import UserCard from './UserCard'

function SearchUser() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const [showSearchBox, setShowSearchBox] = useState(false)
  const classes = useStyles();
  const { t } = useTranslation()

  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (search && auth.token) {
      getDataAPI(`search?username=${search}`, auth.token)
        .then(res => setUsers(res.data.users))
        .catch(err => {
          dispatch({
            type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg }
          })
        })
    }else {
      setUsers([])
    }
  }, [search, auth.token, dispatch])


  return (
    <>
      <form>
        <div onClick={() => setShowSearchBox(true)} className={classes.searchBar}>
          {showSearchBox == false && (
            <Search className={classes.searchIcon} />
          )}
          <input
            value={search}
            style={{paddingLeft:showSearchBox ? '13px' : ''}}
            onChange={(e) => setSearch(e.target.value)}
            className={classes.searchInput}
            placeholder={t('timkiem')} />
        </div>
      </form>
      {/* User card */}
      {showSearchBox && (
        <div className={classes.userCard}>
          <div onClick={() => { setShowSearchBox(false); setSearch('') }} className={classes.return}>
            <svg
              className={classes.returnIcon}
              viewBox="0 0 20 20" width="20px" height="20px">
              <g transform="translate(-446 -350)"><g>
                <path d="M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z" transform="translate(355 153.5)"></path><path d="M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z" transform="translate(355 153.5)"></path></g>
              </g>
            </svg>
          </div>
          {search && users.map(user => (
            <Link key={user._id} to={`/profile/${user._id}`}>
              <UserCard user={user} />
            </Link>
          ))}
          {(search.length > 0) && (
            <div className={classes.searchTyping}>
               <div className={classes.searchTypingIcon}>
                 <i className={classes.typingIcon}></i>
               </div>
               <p className={classes.typingText}>{t('searchInput')}<strong> {search}</strong></p>
            </div>
          )}
          {(search.length <= 0) && (
            <p style={{fontSize:'14px',paddingTop:'20px', textAlign:'center'}}>{t('historySearch')}</p>
          )}
        </div>
      )}
      {/* Click close outside */}
      {showSearchBox && (
        <div onClick={() => { setShowSearchBox(false); setSearch('') }} className={classes.overlay}></div>
      )}
    </>
  )
}

export default SearchUser
