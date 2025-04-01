import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeItemFromCart } from '../redux/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
function Cart() {
  const [total, setTotal] = useState(0)
  const cartArray = useSelector(state => state.cartItems)
  console.log('Cart:', cartArray)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const getTotal = () => {
    let sum = 0;
    cartArray.forEach((item) => {
      sum = sum + item.price
    })
    setTotal(sum)
  }
  useEffect(() => {
    getTotal()
  }, [cartArray])
  const checkout = () => {
    alert('Your Order is Successfully Placed!!')
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <>
      <div style={{ marginTop: '100px' }} className='container mb-5'>
        {
          cartArray.length > 0 ?
            <div className="row w-100">
              <div className="col-md-6 col-lg-6">
                <table className='table shadow border ms-1'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td><img src={item.image} alt="" height={'30px'} /></td>
                          <td>${item.price}</td>
                          <td><Button variant='outline-danger' onClick={() => dispatch(removeItemFromCart(item.id))}><i className='fa-solid fa-trash'></i></Button></td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className='border shadow p-3'>
                  <h3 className='text-warning'>CART SUMMARY</h3>
                  <h5>Total Number of Products: <span className='fw-bolder fs-5 text-warning'>{cartArray.length}</span></h5>
                  <h5>Total Price: <span className='fw-bolder fs-5 text-warning'>$ {total}</span></h5>
                  <button className='btn btn-success rounded w-100 mt-3' onClick={checkout}>CHECK OUT</button>
                </div>
              </div>
            </div>
            : <div className='d-flex align-items-center justify-content-center flex-column'>
              <img src="https://img.freepik.com/premium-vector/modern-design-concept-no-product-found-cart-design_637684-219.jpg" alt="" height={'350px'} width={'400px'} />
              <Link to={'/'}><Button variant='info'><i className="fa-solid fa-arrow-left"></i> BACK TO HOME</Button></Link>
            </div>
        }
      </div>
    </>
  )
}

export default Cart