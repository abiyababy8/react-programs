import React from 'react'
import Styles from './myStyle.module.css'

function UserDetails() {
  return (
    <>
    <h3 className={Styles.first_name}>Name: Sean</h3>
    <h4 id={Styles.location}>Location: Kochi</h4>
    </>
  )
}

export default UserDetails