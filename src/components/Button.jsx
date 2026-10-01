import React from 'react'

const Button = ({buttonText, className,handleClick,icon }) => {
  return (
    <div>
      <button onClick={handleClick}  type="submit" className={className}>{icon}{buttonText}</button>
    </div>
  )
}

export default Button
