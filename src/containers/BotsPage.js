import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()
    this.state = {
      data: [],
      army: []
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json,
        currentBot: ''
      })
    })
  }

  addToArmy = (id) => {
    let bot = this.state.data.find(bot => bot.id === id)
    if(bot.isInArmy === true){
      bot.isInArmy = false
      let newData = this.state.data.slice(0)
      this.setState({data: newData})
    }else{
      bot.isInArmy = true
      // let newArmy = this.state.army.slice(0)
      // newArmy.push(bot)
      //
      // this.setState({army: newArmy})
      let newData = this.state.data.slice(0)
      this.setState({data: newData})
    }
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.data} army={this.state.army} addToArmy={this.addToArmy}/>
        <BotCollection bots={this.state.data} currentBot={this.state.currentBot} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
