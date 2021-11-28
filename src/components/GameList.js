import React from 'react'
import PropTypes from 'prop-types'
import Game from './Game'

const GameList = ({ games, toggleGame, deleteGame }) => (
  <ul className="list">
    {games.map(game =>
    <Game
      key={game.id}
      {...game}
      onClick={() => toggleGame(game.id)}
      onDelete={() => deleteGame(game.id)}
    />
  )}
  </ul>
)

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    gameType: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  toggleGame: PropTypes.func.isRequired
}

export default GameList
