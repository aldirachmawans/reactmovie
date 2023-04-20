import { Card, Container, Col, Row, Image} from "react-bootstrap"
import mulanImage from "../assets/images/action/film-action-2020-mulan.jpg"
import goodbyeuglyImage from "../assets/images/action/Good Bye Ugly.jpg"
import notimetodieImage from "../assets/images/action/No Time To Die.jpg"
import nobodyImage from "../assets/images/action/Nobody.jpeg"
import thecovenantImage from "../assets/images/action/The Covenant.jpeg"
import totalrecallImage from "../assets/images/action/Total Recall.jpg"


const Action = () => {
    return (
    <div>
        <Container>
            <br />
            <h1 className="text-white" id="action">ACTION MOVIES</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                        <Image src={ mulanImage } alt="Mulan Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">MULAN</Card.Title>
                                <Card.Text className="text-left">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                        <Image src={ goodbyeuglyImage } alt="Good Bye Ugly Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Good Bye Ugly</Card.Title>
                                <Card.Text className="text-left">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                        <Image src={ notimetodieImage } alt="No Time To Die Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">No Time To Die</Card.Title>
                                <Card.Text className="text-left">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                        <Image src={ nobodyImage } alt="Nobody Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">NOBODY</Card.Title>
                                <Card.Text className="text-left">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                        <Image src={ thecovenantImage } alt="The Covenant Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">The Covenant</Card.Title>
                                <Card.Text className="text-left">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                        <Image src={ totalrecallImage } alt="Total Recall Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Total Recall</Card.Title>
                                <Card.Text className="text-left">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Card.Text className="text-left">Last update 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>

    </div>
    )
}

export default Action