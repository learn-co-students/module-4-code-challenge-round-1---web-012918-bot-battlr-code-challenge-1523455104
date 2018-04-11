import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  alreadyHere = () =>{
    console.log('hi')
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.props.bots.length > 0 ? this.props.bots.map(bot => {
            return <BotCard bot={bot} key={bot.id} addToPersonal={this.alreadyHere}/>
          }) : null}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
