import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bots: this.props.bots,
      yourArmy: []
    }
  }

  addToArmy = (bot) => {
    this.props.addToArmy()
  }

  renderBots = () => {
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} clicker={this.addToArmy(bot)}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
