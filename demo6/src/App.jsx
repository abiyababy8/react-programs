import Address from './components/Address'
import ContactDetails from './components/ContactDetails'
import EducationalDetails from './components/EducationalDetails'
import UserType from './components/UserType'
function App() {
const name='Sean'
const age=22
  return (
    <>
      <h1 style={{ color: "blue" }}>User Details</h1>
      <Address isShow={true} />
      <ContactDetails firstName={name}/>
      <UserType age={age}/>
      <EducationalDetails firstName={name} rollNo={4356}/>
    </>
  )
}

export default App