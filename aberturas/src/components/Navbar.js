import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuBars from '../images/menu.png'
import { NavbarItems } from './NavbarItems'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons'
import './styles/Navbar.css';

function Navbar() {

    // Abrir y cerrar navbar
    const [navbar, setNavbar] = useState(false);

    const showNavbar = () => setNavbar(!navbar);

    // Ponerle sombra al navbar al scrollear

    // const [navbarShadow , setShadow ] = useState(true);

    // const showShadow = () => setShadow(!navbarShadow);

    // if (navbarShadow === false) {
    //     var shadow = {
    //         boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.26)',
    //     }
    // }else{
    //     shadow = {
    //         boxShadow: 'none',
    //     }
    // };


    //Funcionamiento de todo el navbar
    return (
        <>
            <IconContext.Provider value={{ color: '#221F1F' }}>
                <div className='navbar' >  {/* style={shadow} onClick={showShadow} */}
                    <HashLink smooth to='/#home'>
                        <div className='nav-logo' />
                    </HashLink>
                    <Link to='#'>
                        <img alt='Menu' src={MenuBars} className='menu-bars' onClick={showNavbar} />
                    </Link>
                </div>
                <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bar x' onClick={showNavbar}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {NavbarItems.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <HashLink smooth to={item.path}>
                                        <span onClick={showNavbar}>{item.title}</span>
                                    </HashLink>
                                </li>
                            )
                        })}
                        <li className='nav-facebook-container'>
                            <a href='https://www.facebook.com/BRUNO-Aberturas-2041032876184531' target='_blank' rel='noreferrer'>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;