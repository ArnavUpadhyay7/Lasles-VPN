import React from 'react'

const Details = (props) => {
  return (
    <div className='flex'>
        <img src={props.imgSrc}/>
        <div className='flex flex-col px-6 pt-3'>
            <h3 className='font-bold'>{props.figures}</h3>
            <p>{props.name}</p>
        </div>
    </div>
  )
}

export default Details
