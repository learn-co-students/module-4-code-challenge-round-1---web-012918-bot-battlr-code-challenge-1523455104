import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class YourBotArmy extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bots: this.props.bots
    }
  }

  // renderClickedBots = () => {
  //   this.props.bots.map(bot => {
  //     return <BotSpecs handleClick={this.handleClick} key={bot.id} bot={bot} value='not clicked'/>
  //   })
  // }
  //
  // handleClick = (event) => {
  //   console.log(event.target)
  // }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">

            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
