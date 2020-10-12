import React from "react";
import {render} from "react-dom";

const ModalWindowHeaderWithSearch = ()=>{
    return(
        <div className="modal-header align-content-center">
            <div className="col-sm">
                <form className="form-inline my-2 my-lg-0 row">
                    <div className="container col-sm no-margin">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                    </div>
                    <div className="container col-sm no-margin">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalWindowHeaderWithSearch;