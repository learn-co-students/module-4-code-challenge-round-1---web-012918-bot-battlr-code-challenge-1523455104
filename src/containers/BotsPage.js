import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allBots:[],
      army:[],
      enlistingBot: false
    }
  }

  showAllBotsAgain = () => {
    this.setState({
      enlistingBot: false
    })
  }

  showBotSpecs = (bot) => {

    return <BotSpecs bot={bot} backHandler={this.showAllBotsAgain} enlistHanlder={this.clickHandler}/>
  }

  enlistingBotHandler = (bot) => {
    this.setState({
      enlistingBot: bot
    })
  }

  clickHandler = (bot) => {
    if(this.state.army.indexOf(bot) > -1){
      return console.log("bot already in army")
    }
    let growingArmy = [...this.state.army]
    growingArmy.push(bot)
    this.setState({
      army: growingArmy
    })
  }

  removeHandler = (bot) => {
    let shrinkingArmy = [...this.state.army]
    shrinkingArmy.splice(shrinkingArmy.indexOf(bot), 1)
    this.setState({
      army: shrinkingArmy
    })
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.setState({
        allBots: json
      })
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} clickHandler={this.removeHandler}/>
        {!this.state.enlistingBot ? <BotCollection allBots={this.state.allBots} clickHandler={this.enlistingBotHandler}/> : this.showBotSpecs(this.state.enlistingBot)}
      </div>
    );
  }

}

export default BotsPage;
