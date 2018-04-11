import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      clicked: false
    }
  }

  componentDidMount = () => {
    fetch(URL).then(resp => resp.json()).then(json => this.setState({bots: json}))
  }

  handleClick = (event) => {
    console.log(event)
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
