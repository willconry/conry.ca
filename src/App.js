import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Resume from './components/pages/Resume/Resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/resume' component={Resume} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
