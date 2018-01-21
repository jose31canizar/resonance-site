import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import Info from '../Info/Info'
import SpeakerIntro from '../SpeakerIntro/SpeakerIntro'
import Artists from '../Artists/Artists'
import FeaturedBy from '../FeaturedBy/FeaturedBy'
import CallToAction from '../CallToAction/CallToAction'
import Benefits from '../Benefits/Benefits'
import MainCallToAction from '../MainCallToAction/MainCallToAction'

import HeaderData from '../../data/header.json'
import NavBarData from '../../data/navbar.json'
import InfoData from '../../data/info.json'
import SpeakerIntroData from '../../data/speaker-intro.json'
import ArtistsData from '../../data/artists.json'
import FeaturedByData from '../../data/featured-by.json'
import CallToActionData from '../../data/call-to-action.json'
import BenefitsData from '../../data/benefits.json'
import MainCallToActionData from '../../data/main-call-to-action.json'
import EmailOptInData from '../../data/email-opt-in.json'

import EmailOptIn from '../EmailOptIn/EmailOptIn'
import FreePassButton from '../FreePassButton/FreePassButton'

import './Registration.styl'

class Registration extends Component {
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
      <div className="registration">
        {this.state.emailOptIn ? 
          <EmailOptIn 
            type='addMember' 
            closeEmailOptIn={this.closeEmailOptIn} 
            data={EmailOptInData[0]}/> : ''}
        <NavBar 
          data={NavBarData[0]} 
          openEmailOptIn={this.openEmailOptIn} 
          width={this.props.width}/>
        <Header 
          data={HeaderData[0]} 
          openEmailOptIn={this.openEmailOptIn} 
          buttonType='addMember'/>
        <Info 
          data={InfoData[0]} 
          openEmailOptIn={this.openEmailOptIn}/>
        <Benefits 
          data={BenefitsData[0]} />
        <CallToAction 
          data={CallToActionData[0]} 
          openEmailOptIn={this.openEmailOptIn}/>
      </div>
    );
  }
}

export default Registration;
