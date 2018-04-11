import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()

    this.state = {
      botArray: [],
      yourArmy: []
    }
  }
  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({
      botArray: json
    }))
  }

  addToArmy = (bot) => {
    if (!this.state.yourArmy.includes(bot)) {
      this.setState({
        yourArmy: [...this.state.yourArmy, bot]
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.yourArmy} />
        <BotCollection bots={this.state.botArray} addToArmy={this.addToArmy} />

      </div>
    );
  }

}

export default BotsPage;
