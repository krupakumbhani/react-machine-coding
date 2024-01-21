import './App.css';
import { useState } from "react";
import InField from './component/InField';
import SliderField from './component/SliderField';
function App() {
  const [cost, setcost] = useState(0)
  const [interestrate, setinterestrate] = useState(0)
  const [processfee, setprocessfee] = useState(1)
  const [downpayment, setdownpayment] = useState(0)
  const [emi, setemi] = useState(0)
  return (
    <>
     <h1>EMI Calculator</h1>
     <InField title={'Total Cost of Asset'} state={cost} setstate={setcost}/>
     <InField title={'Interest Rate'} state={interestrate} setstate={setinterestrate}/>
     <InField title={'Processing Fee'} state={processfee} setstate={setprocessfee}/>
     <SliderField title={'Down Payment'} state={downpayment} setstate={setdownpayment} min={0} max={cost}/>
     <SliderField title={'Loan per Month'} state={emi} setstate={setemi} />
    </>
  );
}

export default App;
