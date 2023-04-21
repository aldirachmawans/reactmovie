import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro" id="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAPERLU KARCIS</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark" href="#trending">Built using React Bootstrap</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro
