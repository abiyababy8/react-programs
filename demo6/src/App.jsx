import Address from './components/Address'
import ContactDetails from './components/ContactDetails'
import Counter from './components/Counter'
import EducationalDetails from './components/EducationalDetails'
import LocationDetails from './components/LocationDetails'
import Random from './components/Random'
import UserType from './components/UserType'
function App() {
  const name = 'Minnu'
  const age = 22
  return (
    <>
      <h1 style={{ color: "blue" }}>User Details</h1>
      <Address isShow={true} />
      <ContactDetails firstName={name} />
      <UserType age={age} />
      <EducationalDetails firstName={name} />
      <LocationDetails currentLocation={"Kakkanad"} permenantLocation={"Cherthala"} />
      <Random />
      <Counter />
    </>
  )
}

export default App