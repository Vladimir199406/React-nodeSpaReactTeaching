import React from 'react';
import '../index.css';
import sideBarGoodsContent from "../goods/sideBarGoodsContent";

const mainPageMain=()=>{
    return (
    <div className="container justify-content-center">
        {sideBarGoodsContent()}
        <div className="row my-3">
            <div className="col-sm shadow-lg p-3 mb-5 bg-white rounded">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="d-block w-100 pictureCarousel" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="d-block w-100 pictureCarousel" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1593784991188-c899ca07263b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="d-block w-100 pictureCarousel" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="row text-center">
                    <div className="col-sm">
                        <div className="card my-3">
                            <div className="card-body">
                                <h5 className="card-title">Thousands of goods</h5>
                                <p className="card-text">Open the catalog, choose your own goods.</p>
                                <a href="#" className="btn btn-primary"><i className="fas fa-ad"></i> Register now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card my-3">
                            <div className="card-body">
                                <h5 className="card-title">Profitable loyalty program</h5>
                                <p className="card-text">Register an account or sign in to know about your special
                                    loyalty program
                                </p>
                                <a href="#" className="btn btn-primary"><i className="fas fa-ad"></i> Register now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card my-3">
                            <div className="card-body">
                                <h5 className="card-title">Regular discounts</h5>
                                <p className="card-text">Always thinking about customers.</p>
                                <a href="#" className="btn btn-primary"><i className="fas fa-ad"></i> Register now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card my-3">
                            <div className="card-body">
                                <h5 className="card-title">No cheating</h5>
                                <p className="card-text">
                                    verified suppliers and quality assurance.</p>
                                <a href="#" className="btn btn-primary"><i className="fas fa-ad"></i> Register now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-sm text-center">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Mobile phones</h5>
                            <button type="button" className="btn btn-primary" data-toggle="modal"
                                    data-target="#goodsContentModal">
                                <i className="fas fa-mobile"></i> Mobiles
                            </button>
                        </div>
                </div>

                <div className="card my-3">
                    <img src="https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Tv</h5>
                        <button type="button" className="btn btn-primary" data-toggle="modal"
                                data-target="#goodsContentModal">
                            <i className="fas fa-tv"></i> Tv
                        </button>
                    </div>
                </div>

                <div className="card my-3">
                    <img src="https://images.unsplash.com/photo-1497296805880-3b37686c87ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Computers</h5>
                        <a href="#" className="btn btn-primary">
                            <i className="fas fa-laptop-code"></i> See the catalog
                        </a>
                    </div>
                </div>
            </div>


            <div className="col-sm text-center">
                <div className="card my-3">
                    <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Gadgets</h5>
                        <a href="#" className="btn btn-primary">
                            <i className="fab fa-android"></i> See the catalog
                        </a>
                    </div>
                </div>

                <div className="card my-3">
                    <img src="https://images.unsplash.com/photo-1566478989151-541ffa519573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Audio</h5>
                        <a href="#" className="btn btn-primary">
                            <i className="fas fa-volume-up"></i> See the catalog
                        </a>
                    </div>
                </div>

                <div className="card my-3">
                    <img src="https://images.unsplash.com/photo-1531390658120-e06b58d826ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Consoles</h5>
                        <a href="#" className="btn btn-primary">
                            <i className="fab fa-playstation"></i> See the catalog
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default mainPageMain;