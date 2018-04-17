import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotFilter from "../components/BotFilter";
import BotSort from "../components/BotSort";
import BotSearch from "../components/BotSearch";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    data: [],
    botArmy: [],
    botClassFilter: "All",
    botSpecsPage: false,
    botSortParam: "id",
    botSearchQuery: ""
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(json => this.setState({data: json}))
  }

  //I need to make this method add to the botArmy. I have made my Callback. Couldn't really think of how to get bot object from grandchild comp but got name
  enlistBotClicker = (newBot) => {
    //do nothing if it includes
    if (!this.state.botArmy.includes(newBot)) {
      //if it is not included, add object to array
      this.setState({botArmy: [...this.state.botArmy, newBot]})
    }
  }

  removeBotClick = (removeBot) => {
    let index = this.state.botArmy.indexOf(removeBot);

    if (index !== -1) {
      this.state.botArmy.splice(index, 1);
      this.setState({botArmy: this.state.botArmy})
    }
  }

  botSortParam = (selectedSortParam) => {
    this.setState({botSortParam: selectedSortParam})
  }

  filterBotClass = (selectedClass) => {
    this.setState({botClassFilter: selectedClass})
  }

  searchQuery = (queryTerm) => {
    this.setState({botSearchQuery: queryTerm})
  }
  //I did not want to refactor it at the moment. I just wanted the functionality and the logical view.
  renderOrganizingParams = () => {
    //if on BotSpecs Page, don't show.
    if (!this.state.botSpecsPage) {
      return (
        <div>
          <BotSort botSortParam={this.botSortParam}/>
          <BotFilter filterBotClass={this.filterBotClass}/>
          <BotSearch searchQuery={this.searchQuery}/>
        </div>
      )
    }
  }

  //I am not proud of this... Things I would change:
  //1. move up the state from botcollection to botPage
  //2. perhaps not hardcoding boolean and going with !this.state.{whatever}. That is in a few different components
  //bot or event being passed through as arguments. Quick fix.
  onBotSpecsPage = (info) => {
    if (info.id) {
      this.setState({botSpecsPage: true})
    } else {
      this.setState({botSpecsPage: false})
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy army={this.state.botArmy} removeClicker={this.removeBotClick}/>
        {this.renderOrganizingParams()}
        <BotCollection bots={this.state.data} enlistBotClicker={this.enlistBotClicker} sortDropdown={this.state.botSortParam} filterDropdown={this.state.botClassFilter} searchQuery={this.state.botSearchQuery} onBotSpecsPage={this.onBotSpecsPage}/>
      </div>
    );
  }

}

export default BotsPage;
