import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  constructor() {
    super()

    this.state = {
      data: [],
      yourBots: []
    }

  }

//i spent so much time just to realize that i forgot to pass the handleclick function as props to your bot army.

  handleClick = (e) => {
    const thisBot = e.target.id

    const find = this.state.data.filter(bot => bot.id === parseInt(thisBot))

    if (find[0]) {
      const resulting = this.state.data.filter(bot => bot.id !== parseInt(thisBot))

      this.setState({
        data: resulting,
        yourBots: [...this.state.yourBots, find[0]]
      })
    } else {
      const thisFind = this.state.data.filter(bot => bot.id === parseInt(thisBot))
      console.log(this.state.yourBots)
      const thisResulting = this.state.yourBots.filter(bot => bot.id !== parseInt(thisBot))

      this.setState({
        data: [...this.state.data, thisFind[0]],
        yourBots: thisResulting
      }, () => {console.log(this.state.yourBots)})
    }
  }

  // toggleBack = (e) => {
  //   const thisBot = e.target.id
  //   const find = this.state.data.filter(bot => bot.id === parseInt(thisBot))
  //   const resulting = this.state.data.filter(bot => bot.id !== parseInt(thisBot))
  //
  //   this.setState({
  //     data: resulting,
  //     yourBots: [...this.state.yourBots, find[0]]
  //   }, () => {console.log(this.state.yourBots)})
  // }

  componentDidMount = () => {
    fetch(URL)
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
  }

  render() {
    return (
      <div>
        <BotCollection data={this.state.data} handleClick={this.handleClick}/>
        <YourBotArmy data={this.state.yourBots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
