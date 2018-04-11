import React from 'react'

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
    return <div>
      search by name: <input onChange={this.handleChange} type="text" value={this.state.query} />
    </div>
  }
}

export default SearchBar
