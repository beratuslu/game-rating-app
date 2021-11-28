import React from 'react'
import { connect } from 'react-redux'
import { addGame } from '../actions'

const AddGame = ({ dispatch }) => {
  let gameType
  let title
  let rating

  return (
    <div>
      <form className="addForm" onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim() || !gameType.value.trim() || !rating.value.trim()) {
          return
        }
        dispatch(addGame(title.value, gameType.value, parseInt(rating.value, 10)))
        title.value = ''
        rating.value = ''
        gameType.value = ''
      }}>
        <label>Title:</label>
        <input ref={node => title = node} />
        <label>Type:</label>
        <input ref={node => gameType = node} />
        <label>Star:</label>
        <input className="starInput" ref={node => rating = node} />
        
        <button className="create" type="submit">Create</button>
      </form>
    </div>
  )
}

export default connect()(AddGame)
