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
    const botList = this.state.data
    let foundBotObj = botList.find(function(element) {
      return element.name === newBot
    })

    let foundBotArr = [foundBotObj]

    this.setState({
      //need to fix this so that I can add to array
      botArmy: this.state.botArmy.concat(foundBotArr)
    })

    console.log('checking botArmy:', this.state.botArmy)

    // return this.setState({
    //   botArmy: ['testing']
    // })
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.data} army={this.state.botArmy}/>
        <BotCollection bots={this.state.data} clicker={this.botCardClick}/>
      </div>
    );
  }

}

export default BotsPage;
