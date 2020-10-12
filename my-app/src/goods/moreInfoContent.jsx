import React from "react";
import {render} from "react-dom";

class MobileOneItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {oneMobileItemContent: []}
    }

    componentDidMount() {
        let endPath = window.location.pathname.split("/")[2];
        this.props.getOneMobileItem(endPath).then(
            oneMobileItem=>{
                console.log(oneMobileItem);
                this.setState({oneMobileItemContent: oneMobileItem})
            }
        )
        console.log(endPath);
    }

        render(){
            return <div className="container align-content-center">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={this.state.oneMobileItemContent.image} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <h1 className="text-lg-center">{this.state.oneMobileItemContent.name}</h1>
                <h5>Price: {this.state.oneMobileItemContent.price} $</h5>
                <h5>Brand: {this.state.oneMobileItemContent.brand}</h5>
                <h5>Vendor code: {this.state.oneMobileItemContent.vendor_code}</h5>
                <h5>Color: {this.state.oneMobileItemContent.color}</h5>
                <h5>In stock: {this.state.oneMobileItemContent.inStock}</h5>
                <h4>Specifications: </h4>
                <ul>
                    <li>Screen: {this.state.oneMobileItemContent.screen}</li>
                    <li>Memory: {this.state.oneMobileItemContent.memory}</li>
                    <li>Camera: {this.state.oneMobileItemContent.camera}</li>
                    <li>Size: {this.state.oneMobileItemContent.size}</li>
                    <li>Other characteristics: {this.state.oneMobileItemContent.otherChar}</li>
                </ul>
            </div>
        }
}

export default MobileOneItem;