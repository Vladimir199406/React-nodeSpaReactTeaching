import React from 'react';
import '../index.css';
import {NavLink} from "react-router-dom";


const MainPageMain=()=>{
    return (
        <main>
            <div className="container justify-content-center">
                <div className="toast" role="alert" aria-live="polite" aria-atomic="true" data-delay="10000">
                    <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
                </div>
                <div className="row my-3">
                    <div className="col-sm p-3 mb-5 rounded my-3" style={{backgroundColor: "#282c34"}}>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="d-block  pictureCarousel mx-auto" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="d-block pictureCarousel mx-auto" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1593784991188-c899ca07263b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="d-block pictureCarousel mx-auto" alt="..."/>
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

                        <div className="text-center">

                                <div className=" card my-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Thousands of goods with</h5>
                                        <p className="card-text">Open the catalog, choose your own goods delivered to us from verified suppliers.</p>
                                        <a href="#" className="btn btn-primary"><i className="fas fa-user"></i> Register now</a>
                                    </div>
                                </div>


                                <div className=" card my-5">
                                    <div className="card-body">
                                        <h5 className="card-title">No cheating</h5>
                                        <p className="card-text">Goods are delivered to us ONLY from verified suppliers.</p>
                                        <a href="#" className="btn btn-primary"><i className="fas fa-user"></i> Register now</a>
                                    </div>
                                </div>


                                <div className="card my-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Profitable loyalty program</h5>
                                        <p className="card-text">Register an account or sign in to know about your special
                                            loyalty program
                                        </p>
                                        <a href="#" className="btn btn-primary"><i className="fas fa-user"></i> Register now</a>
                                    </div>
                                </div>

                        </div>
                    </div>


                    <div className="col-sm text-center my-5">
                        <NavLink exact to="/mobiles">
                        <div className="card my-3"
                             data-toggle="modal"
                             data-target="#goodsContentModal"
                             style={{cursor:"pointer"}}
                        >
                            <img src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                                <div className="card-body">

                                        <button type="button" className="btn btn-primary" data-toggle="modal"
                                                data-target="#goodsContentModal">
                                            <i className="fas fa-mobile"></i> Mobiles
                                        </button>

                                </div>
                        </div>
                        </NavLink>

                        <NavLink exact to="/Tv">
                        <div className="card my-3"
                             data-toggle="modal"
                             data-target="#goodsContentModal"
                             style={{cursor:"pointer"}}
                        >
                            <img src="https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                            <div className="card-body">

                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fas fa-tv"></i> Tv
                                    </button>

                            </div>
                        </div>
                        </NavLink>

                        <NavLink exact to="/computers">
                        <div className="card my-3"
                             data-toggle="modal"
                             data-target="#goodsContentModal"
                             style={{cursor:"pointer"}}
                        >
                            <img src="https://images.unsplash.com/photo-1497296805880-3b37686c87ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" className="card-img-top" alt="..."/>
                            <div className="card-body">

                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fas fa-laptop-code"></i> Computers
                                    </button>

                            </div>
                        </div>
                        </NavLink>
                    </div>


                    <div className="col-sm text-center ">
                        <NavLink exact to="/gadgets">
                        <div className="card my-3"
                             data-toggle="modal"
                             data-target="#goodsContentModal"
                             style={{cursor:"pointer"}}
                        >
                            <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fab fa-android"></i> Gadgets and audio
                                    </button>
                            </div>
                        </div>
                        </NavLink>

                        <NavLink exact to="/consoles">
                        <div className="card my-3"
                             data-toggle="modal"
                             data-target="#goodsContentModal"
                             style={{cursor:"pointer"}}
                        >
                            <img src="https://images.unsplash.com/photo-1531390658120-e06b58d826ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                            <div className="card-body">

                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#goodsContentModal">
                                        <i className="fab fa-playstation"></i> Consoles
                                    </button>

                            </div>
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* youtube help me  Below */}
            <div className="container">
                <div className="container">
                    <h3 style={{color: "brown"}}>
                        #juniors developers lives matter...
                    </h3>
                    <h1 className="text-center my-3" style={{color: "white"}}>
                        Special thanks to:
                    </h1>
                    <h3 className="text-right" style={{color: "brown"}}>
                        #just code it...
                    </h3>
                    <h3 className="text-center" style={{color: "brown"}}>
                        #it is never too late to start using "Bootstrap"
                    </h3>
                </div>
                <div className="container row my-5">
                    <div className="col-sm my-2">
                        <div className="embed-responsive embed-responsive-16by9 align-content-center" style={{borderRadius: "4rem"}}>
                            <iframe width="884" height="497" src="https://www.youtube.com/embed/FJY2RKggXWc"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-sm my-2">
                        <div className="embed-responsive embed-responsive-16by9 align-content-center" style={{borderRadius: "4rem"}}>
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/Ps2TiA5dIKc" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                {/* youtube help me  Above */}
            </div>
        </main>
    )
}

export default MainPageMain;