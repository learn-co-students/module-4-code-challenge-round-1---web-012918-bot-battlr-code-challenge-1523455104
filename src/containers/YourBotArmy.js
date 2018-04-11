import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  handleData = () => {
    const thisMap = this.props.data.filter(prop => prop !== undefined)
    return thisMap.map(bot => <BotCard datum={bot} key={bot.id} handleClick={this.props.handleClick} yourBot={true}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.handleData()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
