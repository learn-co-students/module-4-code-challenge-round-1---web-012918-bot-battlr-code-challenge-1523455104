import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
  state = {
    clicked: false,
    clickedBot: {}
  }

  lookAtSpecs = (bot) => {
    this.setState({
      clicked: true,
      clickedBot: bot
    })
  }

  showAllBots = () => {
    this.setState({
      clicked: false,
      clickedBot: {}
    })
  }

  renderAllBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard bot={bot} key={bot.id} addToPersonal={this.lookAtSpecs}/>
    })
  }

  renderSpecificBot = () => {
    return <BotSpecs bot={this.state.clickedBot} key={this.state.clickedBot.id} addToPersonal={this.props.addToPersonal} showAllBots={this.showAllBots}/>
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.state.clicked ? this.renderSpecificBot() : this.renderAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
