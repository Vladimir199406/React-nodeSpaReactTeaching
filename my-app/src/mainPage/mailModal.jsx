import React from 'react';

const MailModal =()=>{
    return(
        <div className="modal fade" id="mailModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="exampleModalLabel">
                            <i className="fas fa-envelope-open"/>  was sent, everything is <i className="far fa-thumbs-up"></i>
                        </h5>
                    </div>
                    <div className="modal-body text-center">
                        <i className="fas fa-dove fa-7x"></i>
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

export default MailModal;