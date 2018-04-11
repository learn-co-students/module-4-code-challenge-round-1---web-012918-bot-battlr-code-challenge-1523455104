import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  renderBots = () =>  {
    const botsData = this.props.bots
    return botsData.map(bot => <BotCard key={bot.id} bot={bot} clicker={this.props.clicker}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
