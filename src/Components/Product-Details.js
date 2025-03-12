import '../css/Product-Details.css';
import { IoBagOutline } from "react-icons/io5";


function Product_details(){
    return(
        <>
            <section className="container-fluid">
                <div className="container details">
                    <h1>Product Details</h1>
                   <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12  details-box">
                        <img src={process.env.PUBLIC_URL+"/images/girl/img-5.png"} className="card-body rounded" alt="not found"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center align-items-center d-flex flex-column details-box">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Product Name</li>
                                <li class="list-group-item">3.7  19 Ratings</li>
                                <li class="list-group-item">Product Price: ₹1,692</li>
                                <li class="list-group-item">MRP₹3,599 (53% off)</li>
                                <li class="list-group-item">Price inclusive of all taxes</li>                                
                            </ul>
                            <button className='btn btn-outline-warning'><IoBagOutline /> Add To Bag</button>
                        </div>
                   </div>
                </div>
            </section>
        </>
    )
}
export default Product_details;

