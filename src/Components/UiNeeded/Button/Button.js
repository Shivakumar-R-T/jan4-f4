import React from 'react'
import './Button.css'
const Button = ({disabled,onClick,label}) => {
  return (
    <div className={`login-Button  ${disabled}`}>
        <button disabled={disabled} onClick={onClick}>{label} </button>
    </div>
  )
}

export default Button