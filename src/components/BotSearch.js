import React from "react";

//Possible Functional Component refactor
class BotSearch extends React.Component {
  searchQuery = (event) => {
    this.props.searchQuery(event.target.value)
  }

  render(){
    return(
      <div className="ui search" id="search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search Name & Catchphrase" onChange={this.searchQuery}/>
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    )
  }
}

export default BotSearch
