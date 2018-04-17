import React from 'react';

//Possible Functional Component refactor
class BotSort extends React.Component {
  botSortParam = (event) => {
    this.props.botSortParam(event.target.value)
  }

  render(){
    return (
      <div id="sort">
        <h4>Sort By Ascending:</h4>
        <select name="bot-sort" className="ui selection dropdown" onChange={this.botSortParam}>
          <option value="id">Select Sorting Attribute</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
    )
  }
}

export default BotSort
