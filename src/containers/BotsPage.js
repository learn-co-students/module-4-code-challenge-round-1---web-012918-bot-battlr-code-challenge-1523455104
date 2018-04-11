import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      botsInArmy: [],
      clickedBot: null
    }
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots = () => {
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => this.setState({
      bots: json
    }))
  }

  remove= (array, element) => {
    return array.filter(e => e !== element);
  }

  enlistBot = (id) => {

    let bot = this.state.bots.find(bot => bot.id === id)
    console.log(bot)

    if ( this.state.botsInArmy.includes(bot) ) {
      let newArmyArray = this.remove([...this.state.botsInArmy], bot)
      this.setState({
        botsInArmy: newArmyArray
      })
    } 
    else {
        this.setState({
          botsInArmy: [...this.state.botsInArmy, bot]
        })
    }
  }

  handleCardClick = (id) => {
    this.setState({
      clickedBot: !this.state.clickedBot
    })
  }

  showAllBots = () => {
    this.setState({
      clickedBot: !this.state.clickedBot
    })
  }

  // I confused myself at the end. Had more of it working
  render() {
    return (
      <div>
        <YourBotArmy botsInArmy={this.state.botsInArmy} enlistBot={this.enlistBot} />
        { this.state.clickedBot ? <BotSpecs bot={this.state.clickedBot} showAllBots={this.showAllBots} /> : <BotCollection handleCardClick={this.handleCardClick} showAllBots={showAllBots} bots={this.state.bots} />  }
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
