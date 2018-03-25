import { connect } from 'react-redux'
import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'


const renderSublinks = (games, ownProps) =>{
  const allTypes = [...new Set(games.map(item => item.gameType))];
  const allRatings = [...new Set(games.map(item => item.rating))];
  var booole = Object.keys(ownProps).length > 0;

  if (!booole) {
    return null;
  }else{
    let { filter } = ownProps.filter;
    if (filter === 'type') {
      
      return allTypes.map((item, i) => {
        const obj = {filter: 'type', val: item};
        return <FilterLink className="subLink" key={i} urlParam={ obj } games = {games}>{item}</FilterLink>
      }) 
    }
    if (filter === 'rating') {
      return allRatings.map((item, i) => {
        const obj = {filter: 'rating', val: item};
        return <FilterLink className="subLink" key={i} urlParam={ obj } games = {games}>{item} stars</FilterLink>
      }) 
    }
  }

}
const SideBar = (state) => {
  const { games, ownProps } = state;
  const subLinks = renderSublinks(games, ownProps);
  return <div className = "sideBar">

    <FilterLink className="main all" urlParam={VisibilityFilters.SHOW_ALL} games = {games}>All</FilterLink>
    <FilterLink className="main" urlParam={{filter: 'type'}} games = {games}>By Type</FilterLink>
    <FilterLink className="main" urlParam={{filter: 'rating'}} games = {games}>By Rating</FilterLink>
    {subLinks}
  </div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.games,
    ownProps
  }
}

export default connect(
  mapStateToProps,
)(SideBar)
