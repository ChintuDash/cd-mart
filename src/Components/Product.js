import '../css/Product.css';
import { NavLink } from 'react-router-dom';


function Product(){    
       
  
    return(
        <>
           <section className="container-fluid p-0 m-0">                

                <div className="container product-text">
                    <h1>Product Page</h1>                 
                </div>          


                <div className='container product mt-4'>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/girl/img-1.jpg"} className="card-body rounded" alt="not found"/>
                                 <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                             <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/slide4/img-6.jpg"} className="card-body rounded" alt="not found"/>
                                 <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/girl/img-5.png"} className="card-body rounded" alt="not found"/>
                                 <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/boy/img-2.jpg"} className="card-body rounded" alt="not found"/>
                                 <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/slide4/img-5.jpg"} className="card-body rounded" alt="not found"/>
                                 <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/boy/img-5.jpg"} className="card-body rounded" alt="not found"/>
                                 <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/slide4/img-2.jpg"} className="card-body rounded" alt="not found"/>
                                 <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/boy/img-6.jpg"} className="card-body rounded" alt="not found"/>
                                 <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                 <img src={process.env.PUBLIC_URL+"/images/boy/img-7.jpg"} className="card-body rounded" alt="not found"/>
                                <NavLink to="/Product-Details"> <h2 className="card-footer">Get Details</h2></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}
export default Product;