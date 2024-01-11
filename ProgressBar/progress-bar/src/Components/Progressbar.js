import React, {useEffect, useState} from 'react'
import { MAX, MIN } from "../constants";
const Progressbar = ({value}) => {
    const [target, setTarget] = useState(value)
    useEffect(() => {
        setTarget(Math.min(Math.max(value, MIN), MAX));
    }, [value])
    
  return (
    <>
    <div className="main">
        <span style={{color : target > 47 ? 'white' : 'black'}}>{target.toFixed()}%</span>
        <div className='uper' style={{ width : `${target}%` }}
        // style={{
        //     transform: `scaleX(${percent / MAX})`,
        //     transformOrigin: "left"
        //   }}
        //   aria-valuemin={MIN}
        //   aria-valuemax={MAX}
        //   aria-valuenow={percent}
        //   role="progressbar"
        ></div>
    </div>
    </>
  )
}

export default Progressbar