import React from "react";
import BotCard from "../components/BotCard";

//Possible Functional Component refactor
class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBotArmy = () => {
    let botArmy = this.props.army
    let removeClicker = this.props.removeClicker
    return botArmy.map(bot => <BotCard key={bot.id} bot={bot} removeClicker={removeClicker}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            <h1>Your Bot Army</h1>
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
