import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <nav class="navbar navbar-light">
                    <div class="container-fluid">
                        <img src={logo} alt="" className="navbar-logo" onClick={() => window.location.href = "/"} />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;