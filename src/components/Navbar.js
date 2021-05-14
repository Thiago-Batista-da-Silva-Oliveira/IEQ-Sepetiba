import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {

    const [click, setClick] = useState(false)
    
    const handleClick = () =>{setClick(!click)}
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                 <Link to='/' className="navbar-logo"
                 onClick={closeMobileMenu}
                 >
                  IEQ <i class="fas fa-cross"></i>
                 </Link>
                 <div className="menu-icon" onClick={handleClick}>
                    <i  className={click? 'fas fa-times' : 'fas fa-bars'} />

                 </div>

                 <ul className={click? 'nav-menu active' : 'nav-menu'}>
                     <li className="nav-item">
                         <Link to='/' className="nav-links"
                          onClick={closeMobileMenu}
                         >
                             Início
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link to='/Sobre' className="nav-links"
                         onClick={closeMobileMenu}
                         >
                            Sobre
                         </Link>
                     </li>
                     
                     <li className="nav-item">
                         <Link to='/Células' className="nav-links"
                         onClick={closeMobileMenu}
                         >
                             Células
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link to='/Eventos' className="nav-links"
                         onClick={closeMobileMenu}
                         >
                             Eventos
                         </Link>
                     </li>
               
                     <li className="nav-item">
                         <Link to='/Cultos' className="nav-links"
                         onClick={closeMobileMenu}
                         >
                             Cultos
                         </Link>
                     </li>

                    
                 </ul>
                </div>
            </nav>
        </>
    )
}
