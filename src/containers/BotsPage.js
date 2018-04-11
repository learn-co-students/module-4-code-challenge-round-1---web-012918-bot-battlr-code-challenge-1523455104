import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'




class BotsPage extends React.Component {
  //start here with your code for step one
    state = {
    data: [],
  }
  componentDidMount(){
    this.getData()
  }

  getData = () => {
    return fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        });
      })
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <YourBotArmy props={ this.state.data }/>
        <BotCollection props={ this.state.data }/>
      </div>
    );
  }

}

export default BotsPage;
