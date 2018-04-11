import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
    constructor(){
      super()
      this.state={
        bots: [],
        clickedBots: []

      }
    }

    componentDidMount(){
      fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp=>resp.json()).then(json=>{
        this.setState({
          bots:json
        })
      })
    }

    clickHandler = (event) => {
      // console.log(!!event);
      if (event){
        if (this.state.clickedBots.includes(event)){
          let removeBotID = [...this.state.clickedBots]
          let index=removeBotID.indexOf(event)
          removeBotID.splice(index,1)
          console.log("removeBotID",removeBotID);
          this.setState({
            clickedBots: removeBotID
          })
        } else {
          let addBotID = [...this.state.clickedBots]
          addBotID.push(event)
          console.log("addBotID",addBotID);
          this.setState({
            clickedBots: addBotID
          })
        }
      }
    }

  render() {
    return (
      <div>
        <YourBotArmy clickedBots={this.state.clickedBots} clickHandler={this.clickHandler}/>
        <BotCollection bots={this.state.bots} clickHandler={this.clickHandler}/>
      </div>
    );
  }

}

export default BotsPage;
