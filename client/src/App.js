import React, { useEffect } from 'react'
import './CustomStyle.css';
import './Theme.css'
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Watch from './pages/watch/Watch';
import Live from './nestedRoute/live/Live'
import Shows from './nestedRoute/shows/Shows';
import Saved from './nestedRoute/saved/Saved';
import Login from './pages/login/Login';
import Notify from './components/notify/Notify';
import { refreshToken } from './redux/actions/authAction';
import { useSelector, useDispatch } from 'react-redux'
import Register from './pages/register/Register';
import PrivateRouter from './customRouter/PrivateRouter';
import Profile from './pages/profile/Profile'
import CreatePostsBox from './components/profile/dialogs/CreatePostsBox';
import ScrollTopRouter from '../../client/src/customRouter/ScrollTopRouter';
function App() {
  const { auth, status } = useSelector(state => state)
  const dispatch = useDispatch()

  // Auto login
  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])



  return (
    <Router>
      <ScrollTopRouter>
        {auth.token && <Header />}
        {status && <CreatePostsBox />}
        <Notify />
        <Switch>
          <Route path='/' exact component={auth.token ? Home : Login}></Route>
          <Route path='/register' exact component={Register}></Route>
          <Route path='/login' exact component={Login}></Route>
          <PrivateRouter path='/watch' exact component={Watch}></PrivateRouter>
          {/* Nested Route */}
          <PrivateRouter path='/watch/live' exact component={Live}></PrivateRouter>
          <PrivateRouter path='/watch/shows' exact component={Shows}></PrivateRouter>
          <PrivateRouter path='/watch/saved' exact component={Saved}></PrivateRouter>
          <PrivateRouter path='/:page/:id' exact component={Profile}></PrivateRouter>
          <PrivateRouter path='/:page/:id/:topic' exact component={Profile}></PrivateRouter>
        </Switch>
      </ScrollTopRouter>
    </Router>
  );
}

export default App;
