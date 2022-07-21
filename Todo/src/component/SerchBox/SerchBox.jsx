import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {useThrottle} from "use-throttle"
const SerchBox = ({loading,setLoading,setQuery,data,onChange}) => {
    const [text,setText]=useState("")
    const [hover,setHover]=useState(false)
    const [active,setActive]=useState(0)
    const thertalText=useThrottle(text,1000)
    useEffect(()=>{
        onChange(thertalText)

    },[thertalText.onChange])
    
    const handleInput=(e)=>{
        setText(e.target.value)
        setQuery(e.target.value)
        setLoading(true)
    }
    const handleClear=()=>{
        setText("")
        setQuery("")
        setLoading(false)
    }
    const mouseEnter=()=>{
        setHover(true)
    }
    const mouseOut=()=>{
        setHover(false)
    }

  return (
    <>
        <SerchWrapper>
            <Image src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-1.png' alt='image-item'/>
            <Input type="text" value={text} onChange={handleInput}/>
            {text && <RightItem>
                <Image src='https://flyclipart.com/thumb2/red-cross-mark-clipart-printable-674654.png' alt='cross-image' onClick={handleClear}/>
            
                </RightItem>
            }
            {loading && <StyledSpinner viewBox="0 0 50 50">
                    <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                    />
                </StyledSpinner>}

        </SerchWrapper>
        {!loading && data.length>0  }{
            <DataBox active={active} >
                {data.map((cv)=><div style={{
                    backgroundColor:hover?"green":"white",
                    border: "1px solid gray",
                    padding:"10px",
                    margin: "10px"

                }} key={cv.id}  onMouseLeave={mouseOut}>{cv.item}</div>)}
            </DataBox>
        }
    </>
  )
}
const DataBox=styled.div`
    border: 1px solid black;
    border-radius: 10px;
    max-height: 400px;
    display: flex;
    overflow: auto;
    flex-direction: column;
    &:nth-child(${({active})=>active}){
        background: yellowgreen;
        font-size: 20px;

    }

`

const SerchWrapper=styled.div`
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: 10px;
    max-height: 300px;
    display: flex;



`
const Image=styled.img`
    /* width: 30px; */
    height: 30px;
    cursor: pointer;
`
const Input=styled.input`
    border: none;
    outline: none;
`
const RightItem=styled.div``
const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  /* margin: -25px 0 0 -25px; */
  width: 30px;
  height: 30px;
  
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default SerchBox