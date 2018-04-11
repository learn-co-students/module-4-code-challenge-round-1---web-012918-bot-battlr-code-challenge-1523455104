import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  renderAllBots = () => {
    return this.props.bots.map( bot => <BotCard bot={bot} clickHandler={this.props.clickHandler}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
