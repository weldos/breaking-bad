import React from 'react'

import CharacterItem from './CharacterItem.js'
import Spinner from '../ui/Spinner.js'


// getting the props passed through from the app.js
const CharacterGrid = ({ items, isLoading }) => {
  return (
    isLoading ? (<Spinner />):
    (
    <section className="cards">
      {items.map(item => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
    )
  )
}

export default CharacterGrid
