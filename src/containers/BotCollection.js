import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
  constructor(){
    super()
    this.state={
      showDetail: null
    }
  }

  clickDetail = (event) => {
    console.log("ji");
    this.setState({
      // showDetail will = bot from event.target
    })
  }

  clickBack = (event) => {
    this.setState({
      showDetail: null
    })
  }
  renderCollection = () =>{
    return (<div className="row">
      {/*...and here..*/}
      {this.props.bots.map(bot=>{ return(<BotCard key={bot.id} bot={bot} clickHandler={(event) => this.props.clickHandler(event)} clickDetail={this.clickDetail}/>)  })}
    </div>)
  }
  }
  renderDetails = () =>{
    return(
      <BotSpecs bot={this.showDetail} clickBack={this.clickBack}/>
    )
  }

  render(){
  	return (
  	  <div className="ui four column grid">
        {showDetail? renderDetails() :renderCollection()}
  	  </div>

  	);
  }

};

export default BotCollection;
