import React from 'react'
import { useState } from 'react'



const Card = (x ) => {



  return (
    <div>
        <div className="card">
            <div className="card-header">
              
              {x.Title}

</div>           <div className="card-body">

{x.children}



</div>          
           
        </div>
    </div>
  )
}

export default Card