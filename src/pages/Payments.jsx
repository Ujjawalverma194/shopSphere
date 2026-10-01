import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContex'

const Payments = () => {

    const { Products } = useContext(ProductContext)
    return (
        <div className='container-fluid payment-section '>
            <div className="container py-4">
                <div className="row">
                    <div className="col-8">

                        <div className="payment-upper">
                            <div className=' d-flex flex-row gap-2'>
                                <div className=' round round1 '><i class="fa-solid fa-check"></i></div>
                                <button> Address</button>
                            </div>

                            <div className=' d-flex flex-row gap-2'>
                                <div className=' round round2 '>2</div>
                                <button> Payment</button>
                            </div>
                            <div className=' d-flex flex-row gap-2'>
                                <div className=' round round3 '>3</div>
                                <button> Review</button>
                            </div>
                        </div>

                        <div className="payment-lower my-4">
                            <h5>Payment method</h5>

                            <form className=' payment-form' action="">
                                <div className='cash-on-del d-flex  flex-row justify-content-between align-items-center'>
                                    <div className=' d-flex flex-row gap-3'> <input type="radio" name="" id="" /> <p className=' fs-5 mt-2'>Cash On Delievery</p></div>
                                    <p>Pay when it arrives</p>
                                </div>
                                <div className='cash-on-del d-flex  flex-row justify-content-between align-items-center'>
                                    <div className=' d-flex flex-row gap-3'> <input type="radio" name="" id="" /> <p className=' fs-5 mt-2'>Credit/Debit Card</p></div>
                                    <p>Demo only, no real payment</p>
                                </div>
                                <label htmlFor="">Card Number</label>
                                <input className='input' type="number" name="" id="" />
                                <div className="row px-2 d-flex flex-row gap-3">
                                    <div className='col-5'>
                                        <label htmlFor=""> Name on Card</label>
                                        <input className='input' type="text" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor=""> Expiry (MM/YY)</label>
                                        <input className=' input' type="text" placeholder="MM/YY" />
                                    </div>
                                    <div className='col-3'>
                                        <label htmlFor=""> CVV</label>
                                        <input className='input' type="password" />
                                    </div>
                                </div>
                                <div className=' d-flex flex-column '>
                                    <label htmlFor="">UPI</label>
                                    <div className=' upi d-flex flex-row justify-content-between'> <input type="radio" /> <p>e.g. name@bank</p></div>
                                </div>
                                <div className="pay-btns d-flex flex-row justify-content-between ">
                                    <button className='back-btn'><i class="fa-solid fa-arrow-left-long"></i>Back to address</button>
                                    <button className='continue-btn'>Continue to review <i class="fa-solid fa-right-long"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-4  payment-order-summary">

                        <div>
                            {
                                Products.slice(0, 3).map((product) => (
                                    <div className=" d-flex flex-row justify-content-between">
                                        <div className=' d-flex  flex-row gap-3'>
                                            <img src={product.image} height={40} width={40} alt="" />
                                            <div className=' d-flex flex-column'>
                                                <p className=' m-0 p-0'>{product.name}</p>
                                                <p>Qty1</p>
                                            </div>
                                        </div>
                                        <p><i class="fa-solid fa-indian-rupee-sign"></i> {product.price}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <hr />
                        <div className=' d-flex flex-row justify-content-between'><p className=' m-0 p-0'>Subtotal</p><p className=' m-0 p-0'> 48,138</p></div>
                        <div className=' d-flex flex-row justify-content-between'><p className=' m-0 p-0'>Coupon SAVE10</p><p className=' m-0 p-0'> 4,814</p></div>
                        <div className=' d-flex flex-row justify-content-between'><p className=' m-0 p-0'>Shipping</p><p className=' m-0 p-0'>Free
                        </p></div>
                        <div className=' d-flex flex-row justify-content-between'><p className=' m-0 p-0'>GST (18%)</p><p className=' m-0 p-0'> 7,798</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
