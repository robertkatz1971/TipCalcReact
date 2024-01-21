import { useState } from 'react'
import Bill from './Bill.jsx'
import TipAmount from './TipAmount.jsx'
import TotalTip from './TotalTip.jsx'

function App() {

  const [total, setTotal] = useState("");
  const [tipPct, setTipPct] = useState(null);
  const [tipPct2, setTipPct2] = useState(null);

  const handleTipPct = (percent) => {
    setTipPct(Number(percent));
  }

  const handleTipPct2 = (percent) => {
    setTipPct2(Number(percent));
  }

  const handleAmountChange = (amount) => {
    setTotal(amount);
  }

  return (
    <>
      <Bill total={total} onChange={handleAmountChange} />
      <TipAmount question="How did you like the service?" onChange={handleTipPct} tipPercent={tipPct} />
      <TipAmount question="How did your friend like the service?" onChange={handleTipPct2} tipPercent={tipPct2} />
      <TotalTip total={total} tipPercentages={[tipPct, tipPct2]} />
    </>
  )
}

export default App
