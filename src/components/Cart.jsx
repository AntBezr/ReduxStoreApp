import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import Product from "./Product";
import Row from 'react-bootstrap/Row';
import { useAppSelector } from "../app/hooks";

function Cart() {
  const cartItems = useAppSelector(state => state.cart)
  const price = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity
  }, 0).toFixed(2)
  return (
    <Container >
      <h1>Welcome to Cart</h1>
      <h3>Total:${price}</h3>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      <Row xs={1} md={4} className="g-2">
        {cartItems.map(item => (
          <Col key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Product {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cart;