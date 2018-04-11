import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const BOT_URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botList: [],
    botArmy: []
  }

  botFetch = () => {
    fetch(BOT_URL).then(res => res.json()).then(json => {
      this.setState({
        botList: json
      })
    })
  }

  componentDidMount = () => {
    this.botFetch()
  }

  addBotToArmy = (bot) => {
    // needs to add bot to bot army
    // needs to be unable to re-add
    // bot has onClick to remove from army
    this.enlistBot(bot)
  }

  enlistBot = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  removeFromArmy = (bot) => {
    const index = this.state.botArmy.indexOf(bot)
    const firstPart = this.state.botArmy.slice(0, index)
    const lastPart = this.state.botArmy.slice(index+1)
    // console.log("index is:", index, "first part is:", firstPart, "last part is:", lastPart);

    this.setState({
      botArmy: [...firstPart, ...lastPart]
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={ this.state.botArmy } removeFromArmy={this.removeFromArmy}/>
        <BotCollection bots={ this.state.botList } addBot={ this.addBotToArmy } botArmy={this.state.botArmy}/>
      </div>
    );
  }

}

export default BotsPage;
