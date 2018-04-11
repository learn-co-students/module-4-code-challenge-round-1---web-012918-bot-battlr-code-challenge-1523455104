import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor(props){
    super(props)
  }

  renderMyBots = () => {
      if(this.props.props.myBots.length > 0){
    return this.props.props.myBots.map(bot => {
      <div>{bot}</div>
    })
  }
  }

  render(){
    console.log(this.props)
    // debugger
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            my bot army
            {this.renderMyBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
