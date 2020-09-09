import React, { useState } from 'react'

const Search = ({getQuery}) => {

  // Test is a string, setText is the update Function
  const [text, setText] = useState("");

  const onChange = q => {
    //console.log(q);
    setText(q);
    getQuery(q);
  }

  return (
    <section className="search">
      <form>
        <input 
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  )
}

export default Search
