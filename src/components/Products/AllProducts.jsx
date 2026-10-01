import React, { useContext } from 'react'

import { ProductContext } from '../../context/ProductContex'
import ProductCard from './ProductCard'
import Filter from '../Filter'
const AllProducts = () => {
  const { Products } = useContext(ProductContext)
  // console.log(data)
  return (
    <>

    <div className="container-fluid hero">
        <div className="container all-products">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-9">
            <div className='upper'>
              <div className=' d-flex flex-row justify-content-between'>
                <div className=' d-flex flex-column'>
                  <h3>SmartPhones</h3>
                  <p>16 results</p>
                </div>
                <div>
                  Sort By:
                </div>
              </div>
              <div className='filters d-flex flex-row'>
                <button>Categories</button>
                <button>Rating</button>
              </div>
            </div>
            <div className="row">
              {
                Products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default AllProducts
