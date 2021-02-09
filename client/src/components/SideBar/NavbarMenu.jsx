import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from '../SideBar/SideBarData'
import { IconContext } from 'react-icons';
import './Navbar.scss'
import { useAuth } from '../../Context/AuthContext'
import logo from '../../assets/Logo-transparent.svg'
import LoggedUser from '../SignupLogin/LoggedUser'

function NavbarMenu(props) {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)
const { currentUser } = useAuth()


if(currentUser === null) {
  let loginBar = [
    <Link to="/login" className="current-nav-user"><h2 className="nav-link-text">LOGIN</h2></Link>,
    <Link to="/josh-fusillo-capstone-muews" className="current-nav-user-two" onClick={props.handleSubmitTwo}><h2 className="nav-link-text">SEARCH</h2></Link>
  ]  
  let loginLink = <div className="current-nav-flex">{loginBar}</div>
  return [loginLink]
  
} 


    return (
      <>
     
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={props.handleSubmitTwo}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
            <img src={logo} alt='transparent' className="logo-transparent"/>
            <div className="header__band"><LoggedUser /></div>
    </>
    )
}

export default NavbarMenu
