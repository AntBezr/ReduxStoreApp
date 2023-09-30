import { addToCart, removeItemFromCart } from '../features/cardSlice'

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useAppDispatch } from '../app/hooks';
import { useLocation } from 'react-router-dom';

const Product = (props) => {
  const { image, title, price, rating, quantity } = props
  const product = props;
  const cartItems = props.cartItems
  const dispatch = useAppDispatch()
  const location = useLocation()

  const handleAddProduct = () => {
    console.log('products', product);
    dispatch(addToCart(product))
  }

  const handleRemoveProduct = () => {
    dispatch(removeItemFromCart(product))
  }



  return (
    <Card style={{ width: '18rem', display: "flex", alignItems: "center", justifyContent: "space-around", margin: "16px" }}>
      <Card.Img variant="top" src={image} alt={title} style={{ maxheight: "50%", width: "80%", display: "flex", alignItems: "center", justifyContent: "center" }} />
      <Card.Body style={{ maxHeight: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
        <h4>{title}</h4>
        <h4>{quantity ? `quantity: ${quantity}` : ""}</h4>
        <Card.Text>
          Price: ${price} <br />
          Rating: {rating.rate}, Votes:{rating.count}
        </Card.Text>
        <Button variant='primary' onClick={handleAddProduct}>
          Add to cart
        </Button>
        {location.pathname === "/cart" && <Button variant='danger' onClick={handleRemoveProduct}>
          Remove from Cart
        </Button>}
        {(cartItems.length > 0 && cartItems.find(item => item.id === product.id)) && <Button variant='danger' onClick={handleRemoveProduct}>
          Remove from Cart
        </Button>}
      </Card.Body>
    </Card>

  )
}

export default Product;