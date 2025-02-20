import TextField from '@mui/material/TextField';
function App() {

  return (
    <>
      <div style={{ backgroundColor: 'black', height: '100vh' }} className="d-flex justify-content-center align-items-center">
        <div style={{ backgroundColor: 'white', width: '500px' }} className="rounded p-5">
          <h2 className="text-center">Simple Interest</h2>
          <p className="text-center">Calculate Your Simple Interest Easily</p>
          <div style={{ height: '150px', backgroundColor: 'orange' }} className="d-flex justify-content-center align-items-center flex-column mt-3 rounded shadow">
            <h2 className="fw-bold">₹ 4000</h2>
            <p className="fw-bold">Total Simple Interest</p>
          </div>
          <form action="" className='mt-4'>
            <div className='mb-3'>
            <TextField id="outlined-basic" label="Principle" variant="outlined" className='w-100'/>
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" className='w-100'/>
            </div>
            <div className='mb-3'>
            <TextField id="outlined-basic" label="Number of Years" variant="outlined" className='w-100'/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default App