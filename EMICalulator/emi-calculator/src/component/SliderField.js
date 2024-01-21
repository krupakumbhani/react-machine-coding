import React from 'react'

const SliderField = ({title, state,setstate,labelmin,labelmax,min,max}) => {
  return (
    <div>
    <div>{title}</div>
    <input type="range" min={min} max={max} onChange={(e) => setstate(e.target.value)} className='slider'/>
    <div className='sliderlabel'>
        <span>{labelmin ?? min}</span>
        <span>{state}</span>
        <span>{labelmax ?? max}</span>
    </div>
    </div>
  )
}

export default SliderField