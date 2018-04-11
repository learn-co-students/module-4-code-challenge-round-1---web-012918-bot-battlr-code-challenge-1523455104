import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"
import Filter from "../components/Filter"

class BotCollection extends React.Component {
  constructor() {
    super()

    this.state = {
      bot: "",
      query: "",
      filteredBots: []
    }
  }

  addYour = (b) => {
    this.setState({
      bot: b
    })
  }

  close = () => {
    this.setState({
      bot:""
    })
  }

  handleFilter = (event) => {
    this.setState({
      query: event.target.value.toLowerCase()
    }, () => {
      this.setState({
        filteredBots: this.props.allBots.filter(bot => {return bot.name.toLowerCase().includes(this.state.query)})
      }, () => console.log(this.state.filteredBots))
    })
  }


  render(){
    const botArr = this.props.allBots.map(bot => {return <BotCard props={bot} addYour={this.addYour}/>})
    const filteredBotArr = this.state.filteredBots.map(bot => {return <BotCard props={bot} addYour={this.addYour}/>})

  	return (
  	  <div className="ui four column grid">
        <Filter onChange={this.handleFilter} query={this.state.query}/>
    		<div className="row">
          {this.state.bot !== "" ? <BotSpecs show={this.state.bot} close={this.close} addYourArmy={this.props.addYour}/> : null}
    		  {filteredBotArr.length > 0 ? filteredBotArr : botArr}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
