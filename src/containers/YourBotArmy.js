import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderBots = () => {
    return this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} clickBot={this.props.handleClick}/>)
  }

  // removeBot = botId => {
  //   // iterate through this.props
  //   // find the bot by id
  //   // splice bot off of props based on index
  //   const robots = this.props.bots
  //   const byeBot = robots.find(bot => bot.id === botId)
  //   const byeBotIndex = robots.indexOf(byeBot)
  //   robots.splice(byeBotIndex, 1)
  //   this.renderBots()
  // }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
        Your Bot Army
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
