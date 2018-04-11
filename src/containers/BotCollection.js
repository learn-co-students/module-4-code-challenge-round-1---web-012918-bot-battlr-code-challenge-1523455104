import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} handleCardClick={this.props.handleCardClick} enlistBot={this.props.enlistBot} /> )}
    		  {/*...and here..*/}
    		  {/*Collection of all bots*/}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
