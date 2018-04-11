import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
      botsInArmy: []
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

  handleCardClick = (id) => {

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


  render() {
    return (
      <div>
        <YourBotArmy botsInArmy={this.state.botsInArmy} handleCardClick={this.handleCardClick} />
        <BotCollection handleCardClick={this.handleCardClick} bots={this.state.bots} />
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
