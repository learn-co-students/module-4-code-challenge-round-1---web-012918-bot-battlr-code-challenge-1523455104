import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotCard from '../components/BotCard'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      myBots: [],
      botsCollection: []
    }
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(json => this.setState({
      botsCollection: json
    }, () => console.log(this.state.botsCollection)))
  }

  renderBotCard = () => {

    return this.state.botsCollection.map(bot => {
      // console.log(this.props.addBotToMyArmy)
      return <BotCard addBotToMyArmy={this.addBotToMyArmy} props={bot}/>
    })
  }

  addBotToMyArmy = (e) => {
    // console.log(e.target.parentElement.parentElement.dataset.id)
    let bot = this.state.botsCollection.find((bot) => {
      bot.id === e.target.parentElement.parentElement.dataset.id
    })
    console.log(bot)
//NEED TO FIND BOT FROM BOTSCOLLECTION AND PUSH INTO MYBOTS, THEN RENDER MYBOTS
    e.target.parentElement.parentElement.remove()
    this.setState({
      myBots: [...this.state.myBots, bot]

    })

  }
  render() {
    console.log(this.state.bots)
    return (
      <div>
        <BotCollection renderBotCard={this.renderBotCard} bots={this.state.botsCollection}/>
        <YourBotArmy props={this.state}/>
      </div>
    );
  }

}

export default BotsPage;
