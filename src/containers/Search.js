import React from 'react'

const Search = props => {

  return(
    <div>
      <h3> ENTER NAME OR BINARY </h3>
      <form onSubmit={props.handleSubmit}>
        <label>Search Here</label>
        <input onChange={props.handleChange} type="text" name="name" id="input-name" value={props.query} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Search
