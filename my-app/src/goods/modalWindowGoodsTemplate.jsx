import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Route} from "react-router-dom";
import {render} from "react-dom";


{/* MOBILE item card in MODAL WINDOW rendering Below */}
const MobileItem = (props)=>{
    return(
        <div className="col-sm my-5" >
            <img src={props.image} className="card-img-top" style={{width: "10rem", height: "10rem"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name: "{props.name}"</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">Vendor code: {props.vendor_code}</li>
                <li className="list-group-item">Price: {props.price} $</li>

                <li className="list-group-item">
                    <NavLink to="/cart" className="card-link"><i className="fas fa-shopping-cart fa-3x"></i></NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            <i className="fas fa-times-circle"></i>
                        </button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
{/* MOBILE item card in MODAL WINDOW rendering Above */}


{/* ModalWindowGoodsTemplate with state and FULL MODAL WINDOW rendering Below */}
class ModalWindowGoodsTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mobileItems: []}
    }
    componentDidMount() {
        this.props.getMobiles().then(
            mobiles=>{
                let mobilesCount = mobiles.length;
                let mobileItems = [];
                for (let i = 0; i < mobilesCount; i++) {
                    mobileItems.push(<MobileItem
                        key={i}
                        image={mobiles[i].image}
                        vendor_code={mobiles[i].vendor_code}
                        name={mobiles[i].name}
                        price={mobiles[i].price}
                        brand={mobiles[i].brand}
                        screen={mobiles[i].screen}
                        camera={mobiles[i].camera}
                        memory={mobiles[i].memory}
                        size={mobiles[i].size}
                        otherChar={mobiles[i].otherChar}
                        color={mobiles[i].color}
                        inStock={mobiles[i].inStock}
                    />)
                }
                this.setState({mobileItems: mobileItems})
            }
        )
    }


    render() {
        return (
            <div className="modal fade" id="goodsContentModal" tabIndex="-1" role="dialog"
                 aria-labelledby="goodsContentModalLabel"
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
                        <div className="modal-body">
                            <Route exact path="/mobiles" render={() => {
                                return <div className="row">
                                    {this.state.mobileItems}
                                </div>
                            }}/>
                            <Route exact path="/Tv" render={() => {
                                return <div>
                                    TV
                                </div>
                            }}/>
                            <Route exact path="/computers" render={() => {
                                return <div>
                                    computers
                                </div>
                            }}/>
                            <Route exact path="/gadgets" render={() => {
                                return <div>
                                    gadgets
                                </div>
                            }}/>
                            <Route exact path="/audio" render={() => {
                                return <div>
                                    audio
                                </div>
                            }}/>
                            <Route exact path="/consoles" render={() => {
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
}
{/* ModalWindowGoodsTemplate with state and FULL MODAL WINDOW rendering Above */}
export default ModalWindowGoodsTemplate;
