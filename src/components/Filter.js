import React from "react"

const Filter = props => {
  return (
    <div>
      <strong>Filter Bots By Name</strong> that does not fit the CSS theme at all: <input text="text" onChange={props.onChange}/>
    </div>
  )
}

export default Filter
