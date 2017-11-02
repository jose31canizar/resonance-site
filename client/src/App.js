import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import Registration from './components/Registration/Registration'
import ThankYou from './components/ThankYou/ThankYou'
import './styl/main.styl'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
            <Switch>
              <Route path='/registration' component={Registration}/>
              <Route path='/thankyou' component={ThankYou}/>
              <Route path='*' component={Registration}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
