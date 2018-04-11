import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props){
    super()

    this.state = {
      yourArmy: this.props.army
    }
  }

  destroyBot = (bot) => {
    this.setState({
      yourArmy: this.state.yourArmy.filter(function(bots){
        return bots.name !== bot.name;
      })
    })
  }

  renderBotArmy = () => {
    return this.state.yourArmy.map(bot => <BotCard key={bot.id} bot={bot} inArmy={true} />)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
