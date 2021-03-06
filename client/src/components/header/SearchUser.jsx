import React, { useState, useEffect } from 'react'
import { Search } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import { useStyles } from './style'
import { getDataAPI } from '../../utils/fetchData'
import { useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import UserCard from './UserCard'
import { Link } from 'react-router-dom'

function SearchUser() {
  const classes = useStyles();
  const { t } = useTranslation()

  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(false)
  const [currentId, setCurrentId] = useState('')
  const [recentSearches, setRecentSearches] = useState([])
  const [showSearchBox, setShowSearchBox] = useState(false)

  // Redux
  const dispatch = useDispatch()

  // Close when click to see user
  const handleClose = () => {
    setSearch('')
    setUsers([])
    setShowSearchBox(false)
  }

  // Call api search user
  useEffect(() => {
    if (search) {
      setLoading(true)
      getDataAPI(`search?username=${search}`)
        .then(res => {
          setUsers(res.data.users)
          setLoading(false)
        })
        .catch(err => {
          dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
        })
    } else {
      setUsers([])
    }
  }, [search, dispatch])


  // Get List Search History in LocalStorage
  const listHistorySearch = JSON.parse(localStorage.getItem("Search History"))

  const handleRemoveUser = (id) => {
    setCurrentId(id)
    setRecentSearches(recentSearches.filter(item => item.id !== id))

  }
  useEffect(() => {
    setRecentSearches(listHistorySearch)
  }, [showSearchBox])

  useEffect(() => {
    localStorage.setItem("Search History", JSON.stringify(recentSearches))
  }, [recentSearches])


  return (
    <>
      {/* Search Form */}
      <form>
        <div
          onClick={() => setShowSearchBox(true)}
          style={{ marginLeft: showSearchBox ? '5px' : '' }}
          className={classes.searchBar}>
          {showSearchBox === false && (
            <Search className={classes.searchIcon} />
          )}
          <input
            value={search}
            style={{ paddingLeft: showSearchBox ? '13px' : '', width: showSearchBox ? '220px' : '' }}
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
          {/* Loading... */}
          {/* {loading && <LoadingSearch />} */}

          {/* Text Recent Search */}
          {(recentSearches !== null) && (
            <div className={classes.listSearchHistory}>
              <p className={classes.recentSearch}>{t('timkiemganday')}</p>
              <span className={classes.editRecentSearch}>{t('chinhsuatimkiem')}</span>
            </div>
          )}

          {/* List search */}
          {search && users?.map(user => (
            <UserCard
              handleClose={handleClose}
              recentSearches={recentSearches}
              setRecentSearches={setRecentSearches}
              user={user}
              key={user._id} />
          ))}

          {/* List User History Search */}
          {search?.length <= 0 && recentSearches && recentSearches.reverse().map((user, index) => (
            <div key={index} className={classes.singleUser}>
              <Link onClick={handleClose} to={`/profile/${user.id}`}>
                <div className={classes.listUserHistory}>
                  <img className={classes.avatarUserHistory} src={user.avatar} alt="avatar" />
                  <p className={classes.fullnameUserHistory}>{user.name}</p>
                </div>
              </Link>
              <div onClick={() => { handleRemoveUser(user.id) }} className={classes.btnRemove}>
                <div className={classes.removeCard}></div>
              </div>
            </div>
          ))}

          {/* Icon search */}
          {(search?.length > 0) && (
            <div style={{ marginTop: loading ? '80px' : '10px' }} className={classes.searchTyping}>
              <div className={classes.searchTypingIcon}>
                <i className={classes.typingIcon}></i>
              </div>
              <p className={classes.typingText}>{t('searchInput')}<strong> {search}</strong></p>
            </div>
          )}

          {/* Show history search text */}
          {(search?.length <= 0 && recentSearches === null) && (
            <p style={{ fontSize: '14px', paddingTop: '20px', textAlign: 'center' }}>{t('historySearch')}</p>
          )}

          {/* List Search history */}
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
