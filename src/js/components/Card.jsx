import React from 'react'

const Card= (props) =>{
  
    return (
      
        <div className="card my-3 mx-2 text-white bg-secondary col-1 " >
          <div className="card-body">
            <h1 className="card-title display-1">{props.text}</h1>
        
          </div>
        </div>
    )
}

export default Card