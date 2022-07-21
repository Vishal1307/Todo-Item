import React, { useEffect, useRef, useState } from 'react'
import OtpItem from './OtpItem'
import PropTypes from 'prop-types';
const OtpInput = ({label,len,max,onChange}) => {
    const [value,setValue]=useState(new Array(len).fill(""))
    const element=useRef(new Array(len).fill(0))
    const handleData=(val,ind)=>{
     
      const ar=[...value]
      ar[ind]=value
      setValue(ar)
      if(value.length>0 && value.length<=max && ind<len-1){
        element.current[ind+1].focus()
      }
      onChange(ar.join(" "))

    }
    const handleBackSpace=(value,ind)=>{
      if(ind>0){
        element.current[ind-1].focus()
      }

    }
    
   
  return (
    <div>
        <h1>{label}</h1> 
        {value.map((cv,ind)=>(<OtpItem ref={n=>element.current[ind]==n} backSpace={(v)=>handleBackSpace(v,ind)} onChange={(v)=>handleData(v,ind)} key={ind} max={max} />))}

    </div>
  )
}
OtpInput.prototype={
  label:PropTypes.string,
  len:PropTypes.number,
  max:PropTypes.number,
  onChange:PropTypes.func,



}
OtpInput.defaultProps={
  label:"OTP-BOX",
  len:3,
  max:1
}

export default OtpInput