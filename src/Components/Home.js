import '../css/Home.css';
import { HiChevronDoubleRight } from "react-icons/hi";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';



import { useEffect, useRef  } from "react";
import gsap from "gsap";


function Home(){
    // gsap code
    const textRef = useRef(null);

    useEffect(() => {
      const colors = ["red", "blue", "green", "yellow", "purple"];   
      const tl = gsap.timeline({ repeat: -1, yoyo: true });   
      colors.forEach((color) => {
        tl.to(textRef.current, { color: color, duration: 1, ease: "power1.inOut" });
      });
    }, []);

    // carousel slide
     useEffect(() => {
              const carousel = document.querySelector("#firstslide");
              if (carousel) {
                new window.bootstrap.Carousel(carousel, {
                  interval: 3000, 
                  ride: "carousel",
                });
              }
            }, []);

    let a=document.getElementsByClassName("three-img-box-1");
    let b=document.getElementsByClassName("three-img-box-2");
    let c=document.getElementsByClassName("three-img-box-3");
    function Img_box_1(){
        a[0].style.width="65%";
        a[0].style.zIndex="1";        
    }
   
    function Img_box_3(){
        c[0].style.width="65%";
        c[0].style.zIndex="1";        
    }
    function Img_m_leave(){
        a[0].style.width="25%";
        b[0].style.width="50%";
        c[0].style.width="25%";
    }
    return(
        <>
        {/* section 1 */}
        <section className="container-fluid p-0 m-0 home-box">
            <div className="container-fluid p-0 m-0 mt-5 position-relative ">            
                <img src={`${process.env.PUBLIC_URL}/images/slide1/img11.jpg`} className='img-fluid banner'/>
               <h1 >"Discover Endless Shopping: Exclusive Deals, Trendy Fashion, Electronics & More at Your Fingertips with Our E-Commerce App!"</h1>
                <marquee id="home-box-mar"><h2 ref={textRef}>Welcome Our CD-Mart E-Commerce Platform</h2></marquee>
              
            </div>            
        </section>

      

        <div className="container-fluid coll-1">
            <h1>Our Collection – Discover Quality & Style at CD-Mart</h1>
        </div>

        {/* section 2 */}

        <section className='container-fluid p-0 m-0  slide-box'>
            <div className='container'>
                <div className=" row">
                    <div className="col-lg-7 col-md-6 col-sm-12 ">
                        <div id="firstslide" className='carousel slide' data-bs-ride="carousel">
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <img src={`${process.env.PUBLIC_URL}/images/slide1/img1.jpg`} className='img-fluid d-block w-100'/>
                                </div>
                                <div className='carousel-item '>
                                    <img src={`${process.env.PUBLIC_URL}/images/slide1/img2.jpg`} className='img-fluid d-block w-100'/>
                                </div>
                                <div className='carousel-item '>
                                    <img src={`${process.env.PUBLIC_URL}/images/slide1/img3.jpg`} className='img-fluid d-block w-100'/>
                                </div>
                                <div className='carousel-item '>
                                    <img src={`${process.env.PUBLIC_URL}/images/slide1/img4.jpg`} className='img-fluid d-block w-100'/>
                                </div>
                                <div className='carousel-item '>
                                    <img src={`${process.env.PUBLIC_URL}/images/slide1/img5.jpg`} className='img-fluid d-block w-100'/>
                                </div>
                                <div className='carousel-item '>
                                    <img src={`${process.env.PUBLIC_URL}/images/slide1/img6.jpg`} className='img-fluid d-block w-100'/>
                                </div>
                                <div className='carousel-item '>
                                    <img src={`${process.env.PUBLIC_URL}/images/slide1/img7.jpg`} className='img-fluid d-block w-100'/>
                                </div>
                                <div className='carousel-item '>
                                    <img src={`${process.env.PUBLIC_URL}/images/slide1/img8.jpg`} className='img-fluid d-block w-100'/>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#firstslide" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#firstslide" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-12  slide-text">                      
                            <h1>Our Collections</h1>
                            <p>At CD-Mart, we take pride in offering a diverse collection of high-quality products that cater to your everyday needs. From trendy fashion and stylish accessories to essential home goods and tech gadgets, our carefully curated selection ensures you get the best in quality, affordability, and style. Whether you're looking for the latest trends or timeless classics, CD-Mart is your go-to destination for a seamless shopping experience. Explore our collection today and find something perfect just for you!</p>
                     
                    </div>
                </div>
            </div>
        </section>

        <div className='container-fluid p-0 m-0 py-3'>
            <marquee id="mar-1">
                <span>SALE IS LIVE!</span>
                <span>FREE SHOPING ON ALL ORDERS ABOVE ₹499</span>
                <span>30% OFF FOR FIRST ORDER</span>
                <span>FAST DELEVORY</span>
                <span>BEST PRICE</span>
                <span>BEST COLLECTION</span>
            </marquee>
        </div>

{/* section 3 */}
        <section className="container-fluid bg-light">
            <div className="container py-5">
                <div className="row ">                    
                    <div className='col-lg-5 col-md-6 col-sm-12 '> 
                        <h1>Best Collection</h1>
                        <p> At CD-Mart, we take pride in offering a diverse collection At CD-Mart, we take pride in offering a diverse collection 
                        At CD-Mart, we take pride in offering a diverse collection At CD-Mart, we take pride in offering a diverse collection </p>
                        <NavLink to="/Product-details" > <button className="btn btn-outline-info mb-5 main-btn ">Learn More <HiChevronDoubleRight /></button></NavLink>
                    </div>

                    <div className='col-lg-7 col-md-6 col-sm-12'>
                    <NavLink to="/Product-details" ><img src={`${process.env.PUBLIC_URL}/images/slide2/img-1.jpg`} className='rounded img-fluid d-block w-100'/></NavLink>
                    </div>                    
                </div>
            </div>
        </section>

        {/* section 3-1 */}

        <section className='container-fluid'>
            <div className='container py-5 '>
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <h1>Our Collections</h1>
                        <p>At CD-Mart, we take pride in offering a diverse collection of high-quality products that cater to your everyday needs. From trendy fashion and stylish accessories to essential home goods and tech gadgets, our carefully curated selection ensures you get the best in quality, affordability, and style. Whether you're looking for the latest trends or timeless classics, CD-Mart is your go-to destination for a seamless shopping experience. Explore our collection today and find something perfect just for you!</p>
                    </div>

                    <div className="col-lg-7 col-md-6 col-sm-12 img-box-1">      
                        <div className="img-3-box ">                    
                            <img src={`${process.env.PUBLIC_URL}/images/girl/img-6.jpg`} className='d-inline h-100  three-img-box-1' onMouseEnter={Img_box_1} onMouseOut={Img_m_leave}/>
                            <img src={`${process.env.PUBLIC_URL}/images/boy/img-5.jpg`} className='d-inline h-100  three-img-box-2' />
                            <img src={`${process.env.PUBLIC_URL}/images/girl/img-3.jpg`} className='d-inline h-100  three-img-box-3' onMouseEnter={Img_box_3} onMouseOut={Img_m_leave}/>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>


        
      {/* section 4 */}

        <section className='container-fluid p-0 m-0'>
        <div className="container py-3 section-4">
               <div className="row">
                    <div className="col-lg-6 col-md-7 col-sm-12 mb-lg-0 mb-4">                        
                    <NavLink to="/Product-details" > <img src={`${process.env.PUBLIC_URL}/images/slide3/img-1.jpg`} className='rounded img-fluid'/></NavLink>
                        
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12 mt-sm-4 ">
                        <h2>Step into Style: The Best Shoe Collection Awaits!.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam a harum ducimus non doloremque aut libero dolor optio voluptas.</p>
                        <NavLink to="/Product-details" > <button className="btn btn-outline-info mt-5 main-btn ">Learn More <HiChevronDoubleRight /></button></NavLink>
                    </div>
               </div>
            </div>
        </section>

        {/* sectin-4.1 */}
        <section >
                <div class="section-4-1-box">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-lg-9 col-md-12">
                                <h2>Baked fresh daily by bakers with passion.</h2>
                            </div>
                            <div class="col-lg-3 col-md-12 mt-lg-0 mt-4">
                            <NavLink to="/Product-details" > <button class="btn btn-success main-btn">Learn more <HiChevronDoubleRight /></button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <div className='container-fluid coll-2'>
            <h1>Discover top-quality, stylish footware.</h1>
        </div>

        {/* section 5 */}

        <section className=' scroll-box my-5'>
           <div className='container-fluid d-flex scroll-1'>
           
           <div class="card" >
            <img src={`${process.env.PUBLIC_URL}/images/slide3/img-1.jpg`} className='card-img-top rounded img-fluid'/>
                <div class="card-body">
                    <h5 class="card-title">Best Product</h5>
                    <p class="card-text">Premium quality, stylish, and reliable.</p>
                    <NavLink to="/Product-details" > <a href="#" class="btn btn-outline-danger">Shop Now <MdAddShoppingCart /></a></NavLink>
                </div>
            </div>
            

            <div class="card" >
            <img src={`${process.env.PUBLIC_URL}/images/slide3/img-2.jpg`} className='card-img-top rounded img-fluid'/>
                <div class="card-body">
                    <h5 class="card-title">Best Product</h5>
                    <p class="card-text">Premium quality, stylish, and reliable.</p>
                    <NavLink to="/Product-details" ><a href="#" class="btn btn-outline-danger">Shop Now <MdAddShoppingCart /></a></NavLink>
                </div>
            </div>

            <div class="card" >
            <img src={`${process.env.PUBLIC_URL}/images/slide3/img-3.jpg`} className='card-img-top rounded img-fluid'/>
                <div class="card-body">
                    <h5 class="card-title">Best Product</h5>
                    <p class="card-text">Premium quality, stylish, and reliable.</p>
                    <NavLink to="/Product-details" > <a href="#" class="btn btn-outline-danger">Shop Now <MdAddShoppingCart /></a></NavLink>
                </div>
            </div>

            <div class="card" >
            <img src={`${process.env.PUBLIC_URL}/images/slide3/img-4.jpg`} className='card-img-top rounded img-fluid'/>
                <div class="card-body">
                    <h5 class="card-title">Best Product</h5>
                    <p class="card-text">Premium quality, stylish, and reliable.</p>
                    <NavLink to="/Product-details" ><a href="#" class="btn btn-outline-danger">Shop Now <MdAddShoppingCart /></a></NavLink>
                </div>
            </div>

            <div class="card" >
            <img src={`${process.env.PUBLIC_URL}/images/slide3/img-5.jpg`} className='card-img-top rounded img-fluid'/>
                <div class="card-body">
                    <h5 class="card-title">Best Product</h5>
                    <p class="card-text">Premium quality, stylish, and reliable.</p>
                    <NavLink to="/Product-details" ><a href="#" class="btn btn-outline-danger">Shop Now <MdAddShoppingCart /></a></NavLink>
                </div>
            </div>

            <div class="card" >
            <img src={`${process.env.PUBLIC_URL}/images/slide3/img-6.jpg`} className='card-img-top rounded img-fluid'/>
                <div class="card-body">
                    <h5 class="card-title">Best Product</h5>
                    <p class="card-text">Premium quality, stylish, and reliable.</p>
                    <NavLink to="/Product-details" ><a href="#" class="btn btn-outline-danger">Shop Now <MdAddShoppingCart /></a></NavLink>
                </div>
            </div>

            <div class="card" >
            <img src={`${process.env.PUBLIC_URL}/images/slide3/img-7.jpg`} className='card-img-top rounded img-fluid'/>
                <div class="card-body">
                    <h5 class="card-title">Best Product</h5>
                    <p class="card-text">Premium quality, stylish, and reliable.</p>
                    <NavLink to="/Product-details" > <a href="#" class="btn btn-outline-danger">Shop Now <MdAddShoppingCart /></a></NavLink>
                </div>
            </div>

            
            <div class="card" >
            <img src={`${process.env.PUBLIC_URL}/images/slide3/img-3.jpg`} className='card-img-top rounded img-fluid'/>
                <div class="card-body">
                    <h5 class="card-title">Best Product</h5>
                    <p class="card-text">Premium quality, stylish, and reliable.</p>
                    <NavLink to="/Product-details" ><a href="#" class="btn btn-outline-danger">Shop Now <MdAddShoppingCart /></a></NavLink>
                </div>
            </div>
            
           </div>
        </section>

        <div className='container-fluid coll-3'>
            <h1>Discover top-quality, stylish, and designed for your.</h1>
        </div>

        {/* section 6 */}
        <section className="scroll-box-2">
            <div className="container-fluid py-lg-5 py-md-3 pt-md-5 scroll-2">              
                                    
                     <div className='card a'> 
                        <img src={`${process.env.PUBLIC_URL}/images/slide2/img-7.jpg`} className='card-img-top rounded img-fluid d-block h-75'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                     </div>
                
                     <div className='card a'>
                        <img src={`${process.env.PUBLIC_URL}/images/slide2/img-4.jpg`} className='card-img-top rounded img-fluid d-block h-75'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='card a'>
                        <img src={`${process.env.PUBLIC_URL}/images/slide2/img-5.jpg`} className=' card-img-top rounded img-fluid d-block h-75'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>                            
                 
                
            </div>
        </section>

        <div className='container-fluid p-0 m-0 py-3'>
            <marquee direction="right" id="mar-2">
                <span>SALE IS LIVE!</span>
                <span>FREE SHOPING ON ALL ORDERS ABOVE ₹499</span>
                <span>30% OFF FOR FIRST ORDER</span>
                <span>FAST DELEVORY</span>
                <span>BEST PRICE</span>
                <span>BEST COLLECTION</span>
            </marquee>
        </div>

        {/* section-7 */}

        
    <section class="section-7">`
        <h1>Our Best Collection</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        <div class="row">
            <div class="col-lg-4 section-7-col">
            <img src={`${process.env.PUBLIC_URL}/images/slide5/img-2.jpg`} className='rounded img-fluid d-block h-100'/>
                <div class="layer">
                    <h3>BESTSELLER</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>                    
                </div>
            </div>
            <div class="col-lg-4 section-7-col">
            <img src={`${process.env.PUBLIC_URL}/images/slide5/img-4.jpg`} className='rounded img-fluid d-block h-100'/>
                <div class="layer">
                    <h3>BESTSELLER</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="col-lg-4 section-7-col">
            <img src={`${process.env.PUBLIC_URL}/images/slide5/img-5.webp`} className='rounded img-fluid d-block h-100'/>
                <div class="layer">
                    <h3>BESTSELLER</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
       

    </>
    )
}
export default Home;