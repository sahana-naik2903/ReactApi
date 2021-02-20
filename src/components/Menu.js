import React from "react";
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="Menu-page">
            <div className="menu">
                <Link to="/"><span className="menu-name">Home</span></Link>
                <Link to="/About"><span className="menu-name">About</span></Link>
                <Link to="/Contact"><span className="menu-name">Contact Us</span></Link>
            </div>
        </div>
    )
}
export default Menu;