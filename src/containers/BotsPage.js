import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'


class BotsPage extends React.Component {

  constructor(){
    super()
    this.state = {
      allBots : [],
      army : []
    }
  }

  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(res => { this.setState({allBots : res})})
  }

  renderBots = () => {
    return <BotCollection bots={this.state.allBots} addToArmy={this.addToArmy}/>
  }

  renderArmyBots = () => {
    return <YourBotArmy bots={this.state.army} addToArmy={this.addToArmy}/>
  }

  addToArmy = (e) => {
    let allbots = this.state.allBots
    let armyBots = this.state.army
    let recruitedBot = allbots.find((bot) => {return bot.id === parseInt(e.currentTarget.id)})
    if (armyBots.includes(recruitedBot)){
      let index = armyBots.indexOf(recruitedBot)
      armyBots.splice(index, 1)
    }else{
      armyBots.push(recruitedBot)
    }
    this.setState({ army : armyBots})
  }

  render() {
    return (
      <div>
        {this.renderArmyBots()}
        {this.renderBots()}
      </div>
    );
  }

}

export default BotsPage;
