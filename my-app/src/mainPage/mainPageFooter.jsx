import React from 'react';
import logo from "../EDV-logo.jpg";

const mainPageFooter=()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="50" height="50"
                         className="d-inline-block align-top mx-4 my-2" alt="" loading="lazy"/>
                        This React App is designed and created by Vladimir Tsallagov
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Top of page <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav-link" href="#">Phone number: 8-915-243-12-53</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fab fa-vk"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="my-5">

            </div>
        </div>
    )
}

export default mainPageFooter;