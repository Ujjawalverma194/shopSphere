import { createContext, useState } from "react";
import ProductData from "../utils/dummyData.json"
export const ProductContext =createContext()


const ProductProvider=({children})=>{
     
    const [Products,setProducts]=useState(ProductData.products)
    const [cartProducts, setCartProducts]=useState([])
    return(
        <>
         <ProductContext.Provider value={{Products,setProducts,cartProducts,setCartProducts}}>
            {children}
         </ProductContext.Provider>
        </>
    )
}

export default ProductProvider