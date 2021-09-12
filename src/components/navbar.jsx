import React, { Component } from 'react'

// stateless functional component #shortcut sfc
const NavBar = ({ totalCounters }) => {
    console.log('navbar rendered');
    
    return (  
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}
 
export default NavBar;