import React from "react";
import BotCard from "../components/BotCard";
import Search from './Search.js'

class BotCollection extends React.Component {

  state = {
    searchQuery: ''
  }

  renderBotsByName = () => {
    const filteredBots = this.props.bots.filter(bot => bot.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
    return filteredBots.map(bot => <BotCard key={bot.id} bot={bot} clickBot={this.props.handleClick} />)
  }

  renderBotsByCatchPhrase = () => {
    const filteredBots = this.props.bots.filter(bot => bot.catchphrase.includes(this.state.searchQuery))
    return filteredBots.map(bot => <BotCard key={bot.id} bot={bot} clickBot={this.props.handleClick} />)
  }

  handleFormSubmit = event => {
    event.preventDefault()

    event.target.reset()
  }

  handleFormChange = event => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  render(){
  	return (
      <div>
        <Search
          query={this.state.searchQuery}
          handleSubmit={this.handleFormSubmit}
          handleChange={this.handleFormChange} />
          <br></br>
        <div className="ui four column grid">
    		  <div className="row">
            {this.state.searchQuery[0] === '1' || this.state.searchQuery[0] === '0' ?
              this.renderBotsByCatchPhrase()
              :
              this.renderBotsByName()
            }
    		  </div>
  	    </div>
      </div>
  	);
  }
};

export default BotCollection
