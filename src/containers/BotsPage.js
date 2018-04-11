import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotFilter from './BotFilter';

const BASEURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';

class BotsPage extends React.Component {
  //start here with your code for step one

	state = {
		bots: [],
		myBots: []
	}

	fetchBots = () => (
	    fetch(BASEURL)
	    .then(resp => resp.json())
	    .then(bots => this.handleResponse(bots))
	  )

	componentDidMount(){
    this.fetchBots()
  }

  handleResponse = (bots) => {
    this.setState({
			bots: [...bots]
    })
  }

  addBot = (botId) => {
    const bot = this.state.bots.find(bot => bot.id === parseInt(botId))
    const findBot = this.state.myBots.find(bot => bot.id === parseInt(botId))
    if(!findBot){
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  removeBot = (botId) => {
    const findBot = this.state.myBots.find(bot => bot.id === parseInt(botId))
    const findBotIndex = this.state.myBots.indexOf(findBot)
    const newArray = [...this.state.myBots]
    newArray.splice(findBotIndex, 1);
    this.setState({
      myBots: newArray
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} onClick={this.removeBot} />
        <BotCollection bots={this.state.bots} onClick={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;
