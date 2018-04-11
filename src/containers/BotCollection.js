import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  makeABunchOfBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot} botIsInArmy={this.botIsInArmy}/>
    })
  }

  botIsInArmy = (bot) => {
    return (this.props.botArmy.includes(bot)) ? true : false;
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.makeABunchOfBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
