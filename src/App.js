import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Watch from './pages/watch/Watch';
function App() {
  return (
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/watch' exact component={Watch}></Route>
        </Switch>
      </Router>
  );
}

export default App;
