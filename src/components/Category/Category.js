import React from 'react'
import { NavLink } from 'react-router-dom'
import './Category.css'

const Category = () =>{
    return(
        <div className='category-main'>
            <div className="Item-product">
                <NavLink to="/product">Furniture</NavLink>
            </div>
            <div className="Item-product">
                <NavLink to="/product">Clothes</NavLink>
            </div>
            <div className="Item-product">
                <NavLink to="/product">Toys</NavLink>
            </div>
            <div className="Item-product">
                <NavLink to="/product">Others Item</NavLink>
            </div>
        </div>
    )
}

export default Category