import mockData from '../mockData'

const games = (state = mockData, action) => {
  switch (action.type) {
    case 'ADD_GAME':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          rating: action.rating,
          gameType: action.gameType,
          color: action.color,
        }
      ]
      case 'DELETE_GAME':
        return state.filter(game => {
          return game.id !== action.id 
        })
      case 'TOGGLE_GAME':
        return state.map(game =>
          (game.id === action.id)
            ? {...game, completed: !game.completed}
            : game
        )
    default:
      return state
  }
}

export default games
