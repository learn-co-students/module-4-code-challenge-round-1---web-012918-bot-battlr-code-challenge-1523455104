import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import SearchBar from './SearchBar'

class BotsPage extends React.Component {
  state = {
    bots: [],
    personal: [],
    query: ''
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(json => this.setState({
      bots: json
    }))
  }

  addToPersonal = (bot) => {
    return this.state.personal.includes(bot) ? null : this.setState({
      personal: [...this.state.personal, bot]
    })
  }

  filteredBots = () => {
    return this.state.bots.filter(bot => bot.name.toLowerCase().includes(this.state.query))
  }

  updateQuery = (searchTerm) => {
    this.setState({
      query: searchTerm.toLowerCase()
    }, ()=> console.log(this.state.query))
  }

  render() {
    return (
      <div>
        <SearchBar query={this.state.query} updateQuery={this.updateQuery}/>
        <YourBotArmy bots={this.state.personal}/>
        <BotCollection bots={this.filteredBots()} addToPersonal={this.addToPersonal}/>
      </div>
    );
  }

}

export default BotsPage;
