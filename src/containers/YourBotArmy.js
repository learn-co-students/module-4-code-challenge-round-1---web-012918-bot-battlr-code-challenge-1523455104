import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  showMyArmy = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} removeFromArmy={this.props.removeFromArmy}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.showMyArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
