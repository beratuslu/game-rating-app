import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ urlParam, todos, children, ...prop }) => 
  {
    let to = '';
    if (urlParam === 'SHOW_ALL') {
      to = '/';
    }else{
      if (urlParam.filter) {
        to = `/${urlParam.filter}`
      }
      if (urlParam.val) {
        to = `${to}/${urlParam.val}`;
      }
      
      // else{
      //   let val = 5;
      //   if (urlParam.filter === 'type') {
      //     val = todos[0].gameType;
      //   }
      //   to = `${to}/${val}`;
      // }
    }
    return <NavLink
      {...prop}
      to={ to }
    >
      {children}
    </NavLink>

    // return <NavLink
    //   to={filter === 'SHOW_ALL' ? '/' : `/${ filter }`}
    //   activeStyle={ {
    //     textDecoration: 'none',
    //     color: 'black'
    //   }}
    // >
    //   {children}
    // </NavLink>
}


export default FilterLink;