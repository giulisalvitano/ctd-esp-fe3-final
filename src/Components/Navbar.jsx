import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from './utils/global.context'
import { routes } from './utils/routes'

const Navbar = () => {
  const { state, dispatch } = useDentistStates();
  const isDarkTheme = state.theme;

  /*const handleThemeChange = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };*/
  
  return (
    <nav>
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contacto</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
      {isDarkTheme ? '☀️' : '🌙'}</button>
    </nav>
  )
}

export default Navbar
