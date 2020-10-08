import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Route} from "react-router-dom";


const ModalWindowGoodsTemplate=()=>{
    return (
        <div className="modal fade" id="goodsContentModal" tabIndex="-1" role="dialog" aria-labelledby="goodsContentModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-header align-content-center">
                        <div className="col-sm">
                            <form className="form-inline my-2 my-lg-0 row">
                                <div className="container col-sm no-margin">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                </div>
                                <div className="container col-sm no-margin">
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-body">
                        <Route exact path="/mobiles" render={()=>{
                            return <div>
                                Mobiles
                            </div>
                        }}/>
                        <Route exact path="/Tv" render={()=>{
                            return <div>
                                TV
                            </div>
                        }}/>
                        <Route exact path="/computers" render={()=>{
                            return <div>
                                computers
                            </div>
                        }}/>
                        <Route exact path="/gadgets" render={()=>{
                            return <div>
                                gadgets
                            </div>
                        }}/>
                        <Route exact path="/audio" render={()=>{
                            return <div>
                                audio
                            </div>
                        }}/>
                        <Route exact path="/consoles" render={()=>{
                            return <div>
                                consoles
                            </div>
                        }}/>
                    </div>
                    <div className="modal-footer">
                        <NavLink to="">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            <i className="fas fa-times-circle"></i>
                        </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindowGoodsTemplate;
