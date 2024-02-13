import React from 'react'

const SliderField = ({ title,underlineTitle,
  onChange,
  state,
  min,
  max,
  labelMin,
  labelMax }) => {
  return (
    <div>
      <div>{title}</div>
      <p>{underlineTitle}</p>
      <input type="range" min={min} max={max} onChange={onChange} className='slider' />
      <div className='sliderlabel'>
        <span>{labelMin ?? min}</span>
        <span>{state}</span>
        <span>{labelMax ?? max}</span>
      </div>
    </div>
  )
}

export default SliderField