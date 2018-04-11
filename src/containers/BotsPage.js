import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'


const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  //grab data
  componentDidMount() {
    fetch(URL).then(res => res.json())
    .then(json => this.setState({bots: json}));
  }

  // set initial state
  // need one for all bots and one just for mine
  state = {
    bots: [],
    myArmy: []
  }

  // dont override entire array
  addBotToMyArmy = (bot) => {
    this.setState({
      myArmy: Object.assign(this.state.myArmy, bot)
    })
  }

  // find id of robot with id and exclude him -- filter
  // set state of army without that robot
  removefromMyArmy = (robot) => {
    const army = this.state.myArmy.filter(bot => bot.id !== robot.id)
    this.setState({
      myArmy: army
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy removefromMyArmy={this.removefromMyArmy} army={this.state.myArmy} />
        <BotCollection addBotToMyArmy={this.addBotToMyArmy} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
