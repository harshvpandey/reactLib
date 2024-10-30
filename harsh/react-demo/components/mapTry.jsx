import React from 'react'

const number=[1,2,3,4,5];

const MapTry = () => {
  return (
   <main>
    {number.map(num=>(
        
            <ul key={num}>
               <li>
                {num}
                </li> 

            </ul>
    
    ))}
   </main>
  )
}

export default MapTry