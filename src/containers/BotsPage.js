import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
    constructor(){
      super()
      this.state={
        bots: [],
        clickedBots: [],
        clickedBotsPass:[]
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
          let passBots = removeBotID.map(id=>{return this.state.bots[parseInt(id)-1]})
          console.log("removeBotID",passBots);
          this.setState({
            clickedBots: removeBotID,
            clickedBotsPass: passBots
          })
        } else {
          let addBotID = [...this.state.clickedBots]
          addBotID.push(event)
          // console.log("addBotID",parseInt(addBotID[0])-1);
          // console.log("addBotID",this.state.bots[0]);
          let passBots = addBotID.map(id=>{return this.state.bots[parseInt(id)-1]})
          // console.log("addBotID",passBots);
          this.setState({
            clickedBots: addBotID,
            clickedBotsPass: passBots
          })
        }
      }
    }

  render() {
    return (
      <div>
        <YourBotArmy clickedBotsPass={this.state.clickedBotsPass} clickHandler={this.clickHandler}/>
        <BotCollection bots={this.state.bots} clickHandler={this.clickHandler}/>
      </div>
    );
  }

}

export default BotsPage;
