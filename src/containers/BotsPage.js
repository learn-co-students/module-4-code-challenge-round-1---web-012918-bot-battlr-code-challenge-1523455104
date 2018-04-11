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

  showBotSpecs = (id) => {

    let botToShow = this.state.allBots.filter((bot) => {
        return bot.id === id
      })[0]
    return <BotSpecs bot={botToShow} backHandler={this.showAllBotsAgain} enlistHanlder={this.clickHandler}/>
  }

  enlistingBotHandler = (event) => {
    let id = parseInt(event.target.parentNode.parentNode.id)
    this.setState({
      enlistingBot: id
    })
  }

  clickHandler = (event) => {
    let id = parseInt(event.target.id)

    if(this.state.army.filter((bot)=> bot.id === id).length === 1){
      return console.log("bot already in army")
    }

    let botToAdd = this.state.allBots.filter((bot) => {
        return bot.id === id
      })[0]

    let growingArmy = [...this.state.army]
    growingArmy.push(botToAdd)

    this.setState({
      army: growingArmy
    })

  }

  removeHandler = (event) => {
    let id = parseInt(event.target.parentNode.parentNode.id)
    let botToRemove = this.state.army.filter((bot) => {
        return bot.id === id
      })[0]
    let shrinkingArmy = [...this.state.army]

    shrinkingArmy.splice(shrinkingArmy.indexOf(botToRemove), 1)

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
