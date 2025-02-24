import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle, setPrinciple] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');
  const [interest, setInterest] = useState(0);

  //states for checking if values are valid
  const [isPrincipleValid, setIsPrincipleValid] = useState(true)
  const [isRateValid, setIsRateValid] = useState(true)
  const [isYearValid, setIsYearValid] = useState(true)

  const validate = (e) => {
    const input_field = e.target.name;
    const input_value = e.target.value;
    console.log(input_field, input_value)
    if (!!input_value.match(/^[1-9][0-9]*$/)) {
      console.log('Input is valid')
      if (input_field === 'principle_amount') {
        setIsPrincipleValid(true)
        setPrinciple(input_value)
      }
      else if (input_field === 'rate_of_interest') {
        setIsRateValid(true)
        setRate(input_value)
      }
      else {
        setIsYearValid(true)
        setYear(input_value)
      }
    }
    else {
      if (input_field === 'principle_amount') {
        setIsPrincipleValid(false)
        setPrinciple(input_value)
      }
      else if (input_field === 'rate_of_interest') {
        setIsRateValid(false)
        setRate(input_value)
      }
      else {
        setIsYearValid(false)
        setYear(input_value)
      }
    }
  }
  const handleCalculate = (e) => {
    e.preventDefault();
    if (principle === '' || rate === '' || year === '') {
      alert("Please Enter All Values");
    }
    else {
      const result = (principle * rate * year) / 100;
      setInterest(result)

    }
  }
  const handleReset = () => {
    setInterest(0)
    setPrinciple('')
    setRate('')
    setYear('')
  }
  return (
    <>
      <div style={{ backgroundColor: 'black', height: '110vh' }} className="d-flex justify-content-center align-items-center">
        <div style={{ backgroundColor: 'white', width: '500px' }} className="rounded p-5">
          <h2 className="text-center">Simple Interest</h2>
          <p className="text-center">Calculate Your Simple Interest Easily</p>
          <div style={{ height: '150px', backgroundColor: 'orange' }} className="d-flex justify-content-center align-items-center flex-column mt-3 rounded shadow">
            <h2 className="fw-bold">₹ {interest}</h2>
            <p className="fw-bold">Total Simple Interest</p>
          </div>
          <form action="" className='mt-4' onSubmit={handleCalculate}>
            <div className='mb-3'>
              <TextField id="outlined-basic" label="Principle" variant="outlined" className='w-100' name='principle_amount' onChange={(e) => validate(e)} value={principle} />
              {
                !isPrincipleValid &&
                <p style={{ color: 'red' }}>Invalid input</p>
              }
            </div>
            <div className='mb-3'>
              <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" className='w-100' name='rate_of_interest' onChange={(e) => validate(e)} value={rate} />
              {
                !isRateValid &&
                <p style={{ color: 'red' }}>Invalid input</p>
              }
            </div>
            <div className='mb-3'>
              <TextField id="outlined-basic" label="Number of Years" variant="outlined" className='w-100' name='num_of_years' onChange={(e) => validate(e)} value={year} />
              {
                !isYearValid &&
                <p style={{ color: 'red' }}>Invalid input</p>
              }
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <Button type='submit' variant="contained" color='success' style={{ width: '190px', padding: '10px' }} disabled={!isPrincipleValid || !isRateValid || !isYearValid} >Calculate</Button>
              <Button variant="outlined" style={{ width: '190px', padding: '10px' }} onClick={handleReset}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default App