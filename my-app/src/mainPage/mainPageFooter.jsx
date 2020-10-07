import React from 'react';
import logo from "../EDV-logo.jpg";

const MainPageFooter=()=>{
    return (
        <div className="my-4">
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">
                    <a className="nav-link" href="#">
                        <i className="fas fa-hand-point-up"></i>
                        <span className="sr-only">(current)</span></a>
                </span>
                <span className="navbar-brand mb-0 h1">
                    <a className="nav-link" href="#">Tsallagov: 8-915-243-12-53</a>
                </span>
                <div><span className="navbar-brand mb-0 h1">
                    <a className="nav-link" href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                </span>
                <span className="navbar-brand mb-0 h1">
                    <a className="nav-link" href="#">
                        <i className="fab fa-facebook"></i>
                    </a>
                </span>
                <span className="navbar-brand mb-0 h1">
                    <a className="nav-link" href="#">
                        <i className="fab fa-instagram-square"></i>
                    </a>
                </span>
                <span className="navbar-brand mb-0 h1">
                    <a className="nav-link" href="#">
                        <i className="fab fa-vk"></i>
                    </a>
                </span>
                </div>
            </nav>
        </div>
    )
}

export default MainPageFooter;