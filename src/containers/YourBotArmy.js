import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...




  render(){
    const myBots = this.props.army.map(bot => <BotCard bot = {bot} addBotToMyArmy={this.props.off}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {myBots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
