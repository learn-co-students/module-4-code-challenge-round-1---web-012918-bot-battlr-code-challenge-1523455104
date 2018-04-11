import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here
  state = {
    botSpecs: false,
    botInQuestion: {}
  }

  makeABunchOfBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} showBotSpecs={this.showBotSpecs}/>
    })
  }

  botIsInArmy = (bot) => {
    return (this.props.botArmy.includes(bot)) ? true : false;
  }

  showBotSpecs = (bot) => {
    this.setState({
      botSpecs: true,
      botInQuestion: bot
    })
  }

  showAllBotsAgain = () => {
    this.setState({
      botSpecs: false,
      botInQuestion: {}
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.state.botSpecs ? <BotSpecs bot={ this.state.botInQuestion } goBack={this.showAllBotsAgain} addBot={this.props.addBot} botIsInArmy={this.botIsInArmy} /> : this.makeABunchOfBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
