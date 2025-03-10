import '../css/Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { HiFastForward } from "react-icons/hi";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";






function Footer(){
    return(
        <>
            <section className="container-fluid  text-white text-center p-0 m-0 footer-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                           <u>Services</u>
                            <ul>
                                <li><a href="#"><HiFastForward /> Fast & Reliable Delivery</a></li>
                                <li><a href="#"><HiFastForward /> Secure Payment Option</a></li>
                                <li><a href="#"><HiFastForward /> Easy Returns & Refunds</a></li>
                                <li><a href="#"><HiFastForward /> 24/7 Customer Support</a></li>
                                <li><a href="#"><HiFastForward /> Personalized Shopping </a></li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <u>Branch</u>
                            <ul>
                                <li><a href="#"><HiMiniBuildingOffice2 /> Bhubaneswar</a></li>
                                <li><a href="#"><HiMiniBuildingOffice2 /> Cuttack</a></li>
                                <li><a href="#"><HiMiniBuildingOffice2 /> Bhadrak</a></li>
                                <li><a href="#"><HiMiniBuildingOffice2 /> Jajpur</a></li>
                            </ul>
                            
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <u>Contact</u>
                            <ul>
                                <li><FaPhoneSquare /> +91 - 956 XXXX XXX</li>
                                <li><MdEmail /> cdmartbbsr1@gmail.com</li>
                                <li><MdEmail /> cdmartcut2@gmail.com</li>
                                <li><MdEmail /> cdmartbdk3@gmail.com</li>
                                <li><MdEmail /> cdmartjaj4@gmail.com</li>
                                <li><CgWebsite /> www.CDMart.com</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <u>Ratings</u>
                            <ul className='star'>
                                <li><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></li>
                                <li><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></li>
                                <li><FaStar /><FaStar /><FaStar /></li>
                                <li><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div class="footer py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-center">
                                <a href="#" class="footer-link">Register</a>
                                <a href="#" class="footer-link">Form</a>
                                <a href="#" class="footer-link">Affiliate</a>
                                <a href="#" class="footer-link">FAQ</a>
                                <div class="footer-social pt-4 text-center ">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaYoutube /></a>                                    
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="footer-copy">
                                    <div class="copy-right text-center pt-5">
                                        <p class="text-light"><FaRegCopyright />2021, Foodies. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
        </>
    )
}
export default Footer;