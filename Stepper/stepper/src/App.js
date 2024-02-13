import './App.css';
import { useRef, useState, useEffect } from "react";
function App() {
  const Steps = ['Applied', 'Application set', 'Application viewed', 'Resume Viewed']
  const [activestep, setActivestep] = useState(1)
  const [iscompleted, setiscompleted] = useState(false)
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  function handleNext() {
    setActivestep((prev) => {
      if (Steps.length === prev) {
        setiscompleted(true)
        return prev
      } else {
        return prev + 1
      }
    })
  }
  function calculateProgressBarWidth() {
    return ((activestep - 1) / (Steps.length - 1)) * 100
  }
  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[Steps.length - 1].offsetWidth / 2,
    });
  }, [stepRef, Steps.length]);
  
  return (
    <>
      <div className='stepbox'>
        {
          Steps && Steps.map((each, index) => (
            <div className='stepminibox' key={index} ref={(ele) => stepRef.current[index] = ele}>
              <div className={`stepnumber  ${activestep === index + 1 ? 'active' : ''} ${(activestep > index + 1) || iscompleted ? 'completed' : ''}`}>{(activestep > index + 1 || iscompleted) ? <span>&#10003;</span> : index + 1}</div>
              <div className='step'>{each}</div>
            </div>
          ))
        }

        <div className="progressbar" style={{
            width: `calc(100% - ${margins.marginLeft}px - ${margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}>
          <div className="progress" style={{ width: `${calculateProgressBarWidth()}%` }}></div>
        </div>

      </div>
      {
        !iscompleted ?
          <button className='btn' onClick={handleNext}>{activestep === Steps.length ? 'Finish' : 'Next'}</button> :
          <h2 className='finishtext'>You Finished The process Successfully </h2>
      }
    </>
  );
}

export default App;
