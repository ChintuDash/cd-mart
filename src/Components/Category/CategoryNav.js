import React from "react";
import "../../css/Category/CategoryNav.css";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";


class CategoryNav extends React.Component{
   
    render(){
    return(
        <>
            <section className="container-fluid bg-secondary cat-main-box">
                <div className="container category-box">
                <ul className="nav nav-tabs category-box-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button">Men's</a>
                    <ul className="dropdown-menu">
                        <li><Link to=""><a className="dropdown-item" >Tops & Shirts</a></Link></li>
                        <li><Link to="Jeans"><a className="dropdown-item" >Jeans</a></Link></li>
                        <li><Link to="Traditional"><a className="dropdown-item" >Traditional Were</a></Link></li>                        
                        <li><Link to="Formal"><a className="dropdown-item" >Formal Were</a></Link></li>
                        <li><Link to="Outerwere"><a className="dropdown-item" >Outerwere</a></Link></li>
                        <li><Link to="Footwere"><a className="dropdown-item" >Footwere</a></Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" >Women's</a>
                    <ul className="dropdown-menu">
                        <li><Link to=""><a className="dropdown-item" >Tops & Shirts</a></Link></li>
                        <li><Link to="Jeans"><a className="dropdown-item" >Jeans</a></Link></li>
                        <li><Link to="Traditional"><a className="dropdown-item" >Traditional Were</a></Link></li>                        
                        <li><Link to="Formal"><a className="dropdown-item" >Formal Were</a></Link></li>
                        <li><Link to="Outerwere"><a className="dropdown-item" >Outerwere</a></Link></li>
                        <li><Link to="Footwere"><a className="dropdown-item" >Footwere</a></Link></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Kid's</a>
                    <ul className="dropdown-menu">
                        <li><Link to=""><a className="dropdown-item" >Tops & Shirts</a></Link></li>
                        <li><Link to="Jeans"><a className="dropdown-item" >Jeans</a></Link></li>
                        <li><Link to="Traditional"><a className="dropdown-item" >Traditional Were</a></Link></li>                        
                        <li><Link to="Formal"><a className="dropdown-item" >Formal Were</a></Link></li>
                        <li><Link to="Outerwere"><a className="dropdown-item" >Outerwere</a></Link></li>
                        <li><Link to="Footwere"><a className="dropdown-item" >Footwere</a></Link></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Other Item</a>
                    <ul className="dropdown-menu">
                        <li><Link to=""><a className="dropdown-item" >Tops & Shirts</a></Link></li>
                        <li><Link to="Jeans"><a className="dropdown-item" >Jeans</a></Link></li>
                        <li><Link to="Traditional"><a className="dropdown-item" >Traditional Were</a></Link></li>                        
                        <li><Link to="Formal"><a className="dropdown-item" >Formal Were</a></Link></li>
                        <li><Link to="Outerwere"><a className="dropdown-item" >Outerwere</a></Link></li>
                        <li><Link to="Footwere"><a className="dropdown-item" >Footwere</a></Link></li>
                    </ul>
                </li>
                <li id="icon" class="position-relative"><BsCartCheck />
                <span class="position-absolute right-1 px-2 bg-danger border border-light rounded-circle">
                    <small id="cartadd">0</small>
                </span>
                </li>
                <li id="icon"><MdOutlineAccountCircle /></li>
                </ul>
                </div>
                <div>
                    
                </div>
            </section>
        </>
    )
}
}
export default CategoryNav;

