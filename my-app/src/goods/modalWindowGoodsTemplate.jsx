import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Route} from "react-router-dom";
import {render} from "react-dom";
import MobileOneItem from "./moreInfoContent";
import ModalWindowHeaderWithSearch from "./modalWindowHeaderWithSearch";


{/* MOBILE item card in MODAL WINDOW rendering Below */}
const MobileItem = (props)=>{
    return(
        <div className="col-sm my-5" >
            <img src={props.image} className="card-img-top mx-auto" style={{width: "10rem", height: "10rem", borderRadius: "1em"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name: "{props.name}"</h5>
            </div>
            <ul className="list-group list-group-flush text-center">
                <li className="list-group-item">Vendor code: {props.vendor_code}</li>
                <li className="list-group-item">Price: {props.price} $</li>

                <li className="list-group-item">
                    <button type="button" className="btn btn-lg btn-primary" data-toggle="popover" title="Popover title"
                            data-content="Item added to cart">
                        <i className="fas fa-cart-plus"></i>
                    </button>
                </li>
                {/* ACTIVATE MODAL MORE INFO WINDOW about card  Below */}
                <li className="list-group-item">
                    <NavLink exact to={"/" + props.category +"/" + props.vendor_code}>
                        <button type="button" className="btn btn-primary">
                            More info
                        </button>
                    </NavLink>
                </li>
                {/* ACTIVATE MODAL MORE INFO WINDOW about card  Above */}
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
        this.state = {mobileItems: [], oneMobileItemContent: []}
    }
    componentDidMount() {
        this.props.getMobiles().then(
            mobiles=>{
                let mobilesCount = mobiles.length;
                let mobileItems = [];
                for (let i = 0; i < mobilesCount; i++) {
                    mobileItems.push(
                        <MobileItem
                            key={i}
                            category = {mobiles[i].category}
                            image={mobiles[i].image}
                            imageBack={mobiles[i].imageBack}
                            imageLeft={mobiles[i].imageLeft}
                            imageRight={mobiles[i].imageRight}
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
                        />
                    )
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
                            {/* RETURN TO ACTUAL CATEGORY OF PRODUCTS BELOW*/}
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {/* RETURN TO ACTUAL CATEGORY OF PRODUCTS ABOVE*/}
                        </div>
                        <div className="modal-body ">
                            <Route exact path="/mobiles/:mobile" render={(props) => {
                                return <div className="container-fluid row align-content-center">
                                    <MobileOneItem getOneMobileItem={this.props.getOneMobileItem}/>
                                </div>
                            }}/>
                            <Route exact path="/mobiles" render={() => {
                                return <div className="row">
                                    <ModalWindowHeaderWithSearch/>
                                    {this.state.mobileItems}
                                </div>
                            }}/>
                            <Route exact path="/Tv" render={() => {
                                return <div>
                                    <ModalWindowHeaderWithSearch/>
                                    TV
                                </div>
                            }}/>
                            <Route exact path="/computers" render={() => {
                                return <div>
                                    <ModalWindowHeaderWithSearch/>
                                    computers
                                </div>
                            }}/>
                            <Route exact path="/gadgets" render={() => {
                                return <div>
                                    <ModalWindowHeaderWithSearch/>
                                    gadgets
                                </div>
                            }}/>
                            <Route exact path="/audio" render={() => {
                                return <div>
                                    <ModalWindowHeaderWithSearch/>
                                    audio
                                </div>
                            }}/>
                            <Route exact path="/consoles" render={() => {
                                return <div>
                                    <ModalWindowHeaderWithSearch/>
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