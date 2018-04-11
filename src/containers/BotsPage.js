import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {

  constructor(){
    super()
    this.state = {
      army : []
    }
  }

  addToArmy = (e, id) => {
    console.log(e.currentTarget)
    console.log(id)
    debugger
  }


  render() {
    return (
      <div>
        <YourBotArmy />
        <BotCollection addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
