import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRestaurant } from '../redux/restaurantSlice'
function Header() {
    const dispatch = useDispatch()
    return (
        <>
            <Navbar className="bg-body-tertiary bg-dark">
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none', width: '100%' }}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Navbar.Brand>
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top me-2"
                                />{' '}
                                <span style={{ color: 'white' }}>FOOD CIRCLE</span>
                            </Navbar.Brand>
                            <input type="text" className='form-control w-25' placeholder='Search By Neighbourhood' onChange={(e) => dispatch(searchRestaurant(e.target.value))} />
                        </div>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header