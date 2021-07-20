import './App.css';
import Navbar from './Components/Navbar/navbar'
import SideBar from './Components/Sidebar/SideBar'

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import Home from './Components/Home/home'
import Footer from './Components/Footer/footer'
import Classes from './Components/Class/classes'
import Teacher from './Components/Teacher/Teacher'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideBar />
      <Router>
        <Switch className='route-component'>
          <Route exact path='/' component={Home}/>
          <Route path='/class' component={Classes}/>
          <Route path='/teacher' component={Teacher}/>
        </Switch>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
