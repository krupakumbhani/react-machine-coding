import React from 'react'

const InField = ({title, state, setstate}) => {
  return (
    <div>
     <div>{title}</div>
     <input type="Number" placeholder={title} value={state} onChange={(e) => setstate(e.target.value)}/> 
    </div>
  )
}

export default InField