import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../Feature/ProductSlice";

function Product() {
    const {product, isLoading} = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getItems())
        console.log(product)
    },[])
    return(
        <>
            <h1>All product</h1>
            {
                isLoading?<h2>Loading.....</h2>:
                product && product.map(item =>{
                   return(<div key={item._id}>
                        <h2>{item.name}</h2>
                        <h3>{item.cat}</h3>
                        <h2>{item.file}</h2>
                        <img src="./donation/1.jpg" alt="chair" />
                    </div>
                   )
                })
            }
        </>
    )
}

export default Product