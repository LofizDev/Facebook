import React , {useEffect} from 'react'
import './App.css';
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
import { useSelector,useDispatch } from 'react-redux'
import Register from './pages/register/Register';
function App() {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  // Auto login
  useEffect(() => {
    dispatch(refreshToken())
  },[dispatch])


  return (
    <Router>
      {auth.token && <Header />}
      <Notify />
      <Switch>
        <Route path='/' exact component={auth.token ? Home : Login}></Route>
        <Route path='/register' exact component={auth.token ? Home : Register}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/watch' exact component={Watch}></Route>
        {/* Nested Route */}
        <Route path='/watch/live' exact component={Live}></Route>
        <Route path='/watch/shows' exact component={Shows}></Route>
        <Route path='/watch/saved' exact component={Saved}></Route>
      </Switch>
    </Router>
  );
}

export default App;
