import React from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContex'
const ProductCard = ({ product }) => {

  const { cartProducts, setCartProducts } = useContext(ProductContext)
  const navigate = useNavigate()
  const handleClick = (id) => {


    setCartProducts((prev) => (
      [
        ...prev,
        product
      ]
    ))

    console.log(cartProducts)
    navigate(`/carts`)
  }

  return (
    <div className="col-4  mb-4 rounded " >

      <div className="card overflow-hidden " >
        <Link className="text-decoration-none" onClick={() => navigate(`/products/${product.id}`)}><img src={product.image} className="card-img-top" alt="..." height={300} width={200} /> </Link>
        <div className="card-body">

          <p className='brand'>{product.brand}</p>
          <h5 className=' text-dark p-0 m-0'>{product.name}</h5>
          <p>&#11088;{product.rating}</p>
          <p className=' text-dark'><strong><i className="fa-solid fa-rupee-sign"></i>{product.price}</strong> &nbsp; &nbsp;<span className=' text-decoration-line-through'>{product.originalPrice}</span></p>
          <Button handleClick={() => handleClick(product.id)} className="cart-btn" buttonText="Add To Cart" />
          <span className='like fs-4'><i className="fa-regular fa-heart"></i></span>
          <span className='percentage'>-{product.discount}%</span>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
