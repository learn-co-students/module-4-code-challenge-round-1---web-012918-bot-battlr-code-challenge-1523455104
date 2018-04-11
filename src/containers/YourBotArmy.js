import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
		const botItem = this.props.myBots.map(bot =>
			<BotCard bot={bot}  key={bot.id} onClick={this.props.onClick} />)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
					<h1>Your Bot Army</h1>
          <div className="row bot-army-row">
            {botItem}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
