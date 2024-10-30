import React from 'react'
const name='harsh';

const Button=()=>{
  const handleOnClick=()=>{console.log("Button Clicked")}
  return (
    <button style={{backgroundColor:'teal',padding:'0.8rem 3rem',color:'white',border:"none"}} onClick={handleOnClick}>Click</button>
  )
}
const Basic = () => {
  return (
    <div>
        <div>
           My Name is {name}
        </div>
        2+2 = {2+2}
        <div>
          <Button></Button>
        </div>
    </div>
  )
}

export default Basic