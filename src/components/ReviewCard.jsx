import React from 'react'

const ReviewCard = ({name, date,text}) => {
  return (
    <>
    <div className=" review-card col-3 d-flex flex-column gap-3">
        <div className=' d-flex flex-row  justify-content-between'>
            <h5 className='m-0 p-0'><b>{name}</b></h5>
            <p className='m-0 p-0'>{date}</p>
        </div>
        <div className='details-rating '>&#11088;&#11088;&#11088;&#11088;&#11088;</div>
        <div className="review-text m-0 p-0">
            <p>{text}</p>
        </div>
    </div>
    
    </>
  )
}

export default ReviewCard
