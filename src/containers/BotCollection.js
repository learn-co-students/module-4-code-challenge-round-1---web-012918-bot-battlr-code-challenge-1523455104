import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  const renderBot = () => {
    return props.bots.map(robot => <BotCard key={robot.id} bot={robot} clickBot={props.handleClick} />)
  }

	return (
    <div className="ui four column grid">
  		<div className="row">
        {renderBot()}
  		</div>
	  </div>
	);
};

export default BotCollection;
