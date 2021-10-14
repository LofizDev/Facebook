import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewFeed from './components/NewFeed/NewFeed';
function App() {
  return (
    <Router>
      <Switch>
         <Home/>
         <Route path='/' exact component={NewFeed}></Route>
      </Switch>
  </Router>
  );
}

export default App;
