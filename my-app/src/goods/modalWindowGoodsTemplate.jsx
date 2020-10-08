import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Route} from "react-router-dom";


const ModalWindowGoodsTemplate=()=>{
    return (
        <div className="modal fade" id="goodsContentModal" tabIndex="-1" role="dialog" aria-labelledby="goodsContentModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
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
                        <NavLink to="/Home">
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
