import './App.css';
import { useState, useEffect } from "react";
import InField from './component/InField';
import SliderField from './component/SliderField';
function App() {
  const tenure = [12, 24, 36, 48, 60]
  const [cost, setcost] = useState(0)
  const [interestrate, setinterestrate] = useState(0)
  const [processfee, setprocessfee] = useState(1)
  const [downpayment, setdownpayment] = useState(0)
  const [emi, setemi] = useState(0)
  const [months, setMonths] = useState(12)
 
  const updateDownPayment = (e) => {
    if (!cost) return;
    const em = Number(e.target.value)
    setemi(em.toFixed(0))

    const dp = calculateDP(em)
    setdownpayment(dp)
  }

  function updateEMI(e) {
    if (!cost) return;
    const dp = Number(e.target.value)
    setdownpayment(dp.toFixed(0))

    const em = calculateEMI(dp)
    setemi(em)
  }
  function totalDownPayment() {
    return (Number(downpayment) + ((cost-downpayment) * processfee)/100).toFixed(0)
  }
  function totalEMI() {
    return (emi * months).toFixed(0)
  }
  function calculateEMI() {
    
  }
function calculateDP(emi) {
  if (!cost) return;

}
  return (
    <>
      <h1>EMI Calculator</h1>
      <InField title={'Total Cost of Asset'} state={cost} setstate={setcost} />
      <InField title={'Interest Rate (in %)'} state={interestrate} setstate={setinterestrate} />
      <InField title={'Processing Fee (in %)'} state={processfee} setstate={setprocessfee} />
      <SliderField title="Down Payment"
        underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
        onChange={updateEMI}
        state={downpayment}
        min={0}
        max={cost}
        labelMin={"0%"}
        labelMax={"100%"} />
      <SliderField title="Loan per Month"
        underlineTitle={`Total Loan Amount - ${totalEMI()}`}
        onChange={updateDownPayment}
        state={emi}
        min={calculateEMI(cost)}  
        max={calculateEMI(0)} />
      {
        tenure && tenure.map((each, index) => (
          <button key={index} className={`${each === months ? 'selected' : ''}`} onClick={() => setMonths(each)}>{each}</button>
        ))
      }
    </>
  );
}

export default App;
