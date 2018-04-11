import React from "react";

import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const BASE_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      collectionToShow: []
    }

  }

  componentDidMount = () => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(json => this.setState({
      data: json
    }))
  }

  addToArmy = (arr) => {
    this.setState({
      collectionToShow: [...this.state.collection, arr]//needto pull each element
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.collection}/>
        <BotCollection robots={this.state.data} addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
