import React from "react";
import BotCard from "../components/BotCard";
const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotCollection extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      bots : [],
      addToArmy : props.addToArmy
    }
  }

  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(res =>this.setState({bots : res}))
  }

  addToArmy = (e) => {
    console.log(e.target.parentNode)
  }

  renderBots = () => {
    return this.state.bots.map(bot => <BotCard key={bot.id} bot={bot} addToArmy={this.state.addToArmy}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
