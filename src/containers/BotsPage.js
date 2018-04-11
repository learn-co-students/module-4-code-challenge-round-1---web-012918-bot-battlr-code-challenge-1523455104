import React from "react";

import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
import BotSpecs from '../components/BotSpecs.js'

class BotsPage extends React.Component {
  state = {
    allBots: [],
    selectedBots: [],
    showingDetails: false
  }

  componentDidMount() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
    .then(json => this.setState({
      allBots: json
    }))
  }

  // showBotsCollection = () => {
  //   return <BotCollection bots={this.state.allBots} clickHandler={this.showBotDetails}/>
  // }

  // showBotDetails = (eventBot) => {
  //   debugger
  //   this.setState({showingDetails: !this.state.showingDetails})
  //   return <BotSpecs bot={eventBot}/>
  // }

  addBot = (eventBot) => {
    const selectedBot = this.state.allBots.filter( bot => bot.id === eventBot.id)[0]
    if (!this.state.selectedBots.includes(selectedBot)) {
      this.setState({
        selectedBots: [...this.state.selectedBots, selectedBot]
      })
    }
  }

  removeBot = (eventBot) => {
    let selectedBots = this.state.selectedBots
    const selectedBotIndex = selectedBots.indexOf(eventBot)
    const splicedBot = selectedBots.splice(selectedBotIndex, 1)

    this.setState({
      selectedBots: selectedBots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.selectedBots} clickHandler={this.removeBot}/>
        <BotCollection bots={this.state.allBots} clickHandler={this.addBot}/>
        {/* {this.state.showingDetails ? this.showBotDetails() : this.showBotsCollection()} */}
      </div>
    );
  }

}

export default BotsPage;
