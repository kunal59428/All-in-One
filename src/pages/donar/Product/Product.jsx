import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../Feature/ProductSlice";
import "./product.css"

function Product() {
    const {product, isLoading} = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getItems())
        console.log(product)
    },[])
    return(
        <div className="product">
            {
                isLoading?<h2>Loading.....</h2>:
                product && product.map(item =>{
                   return(<div className="container" key={item._id}>
                            <div className="header">
                        <img src="./donation/1.jpg" alt="chair" />
                        <div className="product-name">

                        <h2>{item.name}</h2>
                        <button className="btn">Add Item</button>        
                        </div>
                            </div>
                    </div>
                   )
                })
            }
        </div>
    )
}

export default Product