import React from "react";
import BotCard from "../components/BotCard";



class BotCollection extends React.Component {
  //your code here
  constructor(props){
    super(props);
      this.state = {
        clicked: false
    }
  }

  renderBotCards = () => {
      return this.props.props.map(bot => {
        return <BotCard clickFunction={ this.handleClick } key={ bot.id } bot={ bot } />
    })
  }


  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    }, () => {
      console.log(this.state.clicked)
    })
  }

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          { this.renderBotCards() }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
