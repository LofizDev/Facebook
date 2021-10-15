import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
         <Route path='/' exact component={Home}></Route>
      </Switch>
  </Router>
  );
}

export default App;
