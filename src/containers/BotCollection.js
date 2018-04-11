import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  constructor(props){
    super(props)
  
  }

  // renderBotCard = () => {
  //   return this.state.bots.map(bot => {
  //     // console.log(this.props.addBotToMyArmy)
  //     return <BotCard addBotToMyArmy={this.props.addBotToMyArmy} props={bot}/>
  //   })
  // }



  render(){
    // debugger
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.props.renderBotCard()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
