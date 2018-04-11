import React from "react";
import BotCard from "../components/BotCard.js"
import BotCollection from "./BotCollection.js"

class BotsPage extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(json => this.setState({data: json}))
  }

  createBotCollection = () => {
    return this.state.data.map(robot => <BotCollection data={robot}/>)
  }

  render() {

    return (
      <div>
        {this.createBotCollection()}
      </div>
    );
  }

}

export default BotsPage;
