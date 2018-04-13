import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    data: [],
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(json => this.setState({data: json}))
  }

  //I need to make this method add to the botArmy. I have made my Callback. Couldn't really think of how to get bot object from grandchild comp but got name
  botCardClick = (newBot) => {
    // debugger;
    //do nothing if it includes
    if (!this.state.botArmy.includes(newBot)) {
      //if it is not included, add object to array
      this.setState({botArmy: [...this.state.botArmy, newBot]})
    }
  }

  removeBotClick = (removeBot) => {
    console.log('in botspage.js here\'s the argument ', removeBot)
    // debugger;
    let index = this.state.botArmy.indexOf(removeBot);

    if (index !== -1) {
      this.state.botArmy.splice(index, 1);
      this.setState({botArmy: this.state.botArmy})
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy army={this.state.botArmy} removeClicker={this.removeBotClick}/>
        <BotCollection bots={this.state.data} clicker={this.botCardClick}/>
      </div>
    );
  }

}

export default BotsPage;
