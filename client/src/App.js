import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import Registration from './components/Registration/Registration'
import Beta from './components/Beta/Beta'
import ThankYou from './components/ThankYou/ThankYou'
import Login from './components/Login/Login'
import './styl/main.styl'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ThankYouData from './data/thankyou.json'

import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log('from map state')
  console.log(state);
  return { loggedIn: state.loggedIn };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch({type: 'LOGIN_USER'}),
    onLogout: () => dispatch({type: 'LOGOUT_USER'})
  };
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: Math.max(document.body.clientWidth, window.innerWidth || 0)
    }
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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
  login() {
    this.props.onLogin();
  }
  logout() {
    this.props.onLogout();
  }
  isLoggedIn() {
    return this.props.loggedIn
  }
  render() {
    console.log('from app')
    console.log(this.props.loggedIn)
    const beta = this.props.loggedIn ? <Beta width={this.state.width} loggedIn={this.props.loggedIn} logout={this.logout} /> : <Login type='login' width={this.state.width} login={this.login} loggedIn={this.props.loggedIn}/>
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                  <Route path='/registration' render={() => <Registration width={this.state.width} loggedIn={this.props.loggedIn} logout={this.logout}/>}/>
                  <Route path='/beta' render={() => (
                    beta
                    )
                  }/>
                  <Route path='/login' render={() => <Login type='login' width={this.state.width} login={this.login} loggedIn={this.props.loggedIn}/>}/>
                  <Route path='/signup' render={() => <Login type='signup' width={this.state.width}/>}/>
                  <Route path='/thankyou' render={() => <ThankYou text={ThankYouData[0].text}/>}/>
                  <Route path='/thankyoubeta' render={() => <ThankYou text={ThankYouData[1].text}/>}/>
                  <Route path='*' component={Registration}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
