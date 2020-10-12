import React from 'react';
const LoginModal=()=>{
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="loginModal">Log in:</h5>
                    </div>
                    <div className="modal-body text-center">
                        <p>Here you will...</p>
                        <p>Stop. Again?...</p>
                        <p>Sorry, I am so sorry. But I show you modal, no anchor...the modal with anchor...</p>
                        <p>...never mind.</p>
                        <i className="fas fa-anchor fa-7x"></i>
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

export default LoginModal;