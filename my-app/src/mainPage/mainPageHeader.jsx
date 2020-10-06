import React from 'react';
import logo from "../EDV-logo.jpg";
import '../index.css';


const mainPageHeader=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light navBarBackgroundColor" >
            <a className="navbar-brand" href="#">
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link my-2" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item dropdown mx-5 my-2">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Catalog
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                                <button type="button" className="btn btn-primary" data-toggle="modal"
                                        data-target="#goodsContentModal">
                                    <i className="fas fa-mobile"></i> Mobiles
                                </button>
                            </a>
                            <a className="dropdown-item" href="#">
                                <button type="button" className="btn btn-primary" data-toggle="modal"
                                        data-target="#goodsContentModal">
                                    <i className="fas fa-tv"></i> Tv
                                </button>
                            </a>
                            <a className="dropdown-item" href="#">Gadgets</a>
                            <a className="dropdown-item" href="#"></a>
                            <a className="dropdown-item" href="#">Audio</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Computers</a>
                            <a className="dropdown-item" href="#">Consoles</a>
                        </div>
                    </li>

                    <li className="nav-item mx5">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="fontSizePicCart">
                                <i className="fas fa-user"></i>
                            </span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Register</a>
                            <a className="dropdown-item" href="#">Login</a>
                        </div>
                    </li>
                    <li className="nav-item mx5">
                        <a className="nav-link" href="#">
                            <span className="fontSizePicCart">
                                <i className="fas fa-cart-arrow-down"></i>
                            </span>
                        </a>
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
    )
}

export default mainPageHeader;