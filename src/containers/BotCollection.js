import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  handleData = () => {
    const mapArr = this.props.data.filter(bot => bot !== undefined)
    return mapArr.map(bot => <BotCard datum={bot} key={bot.id} handleClick={this.props.handleClick} yourBot={false}/>)
  }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.handleData()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
