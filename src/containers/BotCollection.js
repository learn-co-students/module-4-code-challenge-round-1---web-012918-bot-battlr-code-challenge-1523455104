import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
  state = {
    detailedView: false,
    botSpec: null
  }

  falsifyDetailedViewBackButton = (event) => {
    this.setState({detailedView: false})
    this.props.onBotSpecsPage(event)
  }

  //Why? McAlister
  //Rendering and setting state had to be separate. It cause issues and possible infinite loop
  renderBotSpecs = () => {
    return <BotSpecs bot={this.state.botSpec} goBack={this.falsifyDetailedViewBackButton} enlistBotClicker={this.props.enlistBotClicker}/>
  }

  specsViewClick = (detailedBot) => {
    this.setState({detailedView: true, botSpec: detailedBot})
    this.props.onBotSpecsPage(detailedBot)
  }

  renderBots = () =>  {
    let botsData = this.props.bots.slice()
    let sortParam = this.props.sortDropdown

    function compare(a,b) {
      if (a[sortParam] < b[sortParam])
        return -1;
      if (a[sortParam] > b[sortParam])
        return 1;
      return 0;
    }
    botsData = this.props.bots.slice().sort(compare)

    let searchQuery = this.props.searchQuery

    if (!(searchQuery === "")) {
      botsData = botsData.filter(bot => bot.name.toLowerCase().includes(searchQuery.toLowerCase()) || bot.catchphrase.includes(searchQuery))
    }

    if (this.props.filterDropdown === 'All') {

      return botsData.map(bot => <BotCard key={bot.id} bot={bot} clicker={this.props.clicker} specsViewClick={this.specsViewClick}/>)
    } else {
      let selectedClass = this.props.filterDropdown
      let filteredBots = botsData.filter(bot => bot.bot_class === selectedClass)
      return filteredBots.map(bot => <BotCard key={bot.id} bot={bot} clicker={this.props.clicker} specsViewClick={this.specsViewClick}/>)
    }
  }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {!this.state.detailedView ? this.renderBots() : this.renderBotSpecs()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
