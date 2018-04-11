import React from 'react'
import "../SearchBar.css";

class SearchBar extends React.Component {
  state = {
    query: ''
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
    this.props.updateQuery(e.target.value)
  }

  render() {
    return <div className="search-container">
      search by name: <input id="search-bar" onChange={this.handleChange} type="text" value={this.state.query}/>
      <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/>
    </div>
  }
}

export default SearchBar
