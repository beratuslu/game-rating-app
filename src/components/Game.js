import React from 'react'
import PropTypes from 'prop-types'
import mainLogo from'../images/delete.png';
import star0 from'../images/star0.png';
import star1 from'../images/star1.png';

const generateStars = count => {
  var arr = [];
  for (let index = 0; index < count; index++) {
    arr.push(<img key={index}  src={star1} alt="star"/>);
  }
  for (let index = 0; index < 5-count; index++) {
    arr.push(<img key={index + 5}  src={star0} alt="star"/>);
  }
  return arr;

}
const Game = ({ onClick, onDelete, completed, title, gameType, rating, color }) => (
  <li>
    <div className={'colorBox ' + color}></div>
    <p className="title">{title}</p> 
    <p className="stars">{generateStars(rating)}</p> 
    <p className="type">{gameType}</p>
    <a className="delete" onClick={onDelete}><img  src={mainLogo} alt="delete"/></a>
  </li>
)

Game.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  gameType: PropTypes.string.isRequired
}

export default Game
