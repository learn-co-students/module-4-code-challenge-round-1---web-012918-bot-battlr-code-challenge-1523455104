import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  state = {
    bots: []
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.bots != prevProps.bots) {
      this.setState({
        bots: this.props.bots
      })
    }
  }

  renderSelectedBots = () => {
    return this.state.bots.map( bot => <BotCard bot={bot} clickHandler={this.props.clickHandler}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderSelectedBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
