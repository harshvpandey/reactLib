import React from 'react'

const Add = () => {
  return (
   <h1 className='harsh'>THis is add component</h1>
  )
}
const InvalidPassword=()=>{
  return(
    <h1>invalid Passoword</h1>
  )
}
const ValidPassword=()=>{
  return(
    <h1>Valid Password</h1>
  )
}

const Password=(props)=>{
  if(props.isValid){
    return <ValidPassword></ValidPassword>
  }
  else{
    return <InvalidPassword></InvalidPassword>
  }
}
export { Add, Password };