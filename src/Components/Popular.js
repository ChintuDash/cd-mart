import '../css/Popular.css';
import { useEffect } from "react";


function Popular(){    
        useEffect(() => {
          const carousel = document.querySelector("#popularslide");
          if (carousel) {
            new window.bootstrap.Carousel(carousel, {
              interval: 3000, 
              ride: "carousel",
            });
          }
        }, []);
        useEffect(() => {
            const carousel2 = document.querySelector("#popularslide2");
            if (carousel2) {
              new window.bootstrap.Carousel(carousel2, {
                interval: 3000, 
                ride: "carousel",
              });
            }
          }, []);
    return(
        <>
           <section className="container-fluid p-0 m-0">                

                <div className="container popular-text">
                    <h1>Most Popular Products!</h1>                 
                </div>

                {/* Carousel slide */}
            <div className='container popular-slide-box'>
                <div className=" row">
                    <div className="col-lg-6 col-sm-12 popular-col pt-3">
                        <div id="popularslide" className="carousel slide mb-md-1" data-bs-interval="2000" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#popularslide" data-bs-slide-to="0" className="active" ></button>
                            <button type="button" data-bs-target="#popularslide" data-bs-slide-to="1" ></button>
                            <button type="button" data-bs-target="#popularslide" data-bs-slide-to="2" ></button>
                            <button type="button" data-bs-target="#popularslide" data-bs-slide-to="3" ></button>
                            <button type="button" data-bs-target="#popularslide" data-bs-slide-to="4" ></button>
                            <button type="button" data-bs-target="#popularslide" data-bs-slide-to="5" ></button>
                            <button type="button" data-bs-target="#popularslide" data-bs-slide-to="6" ></button>
                            <button type="button" data-bs-target="#popularslide" data-bs-slide-to="7" ></button>                            
                        </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img7.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img2.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img3.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img4.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img5.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img6.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img1.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img8.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#popularslide" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#popularslide" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 popular-col pt-lg-3">
                        <div id="popularslide2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#popularslide2" data-bs-slide-to="0" className="active" ></button>
                            <button type="button" data-bs-target="#popularslide2" data-bs-slide-to="1" ></button>
                            <button type="button" data-bs-target="#popularslide2" data-bs-slide-to="2" ></button>
                            <button type="button" data-bs-target="#popularslide2" data-bs-slide-to="3" ></button>
                            <button type="button" data-bs-target="#popularslide2" data-bs-slide-to="4" ></button>
                            <button type="button" data-bs-target="#popularslide2" data-bs-slide-to="5" ></button>
                            <button type="button" data-bs-target="#popularslide2" data-bs-slide-to="6" ></button>
                            <button type="button" data-bs-target="#popularslide2" data-bs-slide-to="7" ></button>                            
                        </div>
                            <div className='carousel-inner'>
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img2.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img1.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img3.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img4.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img5.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img6.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img7.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                                <div className="carousel-item ">
                                    <img src={process.env.PUBLIC_URL+"images/slide1/img8.jpg"} className='img-fluid d-block w-100'/>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#popularslide2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#popularslide2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        
            <div className='container-fluid popular-marquee'>
                <marquee>
                    <span>Popular</span>
                    <span>Your Choice!</span>
                    <span>Popular</span>
                    <span>Your Choice!</span>
                    <span>Popular</span>
                </marquee>
            </div>


                <div className='container popular mt-4'>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/girl/img-1.jpg"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                             <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/slide4/img-6.jpg"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/girl/img-5.png"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/boy/img-2.jpg"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/slide4/img-5.jpg"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/boy/img-5.jpg"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/slide4/img-2.jpg"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/boy/img-6.jpg"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/boy/img-7.jpg"} className="card-body rounded" alt="not found"/>
                                 <h2 className="card-footer">Popular</h2>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}
export default Popular;