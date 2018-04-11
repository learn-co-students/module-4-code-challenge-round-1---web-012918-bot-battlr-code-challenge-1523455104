import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.props.bots.length > 0 ? this.props.bots.map(bot => {
            return <BotCard bot={bot} key={bot.id} addToPersonal={this.props.addToPersonal}/>
          }) : null}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
