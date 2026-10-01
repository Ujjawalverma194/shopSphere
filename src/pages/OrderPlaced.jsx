import React from 'react'

const OrderPlaced = () => {
  return (
    <div>
      <div className="page-wrapper d-flex align-items-center justify-content-center">

      <div className="order-card">

        {/* Success Icon */}
        <div className="success-icon d-flex align-items-center justify-content-center mx-auto">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M11 21.5L17.5 28L31.5 14"
              stroke="#188442"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="order-title text-center">
          Order placed!
        </h1>

        <p className="order-subtitle text-center">
          Thanks, Emily. Your order is confirmed.
        </p>

        {/* Summary */}
        <div className="row g-3 summary-row">

          <div className="col-md-4">
            <div className="summary-box">
              <div className="summary-label">
                ORDER ID
              </div>
              <div className="summary-value">
                #SS-58213
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="summary-box">
              <div className="summary-label">
                TOTAL PAID
              </div>
              <div className="summary-value">
                ₹51,122
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="summary-box">
              <div className="summary-label">
                ARRIVES BY
              </div>
              <div className="summary-value">
                Sun, 4 Oct
              </div>
            </div>
          </div>

        </div>

        {/* Products */}
        <div className="products">

          <div className="product-row d-flex justify-content-between">
            <span>Vivo X21 × 1</span>
            <span>₹24,899</span>
          </div>

          <div className="product-row d-flex justify-content-between">
            <span>Apple AirPods Pro × 1</span>
            <span>₹20,749</span>
          </div>

          <div className="product-row d-flex justify-content-between">
            <span>Leather Phone Case × 2</span>
            <span>₹2,490</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="row g-3">

          <div className="col-md-6">
            <button className="btn continue-btn w-100">
              Continue shopping
            </button>
          </div>

          <div className="col-md-6">
            <button className="btn orders-btn w-100">
              View my orders
            </button>
          </div>

        </div>

      </div>

    </div> 
    </div>
  )
}

export default OrderPlaced
