import React from 'react';
import logo from "../EDV-logo.jpg";
import '../index.css';
import {NavLink} from "react-router-dom";


const MainPageHeader=()=>{
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light navBarBackgroundColor" >
                <NavLink className="navbar-brand" to="">
                    <img src={logo} className="App-logo" alt="logo" />
                </NavLink>
                <button className="navbar-toggler border border-primary" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <i className="far fa-compass fa-2x"></i>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link my-2" to="">
                                <i className="fas fa-home fa-2x"></i>
                                <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>


                        <li className="nav-item dropdown mx-5 my-2">
                            <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-tag fa-lg"></i> Catalog
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" exact to="/mobiles">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fas fa-mobile"></i> Mobiles
                                    </button>
                                </NavLink>
                                <NavLink className="dropdown-item" exact to="/Tv">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fas fa-tv"></i> Tv
                                    </button>
                                </NavLink>
                                <NavLink className="dropdown-item" exact to="/computers">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fas fa-laptop-code"></i> Computers
                                    </button>
                                </NavLink>
                                <NavLink className="dropdown-item" exact to="/gadgets">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fab fa-android"></i> Gadgets
                                    </button>
                                </NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" exact to="/audio">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fas fa-volume-up"></i> Audio
                                    </button>
                                </NavLink>
                                <NavLink className="dropdown-item" exact to="/consoles">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fab fa-playstation"></i> Consoles
                                    </button>
                                </NavLink>
                            </div>
                        </li>


                        <li className="nav-item dropdown mx-5 my-2">
                            <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user fa-lg"></i> Account
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" exact to="/register">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="far fa-user"></i> Register
                                    </button>
                                </NavLink>
                                <NavLink className="dropdown-item" exact to="/login">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="far fa-user-circle"></i> Login
                                    </button>
                                </NavLink>
                            </div>
                        </li>


                        <li className="nav-item mx5">
                            <NavLink className="nav-link" to="">
                                <span>
                                    <i className="fas fa-cart-arrow-down fa-2x"></i>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default MainPageHeader;