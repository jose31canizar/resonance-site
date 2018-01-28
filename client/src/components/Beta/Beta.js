import React, { Component } from 'react'
import CallToAction from '../CallToAction/CallToAction'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import EmailOptIn from '../EmailOptIn/EmailOptIn'
import FreePassButton from '../FreePassButton/FreePassButton'

import HeaderData from '../../data/beta/header.json'
import NavBarData from '../../data/beta/navbar.json'
import CallToActionData from '../../data/beta/call-to-action.json'
import EmailOptInData from '../../data/beta/email-opt-in.json'

import './Beta.styl'

class Beta extends Component {
constructor(props) {
    super(props)
        this.state = {
            'emailOptIn': false
        }
        this.openEmailOptIn = this.openEmailOptIn.bind(this)
        this.closeEmailOptIn = this.closeEmailOptIn.bind(this)
    }
    openEmailOptIn() {
        this.setState({
        'emailOptIn': true
        })
    }
    closeEmailOptIn() {
        this.setState({
        'emailOptIn': false
        })
    }
    render() {
        return (
            <div className="beta">
                {this.state.emailOptIn ? 
                <EmailOptIn 
                  type='signUpForBeta' 
                  closeEmailOptIn={this.closeEmailOptIn} 
                  data={EmailOptInData[0]}/> : ''}
                <NavBar 
                  data={NavBarData[0]} 
                  openEmailOptIn={this.openEmailOptIn} 
                  width={this.props.width}
                  />
                <Header 
                  data={HeaderData[0]} 
                  openEmailOptIn={this.openEmailOptIn} 
                  buttonType='beta'/>
                <CallToAction 
                  data={CallToActionData[0]} 
                  openEmailOptIn={this.openEmailOptIn}  
                  buttonType='beta'/>
            </div>
        );
    }
}

export default Beta;
