import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

// const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotCollection extends React.Component {
  //your code here

  // componentDidMount = () => {
  //   fetch(URL).then
  // }

  // set initial state
  state = {
    bot: []
  }

  out = () => {
    this.setState({
      bot: []
    })
  }


  addBotToMyArmy = (newBot) => {
    this.setState({
      bot: newBot
    })
  }




  render(){
    console.log(this.props.bots)
    console.log(this.props.add)
    const bots = this.props.bots.map(bot=> <BotCard bot = {bot} addBotToMyArmy={this.addBotToMyArmy}/>)
    // something goes wrong here if i try to add it 
    // {this.state.bot !== [] ? <BotSpecs addBotToMyArmy={this.props.addBotToMyArmy} botShow={this.state.bot} off={this.out}/> : null }
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
          {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
