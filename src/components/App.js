import React from 'react'
import AddGame from '../containers/AddGame'
import VisibleGameList from '../containers/VisibleGameList'
import SideBar from './SideBar'
import '../styles/app.css';

const App = ({ match: { params } }) => {
  let filter = params.filter ? params : 'SHOW_ALL';
  return (
    <div className = "container">
      <SideBar filter={filter} />
      <div className ="rightWing">
        <VisibleGameList filter={filter} />
        <AddGame />
      </div>
    </div>
  )
}

export default App
