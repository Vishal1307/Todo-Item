import React, { useState } from 'react'
import OtpInput from './OtpInput'

const Otp = () => {
  const [value,setValue]=useState("")
  console.log(value)
  return (
    <div>
      
      <OtpInput label="OTP-VALUE" onChange={(val)=>setValue(val)} len={4} max={1}/>
      <h1>{value}</h1>

    </div>
  )
}

export default Otp