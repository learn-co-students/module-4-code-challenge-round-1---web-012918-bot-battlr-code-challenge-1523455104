import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // I don't think this can also be the parent component of Bot Card
  // state = {
  //   botsArmy: []
  // }
  //
  // clickingCard = () => {
  //   return this.setState({botsArmy: [].push()})
  // }
  //
  // renderBotArmy = () => {
  //   return this.state.botsArmy.map(bot => <BotCard clicker={() => console.log("add code to connect event listener from passed down your bot army")}/>)
  // }
  renderBotArmy = () => {
    // debugger;
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
            Your Bot Army
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
