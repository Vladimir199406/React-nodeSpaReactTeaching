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
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link my-2" to="">Home <span className="sr-only">(current)</span></NavLink>
                        </li>

                        <li className="nav-item dropdown mx-5 my-2">
                            <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Catalog
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

                        <li className="nav-item mx5">
                            <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fontSizePicCart">
                                    <i className="fas fa-user"></i>
                                </span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="">Register</NavLink>
                                <NavLink className="dropdown-item" to="">Login</NavLink>
                            </div>
                        </li>
                        <li className="nav-item mx5">
                            <NavLink className="nav-link" to="">
                                <span className="fontSizePicCart">
                                    <i className="fas fa-cart-arrow-down"></i>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default MainPageHeader;