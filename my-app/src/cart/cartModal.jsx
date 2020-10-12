import React from 'react';

const CartModal=()=>{
    return (
        <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="registerModal">Register:</h5>
                    </div>
                    <div className="modal-body text-center">
                        <p>A cart does not exist...now but will soon</p>
                        <i className="fas fa-people-carry fa-7x"></i>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            <i className="fas fa-times-circle"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal;