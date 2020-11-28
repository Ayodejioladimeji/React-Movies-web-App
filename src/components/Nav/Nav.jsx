import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'
import './NavQuery.css'
import icon from './layomi.png'


const Nav = () => {

    // DECLARING THE STATES
    const [click, setClick] = useState(false);

    // DECLARING THE HANDLE CLICK FUNCTION
    const handleClick = ()=>{
        setClick(!click);
    }

    const closeMobile=()=>{
        setClick(false);
    }


    return (
        <div className="navbar">
            <div className="nav-icon">
                <Link to="/" className="icon-link">
                    <h2>LayoBright</h2>
                    <img src={icon} alt="link"/>
                </Link>
            </div> 

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
            </div>

            <div className="nav-list">
                <ul className={click ? 'menu-lists active' : 'menu-lists'}>
                    <li>
                        <Link to="/" className="lists" onClick={closeMobile}>Home</Link>
                    </li>

                    <li>
                        <Link to="/movies" className="lists" onClick={closeMobile}>Movies</Link>
                    </li>

                    <li>
                        <Link to="/crypto" className="lists" onClick={closeMobile}>Crypto</Link>
                    </li>

                    
                </ul>

            </div>
                       
        </div>
    )
}

export default Nav
