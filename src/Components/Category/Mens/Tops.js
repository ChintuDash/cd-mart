import React from 'react'
import '../../../css/Category/Jeans.css';
function Tops(){
    let abc=document.querySelector("#cartadd");
    let num=0;
    function addfun(){
        abc.innerHTML=num+=1;
    }
    
    return(
        <div className="container-fluid main-box">
        <h1>Tops & Shirts</h1>
       <div  className='row '>
             <div className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-1.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
             
            <div  className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
               <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-5.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
               </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-3.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                         <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
            <div  className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-4.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
       </div>

       <div  className='row '>
             <div className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-1.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
             
            <div  className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
               <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-5.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
               </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-3.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                         <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
            <div  className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-4.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
       </div>

       <div  className='row '>
             <div className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-1.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
             
            <div  className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
               <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-5.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
               </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-3.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                         <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
            <div  className='col-lg-3 col-md-6 col-sm-12 my-md-4 my-sm-5 box'>
                <div className='card'>
                    <img src={process.env.PUBLIC_URL+"/images/slide2/img-4.jpg"} className="card-body rounded" alt="not found"/>
                    <div className='card-footer'>
                        <h5>Rs 1500 <sub>M.R.P(3000)</sub></h5>
                        <h4 onClick={addfun}> Add to Cart</h4>
                    </div>
                </div>
            </div>
       </div>
    </div>
    )
}
export default Tops;