import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log("army" ,this.props.clickedBots);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.props.clickedBotsPass.map(bot=>{ return(<BotCard bot={bot} clickHandler={(event) => this.props.clickHandler(event)}/>)  })}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
