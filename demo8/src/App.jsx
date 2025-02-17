

function App() {

  const loginUser = () => {
    console.log('Inside loginUser function')
  }
  return (
    <>
      <h2>REACT FORMS</h2>
      <form onSubmit={loginUser}>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter your username" style={{ padding: '10px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} />
        <input type="submit" style={{ backgroundColor: 'blue', padding: '10px', marginLeft: '10px', color: 'white' }} value={'Login'} />
      </form>
    </>
  )
}

export default App
