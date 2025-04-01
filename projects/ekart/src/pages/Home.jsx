import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, Card } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
function Home() {
  const allProducts = useFetch('https://fakestoreapi.com/products')
  console.log('All Products:', allProducts)
  const dispatch = useDispatch()
  return (
    <>
      <Row className='m-1 mt-5'>
        {
          allProducts.length > 0 ?
            allProducts.map((item) => (
              <Col className='mb-3'>
                <Card style={{ width: '18rem' }} className='p-3'>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 15)}...</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                      <p className='fw-bolder'>Price: ${item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={() => dispatch(addToWishlist(item))}><i className="fa-solid fa-heart"></i></Button>
                      <Button variant="outline-success" onClick={()=>dispatch(addToCart(item))}><i className="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            ))
            :
            <p>NO ITEM FOUND!</p>
        }
      </Row>

    </>
  )
}

export default Home