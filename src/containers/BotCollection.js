import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'
import UUID from 'uuid'

class BotCollection extends React.Component {
  //your code here

  createBotCards = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={UUID()} bot={bot} addToArmy={this.props.addToArmy}/>
    })
  }

  showSpecs = () => {
    return <BotSpecs bot={this.props.currentBot} />
  }

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.currentBot ? this.showShpecs(): this.createBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
