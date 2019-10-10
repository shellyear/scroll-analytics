import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'; 
import Main from './components/Main';
import Posts from './components/Posts';
import Data from './components/Data';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' render={(props) => <Main {...props}/>} />
        <Route exact path='/data' render={(props) => <Data {...props}/>} /> 
        <Route exact path='/posts' render={(props) => <Posts {...props}/>} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
