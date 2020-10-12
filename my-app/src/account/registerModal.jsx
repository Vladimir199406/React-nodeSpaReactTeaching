import React from 'react';

const RegisterModal=()=>{
    return (
<div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center" id="registerModal">Register:</h5>
                </div>
                <div className="modal-body text-center">
                    <p>Here you will register an account...soon, but not now</p>
                    <i className="fas fa-sad-cry fa-7x"></i>
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

export default RegisterModal;