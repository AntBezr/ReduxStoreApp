import { Button, Col, Container, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const ErorrPage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <section className="page_404">
      <Container>
        <Row>
          <Col className="col-sm-12 d-flex justify-content-center">
            <Col className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>


              </div>

              <div className="contant_box_404">
                <h3 className="h2">
                  Looks like you're lost
                </h3>

                <p>
                  the page you are looking for is not available!</p>

                <Button variant="dark" onClick={goBack}>Go Back</Button>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ErorrPage;