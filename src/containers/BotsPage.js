import React from "react";
// import BotCard from "../components/BotCard.js"
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    bots: [],
    yourBots: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState(
        {bots: json}
      ))
  }

  addBotToArmy = botId => {
    let foundBot = this.state.bots.find(bot => bot.id === botId)
    let yourArmy = this.state.yourBots
    let enlistedBot = yourArmy.find(robot => robot.id === foundBot.id)
    if (enlistedBot === undefined) {
      this.setState({
        yourBots: [...this.state.yourBots, foundBot]
      })
    }
  }

  deleteBotToArmy = botId => {
    console.log("delete this biddie");
      // iterate through this.props
      // find the bot by id
      // splice bot off of props based on index
    let yourArmy = this.state.yourBots
    const byeBot = yourArmy.find(bot => bot.id === botId)
    const byeBotIndex = yourArmy.indexOf(byeBot)
    yourArmy.splice(byeBotIndex, 1)
    this.setState({
      yourBots: yourArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} handleClick={this.deleteBotToArmy}/>
        <BotCollection bots={this.state.bots} handleClick={this.addBotToArmy} />
      </div>
    );
  }

}

export default BotsPage;
