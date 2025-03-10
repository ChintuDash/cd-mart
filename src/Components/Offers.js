import '../css/Offers.css';

function Offers(){
    return(
        <>
           <section className='container-fluid'>
                <div className='container offer-box'>
                    <h1>Best Discount on Products</h1>                    
                </div>
                <marquee id="offer-mar">
                        <span>SALES IS LIVE!</span>
                        <span>BEST OFFERS</span>
                        <span>FREE DELIVERY</span>
                        <span>TOP DISCOUNT</span>
                    </marquee>
           </section>
           <section className='container-fluid '>
                <div className='row offer'>
                    <div className='col-lg-3 col-md-6 col-sm-12 '>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL+"/images/slide2/img-9.jpg"} className="card-body rounded" alt="not found"/>
                            <div className='card-footer'>
                                <h5>Rs 1800 <sub>M.R.P(3800)</sub></h5>
                                <h4> Add to Cart</h4>
                             </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                         <div className='card'>
                              <img src={process.env.PUBLIC_URL+"/images/slide2/img-10.jpg"} className="card-body rounded" alt="not found"/>
                             <div className='card-footer'>
                                <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                                <h4> Add to Cart</h4>
                             </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL+"/images/slide5/img-1.jpg"} className="card-body rounded" alt="not found"/>
                            <div className='card-footer'>
                                <h5>Rs 1300 <sub>M.R.P(2000)</sub></h5>
                                <h4> Add to Cart</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                         <div className='card'>
                            <img src={process.env.PUBLIC_URL+"/images/slide5/img-3.jpg"} className="card-body rounded" alt="not found"/>
                            <div className='card-footer'>
                                <h5>Rs 1800 <sub>M.R.P(3500)</sub></h5>
                                <h4> Add to Cart</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row offer'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL+"/images/slide2/img-9.jpg"} className="card-body rounded" alt="not found"/>
                            <div className='card-footer'>
                                <h5>Rs 1000 <sub>M.R.P(2500)</sub></h5>
                                <h4> Add to Cart</h4>
                             </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                         <div className='card'>
                              <img src={process.env.PUBLIC_URL+"/images/slide2/img-10.jpg"} className="card-body rounded" alt="not found"/>
                             <div className='card-footer'>
                                <h5>Rs 2000 <sub>M.R.P(3200)</sub></h5>
                                <h4> Add to Cart</h4>
                             </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='card'>
                            <img src={process.env.PUBLIC_URL+"/images/slide5/img-1.jpg"} className="card-body rounded" alt="not found"/>
                            <div className='card-footer'>
                                <h5>Rs 1620 <sub>M.R.P(2600)</sub></h5>
                                <h4> Add to Cart</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                         <div className='card'>
                            <img src={process.env.PUBLIC_URL+"/images/slide5/img-3.jpg"} className="card-body rounded" alt="not found"/>
                            <div className='card-footer'>
                                <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                                <h4> Add to Cart</h4>
                            </div>
                        </div>
                    </div>
                </div>

           </section>
        </>
    )
}
export default Offers;

