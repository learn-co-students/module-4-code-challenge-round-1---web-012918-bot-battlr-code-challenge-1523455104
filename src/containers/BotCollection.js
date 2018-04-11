import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy"

class BotCollection extends React.Component {
  constructor(){
    super()

    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
  	return (
  	  <div>
    		<div key={this.props.id}>
          <img src={this.props.data["avatar_url"]}></img>
          <br></br>
          <h1>{this.props.data.name}</h1>
          <br></br>
          Health: <p>{this.props.data.health}</p>
          <br></br>
          Damage: <p>{this.props.data.damage}</p>
          <br></br>
          Armor: <p>{this.props.data.armor}</p>
          <br></br>
          Class: <p>{this.props.data["bot_class"]}</p>
          <br></br>
          Catchphrase: <p>{this.props.data.catchphrase}</p>
          <br></br>
          <button onClick={this.handleClick}>Enlist Me!</button>
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
