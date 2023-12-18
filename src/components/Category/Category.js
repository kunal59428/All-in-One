import React from 'react'
import { NavLink } from 'react-router-dom'
import './Category.css'

const Category = () =>{
    return(
        <div className='category-main'>
            <div className="Item-product">
                <NavLink to="/">Furniture</NavLink>
            </div>
            <div className="Item-product">
                <NavLink to="/">Clothes</NavLink>
            </div>
            <div className="Item-product">
                <NavLink to="/">Toys</NavLink>
            </div>
            <div className="Item-product">
                <NavLink to="/">Others Item</NavLink>
            </div>
        </div>
    )
}

export default Category