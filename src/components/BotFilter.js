import React from 'react';

//Possible Functional Component refactor
class BotFilter extends React.Component {
  filterBotClass = (event) => {
    this.props.filterBotClass(event.target.value)
  }

  render(){
    return(
      <div id="filter">
        <h4>See All Bots or Filter Bots by Class:</h4>
        <select name="bot-classes" className="ui selection dropdown" onChange={this.filterBotClass}>
          <option value="All">All</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Support">Support</option>
        </select>
      </div>
    )
  }
}

export default BotFilter
