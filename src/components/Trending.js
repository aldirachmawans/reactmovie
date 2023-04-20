import { Card, Container, Col, Row, Image} from "react-bootstrap"
import avatarImage from "../assets/images/trending/Avatar.jpg"
import jindanjunImage from "../assets/images/trending/Jin dan Jun.jpeg"
import johnwick4Image from "../assets/images/trending/John Wick 4.jpg"
import kutukanImage from "../assets/images/trending/Kutukan.jpg"
import mariobrosImage from "../assets/images/trending/Mario Bros.jpeg"
import sweetwaterImage from "../assets/images/trending/Sweet water.jpeg"


const Trending = () => {
    return (
    <div>
        <Container>
            <br />
            <h1 className="text-white" id="trending">TRENDING MOVIES</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                        <Image src={ avatarImage } alt="Avatar Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">AVATAR</Card.Title>
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
                        <Image src={ jindanjunImage } alt="Jin Dan Jun Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Jin Dan Jun</Card.Title>
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
                        <Image src={ johnwick4Image } alt="John Wick Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">John Wick 4</Card.Title>
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
                        <Image src={ kutukanImage } alt="Kutukan Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">KUTUKAN</Card.Title>
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
                        <Image src={ mariobrosImage } alt="Mario Bros Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Mario Bros</Card.Title>
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
                        <Image src={ sweetwaterImage } alt="Sweet Water Movies" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Sweet Water</Card.Title>
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

export default Trending