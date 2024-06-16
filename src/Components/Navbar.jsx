import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from './utils/global.context'
import { routes } from './utils/routes'

const Navbar = () => {
  const {dispatch} = useDentistStates()

  return (
    <nav>
      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.contact}><h4>Contacto</h4></Link>
      <Link to={routes.favs}><h4>Favs</h4></Link>
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>Change theme</button>
    </nav>
  )
}

export default Navbar
