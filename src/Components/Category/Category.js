import {Routes, Route, Outlet } from "react-router-dom";
import CategoryNav from "./CategoryNav.js";
import Jeans from "./Mens/Jeans.js";
import Tops from "./Mens/Tops.js";
import Traditional from "./Mens/Traditional.js";
import Formal from "./Mens/Formal.js";
import Outerwere from "./Mens/Outerwere.js";
import Footwere from "./Mens/Footwere.js";
function Category(){
    return(
        <>
        
           <CategoryNav/>
        
            {/* <Routes>
               <Route index element={<Tops/>}/>
               <Route path="Jeans" element={<Jeans/>}/>               
               <Route path="Traditional" element={<Traditional/>}/>
               <Route path="Formal" element={<Formal/>}/>
               <Route path="Outerwere" element={<Outerwere/>}/>
               <Route path="Footwere" element={<Footwere/>}/>
            </Routes> */}
            <Outlet/>
         
        </>
    )
}
export default Category;

