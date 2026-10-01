import React from 'react'

const Input = ({type,placeholder,labelName}) => {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">{labelName}</label>
                <input type={type} className="form-control" placeholder={placeholder} id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
        </div>
    )
}

export default Input
