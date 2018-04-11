import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
  //your code here

	state = {
    click: false
  }

  showSpecs = (botId) => {
    const bot = this.props.bots.find(bot=> bot.id === parseInt(botId))
    this.setState({
      click: bot
    })
  }

  hideSpecs = () => {
    this.setState({
      click: false
    })
  }

  render(){
    const bot = this.props.bots.map(bot =>
    <BotCard bot={bot} key={bot.id} showSpecs={this.showSpecs} />)

  	return (
  	  <div className="ui four column grid">
			<h1>Collection of all bots:</h1>
    		<div className="row" >
          {this.state.click ? <BotSpecs onClick={this.props.onClick} bot={this.state.click} hideSpecs={this.hideSpecs}/> : bot}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
