import { Container, Nav, Navbar } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { useAppSelector } from "../app/hooks";

const StoreNavbar = () => {


  const cart = useAppSelector(state => state.cart.reduce((accumulator, item) => {
    return accumulator + item.quantity
  }, 0))
  const price = useAppSelector(state => state.cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity
  }, 0).toFixed(2))
  return (
    <div>

      <Navbar bg='dark' variant='dark' sticky="top" className="justify-content-between" >
        <Container>
          <Container className="d-flex flex-row">
            <Navbar.Brand href='/'> Redux only Store</Navbar.Brand>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link>Shop</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
          <Container className="d-flex justify-content-end " >
            <LinkContainer to="/cart">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="text-white text-center">${price}</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-cart" viewBox="0 0 16 16" >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <h3 className='text-white'> {cart === 0 ? '' : cart}</h3>
              </div>
            </LinkContainer>
          </Container>
        </Container>


      </Navbar>

    </div>
  );
}

export default StoreNavbar;