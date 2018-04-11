import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.props.botsInArmy.map(bot => <BotCard key={bot.id} bot={bot} handleCardClick={this.props.handleCardClick} /> )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
