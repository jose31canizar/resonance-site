import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import Registration from './components/Registration/Registration'
import Beta from './components/Beta/Beta'
import ThankYou from './components/ThankYou/ThankYou'
import Login from './components/Login/Login'
import './styl/main.styl'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ThankYouData from './data/thankyou.json'

import { Provider } from 'preact-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: Math.max(document.body.clientWidth, window.innerWidth || 0)
    }
  }
  componentDidMount() {
    const w = Math.max(document.body.clientWidth, window.innerWidth || 0)
      this.setState({
        width: w
      })
    window.addEventListener('resize', () => {
      const w = Math.max(document.body.clientWidth, window.innerWidth || 0)
      this.setState({
        width: w
      })
    })
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <BrowserRouter>
                <Switch>
                  <Route path='/registration' render={() => <Registration width={this.state.width}/>}/>
                  <Route path='/beta' render={() => <Beta width={this.state.width}/>}/>
                  <Route path='/login' render={() => <Login type='login' width={this.state.width}/>}/>
                  <Route path='/signup' render={() => <Login type='signup' width={this.state.width}/>}/>
                  <Route path='/thankyou' render={() => <ThankYou text={ThankYouData[0].text}/>}/>
                  <Route path='/thankyoubeta' render={() => <ThankYou text={ThankYouData[1].text}/>}/>
                  <Route path='*' component={Registration}/>
                </Switch>
            </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
