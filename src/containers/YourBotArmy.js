import React from "react";
import BotCard from "../components/BotCard";
import UUID from 'uuid'

class YourBotArmy extends React.Component {

  createBotCards = () => {
    let bots =  this.props.bots.filter(bot => {return bot.isInArmy === true})
    bots = bots.map(bot => {
      return <BotCard key={UUID()} bot={bot} addToArmy={this.props.addToArmy}/>
    })
    return bots
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.createBotCards()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
