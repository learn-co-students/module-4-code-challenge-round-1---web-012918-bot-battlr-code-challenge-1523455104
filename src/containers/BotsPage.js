import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    personal: []
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(json => this.setState({
      bots: json
    }))
  }

  addToPersonal = (bot) => {
    this.state.personal.includes(bot) ? null : this.setState({
      personal: [...this.state.personal, bot]
    }, () => console.log(this.state.personal))
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.personal} addToPersonal={this.addToPersonal}/>
        <BotCollection bots={this.state.bots} addToPersonal={this.addToPersonal}/>
      </div>
    );
  }

}

export default BotsPage;
