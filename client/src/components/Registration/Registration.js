import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import Info from '../Info/Info'
import SpeakerIntro from '../SpeakerIntro/SpeakerIntro'
import Speakers from '../Speakers/Speakers'
import FeaturedBy from '../FeaturedBy/FeaturedBy'
import CallToAction from '../CallToAction/CallToAction'
import Benefits from '../Benefits/Benefits'
import CommonQuestions from '../CommonQuestions/CommonQuestions'
import Host from '../Host/Host'

import HeaderData from '../../data/header.json'
import InfoData from '../../data/info.json'
import SpeakerIntroData from '../../data/speaker-intro.json'
import SpeakersData from '../../data/speakers.json'
import FeaturedByData from '../../data/featured-by.json'
import CallToActionData from '../../data/call-to-action.json'
import BenefitsData from '../../data/benefits.json'
import CommonQuestionsData from '../../data/common-questions.json'
import HostData from '../../data/host.json'
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
        {this.state.emailOptIn ? <EmailOptIn closeEmailOptIn={this.closeEmailOptIn}/> : ''}
        <NavBar openEmailOptIn={this.openEmailOptIn}/>
        <Header data={HeaderData[0]} openEmailOptIn={this.openEmailOptIn}/>
        <Info data={InfoData[0]} openEmailOptIn={this.openEmailOptIn}/>
        <SpeakerIntro data={SpeakerIntroData[0]}/>
        <Speakers data={SpeakersData[0]} />
        <FeaturedBy data={FeaturedByData[0]} />
        <CallToAction data={CallToActionData[0]} openEmailOptIn={this.openEmailOptIn} />
        <Benefits data={BenefitsData[0]} />
        <CallToAction data={CallToActionData[1]} openEmailOptIn={this.openEmailOptIn}/>
        <CommonQuestions data={CommonQuestionsData} />
        <CallToAction data={CallToActionData[2]} openEmailOptIn={this.openEmailOptIn}/>
        <Host data={HostData[0]} />
        <CallToAction data={CallToActionData[3]} openEmailOptIn={this.openEmailOptIn}/>
      </div>
    );
  }
}

export default Registration;
