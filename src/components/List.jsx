import { useAppDispatch, useAppSelector } from "../app/hooks";

import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import Product from "./Product";
import Row from 'react-bootstrap/Row';
import { fetchProducts } from "../features/productsSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const List = () => {
  const products = useSelector(state => state.products.products)
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart)
  useEffect(() => {
    if (products.length < 1) dispatch(fetchProducts());
  }, [dispatch, products])



  return (

    <Container>
      <Row xs={1} md={4} className="g-2">
        {products.map(product => (
          <Col key={product.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Product
              key={product.id}
              {...product}
              cartItems={cartItems}
            />
          </Col>
        ))}
      </Row>
    </Container>


  );
}

export default List;