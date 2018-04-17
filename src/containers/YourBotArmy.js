import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props =>  {

  const renderBots = () => {
    return props.bots.map(bot => <BotCard key={bot.id} bot={bot} clickBot={props.handleClick}/>)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
      Your Bot Army
        <div className="row bot-army-row">
          {renderBots()}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
