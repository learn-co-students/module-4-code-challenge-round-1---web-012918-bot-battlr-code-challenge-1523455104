import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collection: []
    }
  }

  addToCollection = (e) => {
    this.setState({
      collection: [...this.state.collection, event.target.value ]
    })
    this.props.addToArmy(this.state.collection)
    console.log(e)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.props.robots.map(robot => {
            return <BotCard key={robot.id} bot={robot} clicked={this.addToCollection}/>
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
