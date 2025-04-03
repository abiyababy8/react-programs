import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'

function Home() {
    // to call any fn inside slice use useDispatch() hook
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRestaurant())
    }, [])
    // useSelector hook is used to access values from store
    const allRestaurant = useSelector((state) => state.restaurantStore.allRestaurant.restaurants)
    console.log("Restaurant Data:", allRestaurant)
    return (
        <>
            <Row>
                {
                    allRestaurant?.length > 0 ?
                        allRestaurant.map(item => (
                            <Col sm={6} md={4} lg={3} className='px-5 py-3'>
                                <RestCard restData={item}/>
                            </Col>
                        )) :
                        <p className='text-center'>No Restaurants Found</p>
                }

            </Row>
        </>
    )
}

export default Home