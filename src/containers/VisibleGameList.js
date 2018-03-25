import { connect } from 'react-redux'
import { toggleGame, deleteGame } from '../actions'
import GameList from '../components/GameList'

const getVisibleGames = (games, ownProps) => {
  console.log("ownProps--visible: ", ownProps)
  // console.log("todos: ", todos)
  
  if (ownProps.filter === "SHOW_ALL") {
    return games
  }else{
    let { filter, val } = ownProps.filter;
    filter = filter === 'type' ? 'gameType' : 'rating';
    if (!val) {
      return games;
    }else{
      val = filter === 'rating' ? parseInt(val, 10) : val;  
    }
    return games.filter(game => game[filter] === val)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    games: getVisibleGames(state.games, ownProps),
    ownProps
  }
}

const mapDispatchToProps = dispatch => ({
  toggleGame: id => dispatch(toggleGame(id)),
  deleteGame: id => dispatch(deleteGame(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList)
