import {Component} from 'react'
import{Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import ThankYou from './components/ThankYou'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/thankyou' Component={ThankYou}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
}
}

export default App;
