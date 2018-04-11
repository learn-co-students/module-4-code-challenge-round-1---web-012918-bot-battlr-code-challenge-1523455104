import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    yourBots: [],
    bots: []
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          bots: json
        })
      })
  }

  addBotToYourArmy = (bot) => {
    const removeIndex = this.state.bots.indexOf(bot)
    const updatedBots = [...this.state.bots]
    updatedBots.splice(removeIndex, 1)

    this.setState({
      yourBots: [...this.state.yourBots, bot],
      bots: updatedBots
    })

  }

  removeBotFromYourArmy = (bot) => {
    // console.log(bot)
    const removeIndex = this.state.yourBots.indexOf(bot)
    const updatedBots = [...this.state.yourBots]
    updatedBots.splice(removeIndex, 1)
    this.setState({
      yourBots: updatedBots,
      bots: [...this.state.bots, bot]
    })
  }

  swapBots = (bot) => {
    this.state.bots.includes(bot) ?
    this.addBotToYourArmy(bot) :
    this.removeBotFromYourArmy(bot)
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBots} swapBots={this.swapBots} />
        <BotCollection bots={this.state.bots} swapBots={this.swapBots} />
      </div>
    );
  }

}

export default BotsPage;
