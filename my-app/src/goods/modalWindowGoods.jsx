import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Route, {NavLink} from "react-router-dom";


const ModalWindowGoods=()=>{
    return (
        <div className="modal fade" id="goodsContentModal" tabIndex="-1" role="dialog" aria-labelledby="goodsContentModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="goodsContentModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        telo
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

export default ModalWindowGoods;
