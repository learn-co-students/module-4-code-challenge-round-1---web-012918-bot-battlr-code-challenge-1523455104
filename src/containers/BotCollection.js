import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      bots: this.props.bots,
      clicked: false
    }
  }


  renderAllBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard handleClick={this.props.handleClick} key={bot.id} bot={bot} value='not clicked'/>
    })
  }

  // handleClick = (event) => {
  //   this.setState({
  //     clicked: !this.state.clicked
  //   })
  // }





  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
