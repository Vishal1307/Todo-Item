import React from 'react'
import styled from "styled-components"
const styles ={
    padding:10,
    width:15,
    margin:10,
    fontSize:10,
    border:"1px solid black",
    borderRadius:10
}


const OtpItem = React.forwardRef(({max,onChange,backSpace},ref) => {
  const handleInput=(e)=>{
    console.log(e.KeyCode)
    switch(e.KeyCode){
      case 8:{
        if(!e.target.value) {
          return backSpace(e.target.value)
        }
        
      }
      default:{
        onChange(e.target.value)
      }
        

    }

  }
  return <input onKeyUp={handleInput} ref={ref} maxLength={max} style={styles}/>

   
  
  
})


export default OtpItem