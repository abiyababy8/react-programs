import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { removeItemFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
function WishList() {
  const wishlistArray = useSelector((state) => state.wishListItems);
  console.log('wishlist items:', wishlistArray)
  const dispatch = useDispatch()
  return (
    <>
      <Row className='m-1 mt-5'>
        {
          wishlistArray.length > 0 ?
            wishlistArray.map((item) => (
              <Col className='mb-3' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }} className='p-3'>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 15)}...</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                      <p className='fw-bolder'>Price: ${item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={() => dispatch(removeItemFromWishlist(item.id))}><i className="fa-solid fa-trash"></i></Button>
                      <Button variant="outline-success" onClick={() => dispatch(addToCart(item))}><i className="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            ))
            :
            <div style={{ height: '50vh' }}>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src='data:image/jpeg;base64,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' />
                <h3 className='text-danger'>YOUR WISHLIST IS EMPTY</h3>
                <Link to='/'>
                  <button className='btn btn-info'><i class="fa-solid fa-arrow-left"></i> BACK TO HOME</button>
                </Link>
              </div>
            </div>
        }
      </Row>
    </>
  )
}

export default WishList