import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
const Register = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className=" text-light left col-5 ">
                        <div>
                            <p className='  text-light  fs-1 fw-bold'>ShopSphere</p>
                        </div>
                        <div className=' d-flex flex-column gap-3'>
                            <h1 className=' text-light '>Everything You love ,one Cart away</h1>
                            <p className=' left-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id laudantium minima magni voluptatum itaque veniam harum ut qui! Error repudiandae a quibusdam sapiente eius maxime mollitia ad sit consequatur.</p>
                            <ul className=' list-unstyled'>
                                <li><i className="fa-sharp-duotone fa-solid fa-check"></i> &nbsp;Free delivery above 500</li>
                                <li><i className="fa-sharp-duotone fa-solid fa-check"></i> &nbsp; Cart saved across sessions
                                </li>
                                <li><i className="fa-sharp-duotone fa-solid fa-check"></i> &nbsp;Use code SAVE10 for 10% off</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" right col-7">


                        <div className="card col-6 py-4 px-3">
                            <div className="card-body py-4 d-flex flex-column gap-4">
                                <div>
                                    <h3 className=' fw-bold m-0 p-0'>Welcome Back </h3>
                                    <p className='login-para'>Register to continue Shopping</p>
                                </div>
                                <div className=' demo px-3 py-2 '><i className="fa-solid fa-circle-info"></i> Demo Account: <span>abc/abcpass</span></div>
                                <form>
                                    <Input labelName="FirstName" type="text" placeholder="Enter firstName" />
                                    <Input labelName="LastName" type="text" placeholder="Enter lastName"/>
                                    <Input labelName="Email" type="email" placeholder="Enter Email"/>
                                    <Input labelName="password" type="password" placeholder="Enter password"/>
                                     <Button className="btn login-submit-btn" buttonText="Register" />
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
