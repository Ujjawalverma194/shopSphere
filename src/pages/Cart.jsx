import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContex'
import Button from '../components/Button'

const Cart = () => {

    const { cartProducts } = useContext(ProductContext)

    return (
        <div className='container-fluid cart-section'>
            <div className="container">

                <h1 className='cart-title'>Your bag</h1>

                <div className='cart-tabs d-flex flex-row gap-4'>
                    <a className='active-tab' href="">Cart ({cartProducts.length})</a>
                    <a href="">Wishlist (2)</a>
                </div>

                <hr className='cart-hr' />

                <div className='row cart-container'>

                    
                    <div className="col-lg-8 cart-table-wrapper">

                        <table className='cart-table'>

                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cartProducts.map((product) => {

                                        const quantity = product.quantity || 1

                                        return (
                                            <tr key={product.id}>

                                                
                                                <td>
                                                    <div className='product-info'>

                                                        <div className='table-image'>
                                                            <img
                                                                src={product.image}
                                                                alt=""
                                                            />
                                                        </div>

                                                        <div className='product-details'>
                                                            <p className='product-name'>
                                                                {product.name}
                                                            </p>

                                                            <p className='stock-text'>
                                                                In stock
                                                            </p>
                                                        </div>

                                                    </div>
                                                </td>

                                               
                                                <td>
                                                    <span className='product-price'>
                                                        ₹{product.price}
                                                    </span>
                                                </td>

                                               
                                                <td>
                                                    <div className='quantity'>

                                                        <button>-</button>

                                                        <span>{quantity}</span>

                                                        <button>+</button>

                                                    </div>
                                                </td>

                                               
                                                <td>
                                                    <div className='total'>

                                                        <span className='product-total'>
                                                            ₹{product.price * quantity}
                                                        </span>

                                                        <button className='delete-btn'>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>

                                                    </div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>

                        <div className='continue-shopping'>
                            ← Continue shopping
                        </div>

                    </div>


                   
                    <div className="col-lg-4">

                        <div className="order-summary">

                            <h5>Order summary</h5>

                            <div className='coupon-section'>

                                <p>Coupon code</p>

                                <div className='coupon-row'>
                                    <input
                                        className='coupon-input'
                                        type="text"
                                        value="SAVE10"
                                        readOnly
                                    />

                                    <button className='remove-btn'>
                                        Remove
                                    </button>
                                </div>

                                <p className='coupon-success'>
                                    SAVE10 applied — 10% off
                                </p>

                            </div>

                            <hr />

                            <div className='summary-items'>

                                <div>
                                    <p>Subtotal (4 items)</p>
                                    <p>₹48,138</p>
                                </div>

                                <div>
                                    <p>Coupon discount</p>
                                    <p className='discount'>−₹4,814</p>
                                </div>

                                <div>
                                    <p>Shipping</p>
                                    <p className='shipping'>Free</p>
                                </div>

                                <div>
                                    <p>GST (18%)</p>
                                    <p>₹7,798</p>
                                </div>

                            </div>

                            <hr />

                            <div className="totals">

                                <div className='total-row'>
                                    <p>Total</p>
                                    <p className='final-total'>₹51,122</p>
                                </div>

                                <Button
                                    className="cart-btn"
                                    buttonText="Proceed to checkout"
                                />

                            </div>

                            <p className='calculation-text'>
                                Totals are computed with selectors, never stored
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cart