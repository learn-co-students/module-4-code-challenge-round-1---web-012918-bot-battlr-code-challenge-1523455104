import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bots : []
    }
  }

  renderBots = () => {
    return this.state.bots.map(bot => <BotCard key={bot.id} bot={bot}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
