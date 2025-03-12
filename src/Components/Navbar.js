import React from 'react';
import { MdOutlineSearch } from "react-icons/md";
import {NavLink} from 'react-router-dom';
import '../css/Navbar.css';

import gsap  from "gsap";
import { useEffect, useRef  } from "react";

function Navbar(){
    const brandRef = useRef(null);

    useEffect(() => {
      const colors = ["red", "blue", "green", "yellow", "purple"];   
      const a = gsap.timeline({ repeat: -1, yoyo: true });   
      colors.forEach((color) => {
        a.to(brandRef.current, { color: color, duration: 1.5, ease: "power1.inOut" });
      });
    }, []);
    return(
        <nav className="navbar navbar-expand-lg  ">
            <div className='container-fluid mx-lg-5 mx-md-4 mx-sm-0'>
                <span className="navbar-brand badge" href="#" ref={brandRef}>CD-Mart</span>
                <NavLink to="/Signin" ><button className='btn btn-outline-danger hide-btn' type="button">Sign in</button></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggle">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbartoggle">
                    <ul className='navbar-nav justify-content-between ms-5 me-auto mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link'>
                                <NavLink to="/" 
                                    style={({isActive})=>{return{color:isActive ? 'red' :' '}}}
                                >Home</NavLink>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>
                            <NavLink to="/Category"
                                style={({isActive})=>{return{color:isActive ? 'red' :' '}}}
                            >Category</NavLink>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>
                            <NavLink to="/Offers"
                                style={({isActive})=>{return{color:isActive ? 'red' :' '}}}
                            >Offers</NavLink>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>
                            <NavLink to="/Popular"
                                style={({isActive})=>{return{color:isActive ? 'red' :' '}}}
                            >Popular</NavLink>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>
                            <NavLink to="/Account"
                                style={({isActive})=>{return{color:isActive ? 'red' :' '}}}
                            >Account</NavLink>
                            </a>
                        </li>
                    </ul>
                    <form className='d-flex form-1'>
                        <div className='input-group'>
                            <span className='input-group-text'><MdOutlineSearch /></span>
                            <input type="text" placeholder='Search' className='form-control me-2'/>
                        </div>
                        <NavLink to="/Signin" > <button className='btn btn-outline-danger hide-btn2' type="submit">Sign in</button></NavLink>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;