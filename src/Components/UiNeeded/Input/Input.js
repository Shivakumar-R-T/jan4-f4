import React from 'react'
import './Input.css'
const Input = ({label,name,value,onChange}) => {
  return (
    <div className='Input-container'>
        <div className='input-Label'>{label} : </div>
          
            <input className='inputBox' value={value} name={name} onChange={onChange}/>
        
    </div>
  )
}

export default Input