import React from "react";
import BotCard from "../components/BotCard.js"
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
import BotSpecs from "../components/BotSpecs.js"
const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    bots: [],
    yourBots: [],
    clicked: false,
    botDetail: null
  }

  componentDidMount() {
    this.getBots()
  }

  getBots = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => this.setState(
        {bots: json}
      ))
  }

  findBot = botId => {
    return this.state.bots.find(bot => bot.id === botId)
  }

  findArmyBot = botId => {
    return this.state.yourBots.find(robot => robot.id === botId)
  }

  addBotToArmy = botId => {
      let foundBot = this.findBot(botId)
      let enlistedBot = this.findArmyBot(botId)
      if (enlistedBot === undefined) {
        this.setState({
          yourBots: [...this.state.yourBots, foundBot]
        })
      }
    }

    deleteBotToArmy = botId => {
      let yourArmy = this.state.yourBots
      const byeBot = this.findArmyBot(botId)
      const byeBotIndex = yourArmy.indexOf(byeBot)
      yourArmy.splice(byeBotIndex, 1)
      this.setState({
        yourBots: yourArmy
      })
    }

    handleDetailClick = botId => {
      let foundBot = this.findBot(botId)
      this.setState({
        clicked: !this.state.clicked,
        botDetail: foundBot
      })
    }

    renderBots = () => {
      return this.state.bots.map(robot => <BotCard key={robot.id} bot={robot} clickBot={this.handleDetailClick}/>)
    }



  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.yourBots}
          handleClick={this.deleteBotToArmy} />
          <br></br>
        {this.state.clicked ?
          <BotSpecs bot={this.state.botDetail}
            detail={this.handleDetailClick}
            addToArmy={this.addBotToArmy} />
            :
          <BotCollection
            bots={this.state.bots}
            handleClick={this.handleDetailClick}
            handleSubmit={this.handleFormSubmit} />
        }
      </div>
    );
  }
}

export default BotsPage;
