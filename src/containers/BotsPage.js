import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
const url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor() {
    super()

    this.state = {
      allBots: [],
      yourArmy:[]
    }
  }

  componentDidMount() {
    fetch(url).then(res => res.json()).then(json => this.setState({allBots: json}));
  }

  addYour = (bot) => {
    this.setState({
      yourArmy:[...this.state.yourArmy, bot]
    })
  }

  remove = (bott) => {
    const newArmy = this.state.yourArmy.filter(bot=>{
      return bot.id !== bott.id
    })

    this.setState({
      yourArmy: newArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy yourArmy={this.state.yourArmy} remove={this.remove} />
        <BotCollection allBots={this.state.allBots} addYour={this.addYour} />
      </div>);
  }
}

export default BotsPage;
