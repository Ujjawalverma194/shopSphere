import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContex'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import ReviewCard from '../components/ReviewCard'

const ProductsDetails = () => {
    const { Products } = useContext(ProductContext)
    const { id } = useParams()
    const product = Products.find((item) => {
        return item.id == id
    })
    // console.log(product)
    return (
        <>
            {/* <Navbar /> */}
            <div className="container-fluid details-section">
                <div className=' container py-4 '>

                    <div className="row"> <div className="  left-col  col-5">
                        <div className='image-container '>
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                        <div className=" right-col d-flex flex-column gap-3  col-6">
                            <p className='fs-5 m-0' >SMARTPHONES</p>
                            <div className=' d-flex flex-row gap-3'><p>Brand: <b>{product.brand}</b></p>
                                <p>&#11088;{product.rating} &nbsp; {product.reviewCount}</p>
                            </div>

                            <div className=' d-flex flex-row gap-3'>
                                <p className=' d-flex justify-content-center align-items-center m-0 p-0 fs-2 fw-bold'><i className="fa-solid fa-rupee-sign"></i>{product.price} &nbsp; </p>
                                <p className=' d-flex justify-content-center align-items-center m-0 p-0 fs-4 text-decoration-line-through'> <i className="fa-solid fa-rupee-sign"></i> {product.originalPrice}</p>
                                <div className='details-badge'>-{product.discount} %</div>
                            </div>

                            <div className='text-danger'><i className="fa-solid fa-triangle-exclamation"></i>Only {product.stock} left in the stock</div>
                            <p className=' fs-5'>The iPhone 13 Pro has a 6.1-inch display, a triple camera system and all-day
                                battery life. Description, brand, stock and reviews all come from the product
                                endpoint.
                            </p>

                            <hr className='m-0 p-0' />
                            <div>
                                <p>Quantity</p>
                                <div className='product-count'>
                                    <button>-</button>
                                    <button>+</button>
                                </div>
                            </div>

                            <div className='details-btn d-flex flex-row gap-3'>
                                <button className='details-cart-btn'><i className="fa-solid fa-cart-shopping"></i> Add To Cart</button>
                                <button className='wishlist-btn'><i className="fa-solid fa-cart-shopping"></i> WishList</button>
                            </div>
                            <div className='delievery-btn'> <button><i className="fa-solid fa-truck-moving"></i>&nbsp;Free delivery above 500</button> <button><i className="fa-solid fa-arrow-rotate-left"></i> &nbsp;7-day return policy</button> </div>
                        </div>
                    </div>
                    <div className="reviews mb-4">
                        <h2>Customer Reviews</h2>
                        <div className="row px-3">
                            <ReviewCard name="Liam Garcia" date="12 Sep 2026" text="Camera is excellent and the battery easily lasts a full day." />
                            <ReviewCard name="Nora Russel" date="8 Sep 2026" text="abGreat display. Delivery was quick and the box was well packed.c" />
                            <ReviewCard name="Elena Baker" date="2 Sep 2026" text="Very fast phone, a little heavy compared with my old one." />
                        </div>
                    </div>

                    <div >
                        <h3 className='  mb-2'>Similar Products</h3>
                        <div className="row">
                            {
                                Products.slice(0, 4).map((product) => (
                                    <div className="col-3">
                                        <div className="card similar-card  overflow-hidden">
                                            <img src={product.image} height={200} width={100}  className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className=' m-0 p-0'>{product.name}</p>
                                                <h4 className=' m-0 p-0'><b>{product.price}</b></h4>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsDetails
